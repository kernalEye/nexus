"use client";

import ActiveAlertsCard from "../alerts/active-alerts-card";
import ServiceHealthCard from "../infrastructure/service-health-card";
import EnvironmentsCard from "../infrastructure/environments-card";
import RecentIncidentsCard from "../incidents/recent-incidents-card";

export default function RightSidebar() {
  return (
    <aside className="flex flex-col gap-9.5">
      <ActiveAlertsCard />

      {/* Coming Next */}
      <div className="rounded-3xl border border-dashed border-white/10 bg-[#101426] p-8">
        {/* <p className="text-center text-sm text-slate-500"> */}
          <ServiceHealthCard />
        {/* </p> */}
      </div>

      <div className="rounded-3xl border border-dashed border-white/10 bg-[#101426] p-8">
        {/* <p className="text-center text-sm text-slate-500"> */}
          <EnvironmentsCard />
        {/* </p> */}
      </div>

      <div className="rounded-3xl border border-dashed border-white/10 bg-[#101426] p-8">
        {/* <p className="text-center text-sm text-slate-500"> */}
          <RecentIncidentsCard />
        {/* </p> */}
      </div>
    </aside>
  );
}