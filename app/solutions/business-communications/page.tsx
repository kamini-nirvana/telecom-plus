import type { Metadata } from "next";
import { SolutionDetail } from "@/components/SolutionDetail";
import {
  BUSINESS_COMMUNICATIONS,
  BUSINESS_COMMUNICATIONS_META,
} from "@/data/business-communications";

export const metadata: Metadata = BUSINESS_COMMUNICATIONS_META;

export default function Page() {
  return <SolutionDetail content={BUSINESS_COMMUNICATIONS} />;
}
