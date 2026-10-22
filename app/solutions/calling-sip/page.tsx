import type { Metadata } from "next";
import { SolutionDetail } from "@/components/SolutionDetail";
import { CALLING_SIP, CALLING_SIP_META } from "@/data/calling-sip";

export const metadata: Metadata = CALLING_SIP_META;

export default function Page() {
  return <SolutionDetail content={CALLING_SIP} />;
}
