"use client";

import GlassCard from "@/components/ui/glass-card";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { MemoryStick, MoreHorizontal } from "lucide-react";

const data = [
  { time: "00", memory: 38 },
  { time: "02", memory: 42 },
  { time: "04", memory: 46 },
  { time: "06", memory: 44 },
  { time: "08", memory: 58 },
  { time: "10", memory: 64 },
  { time: "12", memory: 69 },
  { time: "14", memory: 72 },
  { time: "16", memory: 68 },
  { time: "18", memory: 60 },
  { time: "20", memory: 54 },
  { time: "22", memory: 48 },
];

export default function MemoryUsageChart() {
  return (
    <GlassCard className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <MemoryStick
              size={18}
              className="text-violet-400"
            />

            <h2 className="text-lg font-semibold text-white">
              Memory Usage
            </h2>
          </div>

          <p className="mt-1 text-sm text-slate-400">
            Last 24 Hours
          </p>
        </div>

        <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#151B2E] transition hover:bg-violet-500/10">
          <MoreHorizontal
            size={18}
            className="text-slate-400"
          />
        </button>
      </div>

      <div className="h-[260px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <AreaChart data={data}>
            <defs>
              <linearGradient
                id="memoryGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#22C55E"
                  stopOpacity={0.4}
                />

                <stop
                  offset="95%"
                  stopColor="#22C55E"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#1E293B"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="time"
              tick={{ fill: "#64748B" }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fill: "#64748B" }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                background: "#101426",
                border: "1px solid rgba(255,255,255,.08)",
                borderRadius: 14,
              }}
            />

            <Area
              type="monotone"
              dataKey="memory"
              stroke="#22C55E"
              strokeWidth={3}
              fill="url(#memoryGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </GlassCard>
  );
}