"use client";

import {
  Activity,
  Clock3,
  HeartPulse,
  TriangleAlert,
} from "lucide-react";

import MetricCard from "../cards/metric-card";

export default function MetricsGrid() {
  return (
    <section
      className="
        grid
        gap-6
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4
      "
    >
      <MetricCard
        title="Requests"
        value="24.8K"
        trend={12.5}
        subtitle="vs last 7d"
        icon={Activity}
        color="violet"
      />

      <MetricCard
        title="Error Rate"
        value="0.45%"
        trend={-4.3}
        subtitle="vs last 7d"
        icon={TriangleAlert}
        color="red"
      />

      <MetricCard
        title="Latency (P95)"
        value="342ms"
        trend={8.7}
        subtitle="vs last 7d"
        icon={Clock3}
        color="orange"
      />

      <MetricCard
        title="Uptime"
        value="99.99%"
        trend={0.01}
        subtitle="vs last 7d"
        icon={HeartPulse}
        color="green"
      />
    </section>
  );
}