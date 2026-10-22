import type { Metadata } from "next";
import { SolutionDetail } from "@/components/SolutionDetail";
import { VIDEO_SURVEILLANCE, VIDEO_SURVEILLANCE_META } from "@/data/video-surveillance";

export const metadata: Metadata = VIDEO_SURVEILLANCE_META;

export default function Page() {
  return <SolutionDetail content={VIDEO_SURVEILLANCE} />;
}
