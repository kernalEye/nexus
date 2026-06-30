"use client";

import GlassCard from "@/components/ui/glass-card";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  ArrowUpRight,
  MoreHorizontal,
} from "lucide-react";

const data = [
  { time: "00", requests: 820, errors: 3 },
  { time: "02", requests: 980, errors: 5 },
  { time: "04", requests: 1140, errors: 4 },
  { time: "06", requests: 1380, errors: 7 },
  { time: "08", requests: 1740, errors: 6 },
  { time: "10", requests: 2260, errors: 10 },
  { time: "12", requests: 2840, errors: 14 },
  { time: "14", requests: 2610, errors: 9 },
  { time: "16", requests: 3120, errors: 12 },
  { time: "18", requests: 2980, errors: 8 },
  { time: "20", requests: 2360, errors: 5 },
  { time: "22", requests: 1780, errors: 4 },
];

export default function ThroughputChart() {
  return (
    <GlassCard className="overflow-hidden p-5">
      {/* Header */}

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">
            Throughput & Error Trend
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Requests/sec vs Errors • Last 24 Hours
          </p>
        </div>

        <button
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-white/10
            bg-[#151B2E]
            transition
            hover:border-violet-500/30
            hover:bg-violet-500/10
          "
        >
          <MoreHorizontal
            size={18}
            className="text-slate-400"
          />
        </button>
      </div>

      {/* Stats */}

      <div className="mb-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <div className="rounded-2xl border border-white/10 bg-[#151B2E] p-3">
          <p className="text-xs uppercase tracking-wider text-slate-500">
            Requests Today
          </p>

          <h3 className="mt-2 text-2xl font-bold text-white">
            2.4M
          </h3>

          <div className="mt-2 flex items-center gap-1 text-emerald-400">
            <ArrowUpRight size={16} />
            <span className="text-sm">+14.2%</span>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#151B2E] p-3">
          <p className="text-xs uppercase tracking-wider text-slate-500">
            Avg RPS
          </p>

          <h3 className="mt-2 text-2xl font-bold text-white">
            1.8K
          </h3>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#151B2E] p-3">
          <p className="text-xs uppercase tracking-wider text-slate-500">
            Errors
          </p>

          <h3 className="mt-2 text-2xl font-bold text-red-400">
            438
          </h3>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#151B2E] p-3">
          <p className="text-xs uppercase tracking-wider text-slate-500">
            Success Rate
          </p>

          <h3 className="mt-2 text-2xl font-bold text-emerald-400">
            99.82%
          </h3>
        </div>
      </div>

      {/* Chart */}

      <div className="h-[260px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <LineChart data={data}>
            <CartesianGrid
              stroke="#20263B"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748B" }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748B" }}
            />

            <Tooltip
              contentStyle={{
                background: "#101426",
                border: "1px solid rgba(255,255,255,.08)",
                borderRadius: 14,
              }}
            />

            <Legend />

            <Line
              type="monotone"
              dataKey="requests"
              stroke="#8B5CF6"
              strokeWidth={3}
              dot={false}
              name="Requests/sec"
            />

            <Line
              type="monotone"
              dataKey="errors"
              stroke="#EF4444"
              strokeWidth={3}
              dot={false}
              name="Errors"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </GlassCard>
  );
}