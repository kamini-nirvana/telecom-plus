import type { Metadata } from "next";
import { SolutionDetail } from "@/components/SolutionDetail";
import { NETWORK_INFRASTRUCTURE, NETWORK_INFRASTRUCTURE_META } from "@/data/network-infrastructure";

export const metadata: Metadata = NETWORK_INFRASTRUCTURE_META;

export default function Page() {
  return <SolutionDetail content={NETWORK_INFRASTRUCTURE} />;
}
