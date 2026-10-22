import type { Metadata } from "next";
import { SolutionDetail } from "@/components/SolutionDetail";
import { BACKUP_POWER, BACKUP_POWER_META } from "@/data/backup-power";

export const metadata: Metadata = BACKUP_POWER_META;

export default function Page() {
  return <SolutionDetail content={BACKUP_POWER} />;
}
