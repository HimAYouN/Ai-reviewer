
import type { Metadata } from "next";

import { DashboardHeader } from "@/features/dashboard/components/dashboard-header";
import { OverviewContent } from "@/features/dashboard/components/overview-content";
import { getOverview } from "@/features/overview/server/overview-content";
import { requireAuth } from "@/features/auth/actions";

export const metadata: Metadata = {
  title: "Overview · Dashboard",
};

/**
 * Default dashboard landing page with summary stats and activity feed.
 *
 * @returns Overview header and content for the signed-in user.
 */
export default async function DashboardOverviewPage() {
  const session = await requireAuth();
  const overview = await getOverview(session.user.id);

  return (
    <>
      <DashboardHeader
        title="Overview"
        description="Summary of reviews and connected repositories."
      />
      <OverviewContent overview={overview} />
    </>
  );
}