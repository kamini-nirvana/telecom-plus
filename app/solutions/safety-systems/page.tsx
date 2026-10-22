import type { Metadata } from "next";
import { SolutionDetail } from "@/components/SolutionDetail";
import { SAFETY_SYSTEMS, SAFETY_SYSTEMS_META } from "@/data/safety-systems";

export const metadata: Metadata = SAFETY_SYSTEMS_META;

export default function Page() {
  return <SolutionDetail content={SAFETY_SYSTEMS} />;
}
