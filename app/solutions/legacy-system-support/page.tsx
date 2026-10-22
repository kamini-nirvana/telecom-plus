import type { Metadata } from "next";
import { SolutionDetail } from "@/components/SolutionDetail";
import { LEGACY_SYSTEM_SUPPORT, LEGACY_SYSTEM_SUPPORT_META } from "@/data/legacy-system-support";

export const metadata: Metadata = LEGACY_SYSTEM_SUPPORT_META;

export default function Page() {
  return <SolutionDetail content={LEGACY_SYSTEM_SUPPORT} />;
}
