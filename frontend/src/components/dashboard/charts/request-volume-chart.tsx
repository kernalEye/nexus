"use client";

import ChartCard from "./chart-card";
import AreaChart from "./area-chart";

const requestData = [
  { time: "00:00", requests: 120 },
  { time: "02:00", requests: 180 },
  { time: "04:00", requests: 140 },
  { time: "06:00", requests: 260 },
  { time: "08:00", requests: 320 },
  { time: "10:00", requests: 410 },
  { time: "12:00", requests: 380 },
  { time: "14:00", requests: 450 },
  { time: "16:00", requests: 510 },
  { time: "18:00", requests: 470 },
  { time: "20:00", requests: 390 },
  { time: "22:00", requests: 280 },
];

export default function RequestVolumeChart() {
  return (
    <ChartCard
      title="Request Volume"
      subtitle="Last 24 Hours"
    >
      <AreaChart
        data={requestData}
        xAxisKey="time"
        dataKey="requests"
      />
    </ChartCard>
  );
}