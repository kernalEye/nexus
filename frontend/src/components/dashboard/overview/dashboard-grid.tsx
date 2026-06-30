"use client";

import GreetingHeader from "./greeting-header";
import MetricsGrid from "./metrics-grid";
import RequestVolumeChart from "../charts/request-volume-chart";
import RightSidebar from "../right-sidebar/right-sidebar";
import ServicesTable from "../services/services-table";
import ErrorRateChart from "../charts/error-rate-chart";
import CpuUsageChart from "../charts/cpu-usage-chart";
import MemoryUsageChart from "../charts/memory-usage-chart";
import ThroughputChart from "../charts/throughput-chart";

export default function DashboardGrid() {
  return (
    <div className="space-y-5">
      {/* Greeting */}
      <GreetingHeader />

      {/* KPI Cards */}
      <MetricsGrid />

      <div className="grid grid-cols-12 gap-6">
        {/* Left */}
        <div className="col-span-12 xl:col-span-8 space-y-4">
          <RequestVolumeChart />
          <ErrorRateChart />
          <CpuUsageChart />
          <MemoryUsageChart />
          <ThroughputChart />
        </div>

        {/* Right */}
        <div className="col-span-12 xl:col-span-4">
          <RightSidebar />
        </div>
      </div>


      <div className="mt-3">
        <ServicesTable />
      </div>
    </div>
  );
}