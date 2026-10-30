"use client";

import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
} from "react";
import { MapPinIcon, MinusIcon, PlusIcon } from "@/components/ui/icons";

export type LatLng = { lat: number; lng: number };

export type MapMarker = {
  id: string;
  label: string;
  coords: LatLng;
};

type LocationMapProps = {
  markers: readonly MapMarker[];
  /** Marker to centre on and highlight. When null the map shows the overview. */
  selectedId: string | null;
  onSelect?: (id: string) => void;
  /** Markers to include when fitting the overview. Defaults to all markers. */
  fitIds?: readonly string[];
  /**
   * Zoom level used when centring on a selected marker. When omitted the map
   * opens on the overview and selecting a marker pans without zooming, so
   * every other marker stays in view.
   */
  focusZoom?: number;
  /** Where the selected marker sits in the viewport (0–1). */
  focus?: { x: number; y: number };
  /** Space reserved for an overlay on top of the map, in px. */
  padding?: { top?: number; right?: number; bottom?: number; left?: number };
  showAllLabel?: string;
  ariaLabel: string;
  className?: string;
};

type View = {
  center: LatLng;
  prev: LatLng;
  zoom: number;
  pan: { x: number; y: number };
  glide: boolean;
};

const TILE = 256;
const MIN_ZOOM = 5;
const MAX_ZOOM = 16;
const MAX_TILES = 60;
const WORLD_LNG = -180;
const HINT_MS = 1800;
/** Zoom levels per pixel of wheel/pinch delta, and the cap per event. */
const WHEEL_ZOOM_RATE = 0.0075;
const WHEEL_ZOOM_STEP_MAX = 0.4;

function toWorld({ lat, lng }: LatLng, world: number) {
  const sin = Math.sin((lat * Math.PI) / 180);
  return {
    x: ((lng - WORLD_LNG) / 360) * world,
    y: (0.5 - Math.log((1 + sin) / (1 - sin)) / (4 * Math.PI)) * world,
  };
}

function tileUrl(x: number, y: number, z: number) {
  const n = 2 ** z;
  return `https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/${z}/${y}/${((x % n) + n) % n}`;
}

/** Centre and zoom that show every marker inside the viewport. */
function fitView(
  markers: readonly MapMarker[],
  size: { w: number; h: number },
  pad: Required<NonNullable<LocationMapProps["padding"]>>,
): { center: LatLng; zoom: number } {
  const lats = markers.map((m) => m.coords.lat);
  const lngs = markers.map((m) => m.coords.lng);
  const north = Math.max(...lats);
  const south = Math.min(...lats);
  const east = Math.max(...lngs);
  const west = Math.min(...lngs);
  // Mercator-correct centre, so the bounding box is visually centred.
  const w1 = toWorld({ lat: north, lng: west }, 1);
  const w2 = toWorld({ lat: south, lng: east }, 1);
  const midY = (w1.y + w2.y) / 2;
  const centerLat =
    (Math.atan(Math.sinh(Math.PI * (1 - 2 * midY))) * 180) / Math.PI;
  const center = { lat: centerLat, lng: (east + west) / 2 };

  const availW = Math.max(80, size.w - pad.left - pad.right - 56);
  const availH = Math.max(80, size.h - pad.top - pad.bottom - 80);
  let zoom = MAX_ZOOM;
  while (zoom > MIN_ZOOM) {
    const world = TILE * 2 ** zoom;
    if ((w2.x - w1.x) * world <= availW && (w2.y - w1.y) * world <= availH) {
      break;
    }
    zoom -= 1;
  }
  return { center, zoom: Math.min(zoom, 13) };
}

