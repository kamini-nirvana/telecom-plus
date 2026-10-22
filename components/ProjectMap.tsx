"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import { MapPinIcon, MinusIcon, PlusIcon } from "@/components/ui/icons";

type LatLng = { lat: number; lng: number };

type ProjectMapProps = {
  center: LatLng;
  label: string;
};

type Trail = {
  label: string;
  center: LatLng;
  prev: LatLng;
  pan: { x: number; y: number };
  glide: boolean;
};

const TILE = 256;
const MIN_ZOOM = 8;
const MAX_ZOOM = 16;
const FOCUS = { x: 0.7, y: 0.42 };
const MAX_TILES = 60;

function toWorld({ lat, lng }: LatLng, world: number) {
  const sin = Math.sin((lat * Math.PI) / 180);
  return {
    x: ((lng + 180) / 360) * world,
    y: (0.5 - Math.log((1 + sin) / (1 - sin)) / (4 * Math.PI)) * world,
  };
}

function tileUrl(x: number, y: number, z: number) {
  const n = 2 ** z;
  return `https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/${z}/${y}/${((x % n) + n) % n}`;
}

export function ProjectMap({ center, label }: ProjectMapProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ x: number; y: number } | null>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [zoom, setZoom] = useState(12);
  const [trail, setTrail] = useState<Trail>({
    label,
    center,
    prev: center,
    pan: { x: 0, y: 0 },
    glide: false,
  });

  if (trail.label !== label) {
    setTrail({
      label,
      center,
      prev: trail.center,
      pan: { x: 0, y: 0 },
      glide: true,
    });
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

  const world = TILE * 2 ** zoom;
  const point = toWorld(center, world);
  const from = toWorld(trail.prev, world);
  const tx = FOCUS.x * size.w + trail.pan.x - point.x;
  const ty = FOCUS.y * size.h + trail.pan.y - point.y;

  const last = 2 ** zoom - 1;
  let x0 = Math.floor(
    (Math.min(point.x, from.x) - FOCUS.x * size.w - trail.pan.x) / TILE,
  );
  let x1 = Math.floor(
    (Math.max(point.x, from.x) + (1 - FOCUS.x) * size.w - trail.pan.x) / TILE,
  );
  let y0 = Math.max(
    0,
    Math.floor(
      (Math.min(point.y, from.y) - FOCUS.y * size.h - trail.pan.y) / TILE,
    ),
  );
  let y1 = Math.min(
    last,
    Math.floor(
      (Math.max(point.y, from.y) + (1 - FOCUS.y) * size.h - trail.pan.y) / TILE,
    ),
  );
  const tooMany = (x1 - x0 + 1) * (y1 - y0 + 1) > MAX_TILES;
  if (tooMany) {
    x0 = Math.floor(-tx / TILE);
    x1 = Math.floor((size.w - tx) / TILE);
    y0 = Math.max(0, Math.floor(-ty / TILE));
    y1 = Math.min(last, Math.floor((size.h - ty) / TILE));
  }

  const tiles: { x: number; y: number }[] = [];
  if (size.w > 0) {
    for (let y = y0; y <= y1; y++) {
      for (let x = x0; x <= x1; x++) tiles.push({ x, y });
    }
  }

  function changeZoom(step: 1 | -1) {
    const scale = step === 1 ? 2 : 0.5;
    setZoom(zoom + step);
    setTrail({
      ...trail,
      prev: trail.center,
      pan: { x: trail.pan.x * scale, y: trail.pan.y * scale },
      glide: false,
    });
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = {
      x: event.clientX - trail.pan.x,
      y: event.clientY - trail.pan.y,
    };
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    const start = dragRef.current;
    if (!start) return;
    setTrail({
      ...trail,
      prev: trail.center,
      pan: { x: event.clientX - start.x, y: event.clientY - start.y },
      glide: false,
    });
  }

  function endDrag() {
    dragRef.current = null;
  }

  return (
    <div
      ref={viewportRef}
      role="region"
      aria-label={`Map showing ${label}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      className="relative h-[300px] cursor-grab touch-pan-y overflow-hidden rounded-[4px] bg-panel shadow-card select-none active:cursor-grabbing md:h-[440px] md:touch-none"
    >
      <div
        className={`absolute top-0 left-0 ${trail.glide && !tooMany ? "transition-transform duration-700 ease-out-expo motion-reduce:transition-none" : ""}`}
        style={{ transform: `translate3d(${tx}px, ${ty}px, 0)` }}
      >
        {tiles.map(({ x, y }) => (
          <span
            key={`${zoom}/${x}/${y}`}
            aria-hidden="true"
            className="absolute size-64 bg-cover"
            style={{
              left: x * TILE,
              top: y * TILE,
              backgroundImage: `url(${tileUrl(x, y, zoom)})`,
            }}
          />
        ))}

        <div
          className="absolute flex -translate-x-1/2 -translate-y-full flex-col items-center gap-2"
          style={{ left: point.x, top: point.y }}
        >
          <span className="bg-white px-3 py-2 text-micro whitespace-nowrap shadow-card">
            {label}
          </span>
          <span className="relative grid place-items-center">
            <span
              aria-hidden="true"
              className="absolute -bottom-1.5 size-3 rounded-full bg-brand motion-safe:animate-ping-soft motion-reduce:hidden"
            />
            <MapPinIcon className="relative size-6 text-brand" />
          </span>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-mist mix-blend-multiply"
      />

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
        className="absolute right-2.5 bottom-2.5 flex flex-col shadow-card"
      >
        <button
          type="button"
          aria-label="Zoom in"
          disabled={zoom === MAX_ZOOM}
          onClick={() => changeZoom(1)}
          className="grid size-11 place-items-center border-b border-ink/10 bg-white transition-colors hover:bg-tint disabled:text-ink/30 md:size-7"
        >
          <PlusIcon className="size-3" />
        </button>
        <button
          type="button"
          aria-label="Zoom out"
          disabled={zoom === MIN_ZOOM}
          onClick={() => changeZoom(-1)}
          className="grid size-11 place-items-center bg-white transition-colors hover:bg-tint disabled:text-ink/30 md:size-7"
        >
          <MinusIcon className="size-3" />
        </button>
      </div>
    </div>
  );
}