export function LocationMap({
  markers,
  selectedId,
  onSelect,
  fitIds,
  focusZoom,
  focus = { x: 0.5, y: 0.5 },
  padding,
  showAllLabel = "Show all locations",
  ariaLabel,
  className = "",
}: LocationMapProps) {
  const pad = {
    top: padding?.top ?? 0,
    right: padding?.right ?? 0,
    bottom: padding?.bottom ?? 0,
    left: padding?.left ?? 0,
  };
  const viewportRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ x: number; y: number; moved: boolean } | null>(null);
  const hintTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [hint, setHint] = useState<string | null>(null);

  const fitMarkers = fitIds
    ? markers.filter((m) => fitIds.includes(m.id))
    : markers;
  const selected = markers.find((m) => m.id === selectedId) ?? null;

  const [view, setView] = useState<View>(() => {
    const start = selected?.coords ??
      fitMarkers[0]?.coords ?? { lat: 49.25, lng: -123.1 };
    return {
      center: start,
      prev: start,
      zoom: focusZoom ?? 9,
      pan: { x: 0, y: 0 },
      glide: false,
    };
  });
  const fitKey = fitMarkers.map((m) => m.id).join("|");
  const [applied, setApplied] = useState<{
    id: string | null;
    fitKey: string;
    sized: boolean;
  }>({ id: selectedId, fitKey, sized: false });

  // Re-centre when the selection changes, fit the overview once the viewport
  // has been measured, and refit when the overview's pin set changes (e.g. a
  // search). Runs during render so the first paint after a change is already
  // in the right place.
  const sized = size.w > 0 && size.h > 0;
  const fitChanged = applied.fitKey !== fitKey && !selected;
  if (applied.id !== selectedId || (sized && !applied.sized) || fitChanged) {
    const selectionChanged = applied.id !== selectedId;
    let next: { center: LatLng; zoom: number } | null = null;
    if (selected && (focusZoom !== undefined || selectionChanged)) {
      next = { center: selected.coords, zoom: focusZoom ?? view.zoom };
    } else if (sized && fitMarkers.length) {
      next = fitView(fitMarkers, size, pad);
    }
    if (next) {
      setView({
        center: next.center,
        prev: view.center,
        zoom: next.zoom,
        pan: { x: 0, y: 0 },
        glide: applied.sized,
      });
    }
    setApplied({ id: selectedId, fitKey, sized: sized || applied.sized });
  }

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      if (entry) {
        setSize({
          w: entry.contentRect.width,
          h: entry.contentRect.height,
        });
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const { zoom } = view;
  // Zoom is continuous. Tiles come from the nearest integer level and are
  // scaled to match, so a pinch glides between levels instead of jumping.
  const tileZoom = Math.round(zoom);
  const tileSize = TILE * 2 ** (zoom - tileZoom);
  const world = TILE * 2 ** zoom;
  const point = toWorld(view.center, world);
  const from = toWorld(view.prev, world);
  const fx = pad.left + focus.x * (size.w - pad.left - pad.right);
  const fy = pad.top + focus.y * (size.h - pad.top - pad.bottom);
  const tx = fx + view.pan.x - point.x;
  const ty = fy + view.pan.y - point.y;

  const last = 2 ** tileZoom - 1;
  let x0 = Math.floor((Math.min(point.x, from.x) - fx - view.pan.x) / tileSize);
  let x1 = Math.floor(
    (Math.max(point.x, from.x) + (size.w - fx) - view.pan.x) / tileSize,
  );
  let y0 = Math.max(
    0,
    Math.floor((Math.min(point.y, from.y) - fy - view.pan.y) / tileSize),
  );
  let y1 = Math.min(
    last,
    Math.floor(
      (Math.max(point.y, from.y) + (size.h - fy) - view.pan.y) / tileSize,
    ),
  );
  const tooMany = (x1 - x0 + 1) * (y1 - y0 + 1) > MAX_TILES;
  if (tooMany) {
    x0 = Math.floor(-tx / tileSize);
    x1 = Math.floor((size.w - tx) / tileSize);
    y0 = Math.max(0, Math.floor(-ty / tileSize));
    y1 = Math.min(last, Math.floor((size.h - ty) / tileSize));
  }

  const tiles: { x: number; y: number }[] = [];
  if (sized) {
    for (let y = y0; y <= y1; y++) {
      for (let x = x0; x <= x1; x++) tiles.push({ x, y });
    }
  }

  /**
   * Zoom by `delta` levels (fractional allowed). With an anchor (viewport px)
   * the point under the cursor stays put; otherwise the zoom is about the
   * focus point.
   */
  function changeZoom(delta: number, anchor?: { x: number; y: number }) {
    setView((current) => {
      const next = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, current.zoom + delta));
      if (next === current.zoom) return current;
      const k = 2 ** (next - current.zoom);
      const pan = anchor
        ? {
            x: (anchor.x - fx) * (1 - k) + k * current.pan.x,
            y: (anchor.y - fy) * (1 - k) + k * current.pan.y,
          }
        : { x: current.pan.x * k, y: current.pan.y * k };
      return {
        ...current,
        prev: current.center,
        zoom: next,
        pan,
        glide: false,
      };
    });
  }

  function showAll() {
    if (!sized || !fitMarkers.length) return;
    const next = fitView(fitMarkers, size, pad);
    setView({
      center: next.center,
      prev: view.center,
      zoom: next.zoom,
      pan: { x: 0, y: 0 },
      glide: true,
    });
  }

  function flashHint() {
    const mac = /Mac|iPhone|iPad/.test(navigator.platform);
    setHint(`Use ${mac ? "⌘" : "Ctrl"} + scroll to zoom`);
    if (hintTimer.current) clearTimeout(hintTimer.current);
    hintTimer.current = setTimeout(() => setHint(null), HINT_MS);
  }

  // Wheel zoom needs a non-passive listener so the page doesn't also scroll.
  // Plain scrolling stays with the page, as on embedded maps.
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    function onWheel(event: WheelEvent) {
      if (!(event.ctrlKey || event.metaKey)) {
        flashHint();
        return;
      }
      // Keep the zoom gesture away from the page's smooth-scroll handler.
      event.preventDefault();
      event.stopPropagation();
      // Trackpad pinches arrive as many small ctrl+wheel events; scale the
      // zoom to the gesture so it tracks the fingers instead of jumping.
      const pixels =
        event.deltaMode === WheelEvent.DOM_DELTA_LINE
          ? event.deltaY * 16
          : event.deltaY;
      const delta = Math.max(
        -WHEEL_ZOOM_STEP_MAX,
        Math.min(WHEEL_ZOOM_STEP_MAX, -pixels * WHEEL_ZOOM_RATE),
      );
      if (!delta) return;
      const rect = el!.getBoundingClientRect();
      changeZoom(delta, {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
      if (hintTimer.current) clearTimeout(hintTimer.current);
    };
    // fx/fy only move when the viewport is resized or padding changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fx, fy]);

  function onDoubleClick(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    changeZoom(1, {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = {
      x: event.clientX - view.pan.x,
      y: event.clientY - view.pan.y,
      moved: false,
    };
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    const start = dragRef.current;
    if (!start) return;
    const pan = { x: event.clientX - start.x, y: event.clientY - start.y };
    if (
      !start.moved &&
      Math.hypot(pan.x - view.pan.x, pan.y - view.pan.y) < 4
    ) {
      return;
    }
    start.moved = true;
    setView({ ...view, prev: view.center, pan, glide: false });
  }

  function endDrag() {
    dragRef.current = null;
  }

  function onMarkerKey(event: KeyboardEvent<HTMLButtonElement>, id: string) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect?.(id);
    }
  }

  const glide = view.glide && !tooMany;

  return (
    <div
      ref={viewportRef}
      role="region"
      aria-label={ariaLabel}
      data-zoom={zoom.toFixed(2)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onDoubleClick={onDoubleClick}
      className={`cursor-grab touch-pan-y overflow-hidden rounded-[4px] bg-panel select-none active:cursor-grabbing md:touch-none ${className}`}
    >
      <div
        className={`absolute top-0 left-0 ${glide ? "transition-transform duration-700 ease-out-expo motion-reduce:transition-none" : ""}`}
        style={{ transform: `translate3d(${tx}px, ${ty}px, 0)` }}
      >
        {tiles.map(({ x, y }) => (
          <span
            key={`${tileZoom}/${x}/${y}`}
            aria-hidden="true"
            className="absolute bg-cover"
            style={{
              left: x * tileSize,
              top: y * tileSize,
              width: tileSize + 0.5,
              height: tileSize + 0.5,
              backgroundImage: `url(${tileUrl(x, y, tileZoom)})`,
            }}
          />
        ))}

        {markers.map((marker) => {
          // Whole pixels, so server and client serialise the style identically.
          const raw = toWorld(marker.coords, world);
          const p = { x: Math.round(raw.x), y: Math.round(raw.y) };
          const active = marker.id === selected?.id;
          const hovered = marker.id === hoveredId;
          return (
            <button
              key={marker.id}
              type="button"
              aria-label={marker.label}
              aria-pressed={active}
              onPointerDown={(event) => event.stopPropagation()}
              onDoubleClick={(event) => event.stopPropagation()}
              onClick={() => onSelect?.(marker.id)}
              onKeyDown={(event) => onMarkerKey(event, marker.id)}
              onMouseEnter={() => setHoveredId(marker.id)}
              onMouseLeave={() => setHoveredId(null)}
              onFocus={() => setHoveredId(marker.id)}
              onBlur={() => setHoveredId(null)}
              className={`absolute flex -translate-x-1/2 -translate-y-full flex-col items-center gap-1.5 ${
                active ? "z-20" : hovered ? "z-10" : ""
              } ${onSelect ? "cursor-pointer" : "cursor-default"}`}
              style={{ left: p.x, top: p.y }}
            >
              <span
                className={`bg-white px-3 py-2 text-micro whitespace-nowrap shadow-card transition-opacity duration-300 ${
                  active || hovered
                    ? "opacity-100"
                    : "pointer-events-none opacity-0"
                }`}
              >
                {marker.label}
              </span>
              <span className="relative grid place-items-center">
                {active ? (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1.5 size-3 rounded-full bg-brand motion-safe:animate-ping-soft motion-reduce:hidden"
                  />
                ) : null}
                <MapPinIcon
                  className={`relative transition-transform duration-300 ${
                    active
                      ? "size-6 text-brand"
                      : "size-4 text-cobalt hover:scale-125"
                  }`}
                />
              </span>
            </button>
          );
        })}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-mist mix-blend-multiply"
      />

      <p
        role="status"
        aria-live="polite"
        className={`pointer-events-none absolute inset-x-0 top-8 z-30 mx-auto w-fit bg-ink/80 px-4 py-2.5 text-small text-white transition-opacity duration-300 ${
          hint ? "opacity-100" : "opacity-0"
        }`}
      >
        {hint}
      </p>

      <p className="absolute top-0 right-0 bg-white/80 px-1.5 py-0.5 text-[9px] text-ink/60">
        Esri, HERE, Garmin, ©{" "}
        <a
          href="https://www.openstreetmap.org/copyright"
          target="_blank"
          rel="noreferrer"
        >
          OpenStreetMap
        </a>{" "}
        contributors
      </p>

      <div
        onPointerDown={(event) => event.stopPropagation()}
        onDoubleClick={(event) => event.stopPropagation()}
        className="absolute right-2.5 bottom-2.5 flex flex-col items-end gap-2"
      >
        {markers.length > 1 ? (
          <button
            type="button"
            onClick={showAll}
            className="min-h-11 border border-ink/10 bg-white px-3 text-micro uppercase shadow-card transition-colors hover:bg-tint md:min-h-7"
          >
            {showAllLabel}
          </button>
        ) : null}
        <div className="flex flex-col shadow-card">
          <button
            type="button"
            aria-label="Zoom in"
            disabled={zoom >= MAX_ZOOM}
            onClick={() => changeZoom(Math.floor(zoom) + 1 - zoom)}
            className="grid size-11 place-items-center border-b border-ink/10 bg-white transition-colors hover:bg-tint disabled:text-ink/30 md:size-7"
          >
            <PlusIcon className="size-3" />
          </button>
          <button
            type="button"
            aria-label="Zoom out"
            disabled={zoom <= MIN_ZOOM}
            onClick={() => changeZoom(Math.ceil(zoom) - 1 - zoom)}
            className="grid size-11 place-items-center bg-white transition-colors hover:bg-tint disabled:text-ink/30 md:size-7"
          >
            <MinusIcon className="size-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
