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
import { Cpu, MoreHorizontal } from "lucide-react";

const data = [
  { time: "00", cpu: 24 },
  { time: "02", cpu: 31 },
  { time: "04", cpu: 28 },
  { time: "06", cpu: 42 },
  { time: "08", cpu: 55 },
  { time: "10", cpu: 63 },
  { time: "12", cpu: 58 },
  { time: "14", cpu: 74 },
  { time: "16", cpu: 67 },
  { time: "18", cpu: 61 },
  { time: "20", cpu: 46 },
  { time: "22", cpu: 38 },
];

export default function CpuUsageChart() {
  return (
    <GlassCard className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Cpu
              size={18}
              className="text-violet-400"
            />

            <h2 className="text-lg font-semibold text-white">
              CPU Usage
            </h2>
          </div>

          <p className="mt-1 text-sm text-slate-400">
            Last 24 Hours
          </p>
        </div>

        <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#151B2E] hover:bg-violet-500/10">
          <MoreHorizontal size={18} />
        </button>
      </div>

      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient
                id="cpu"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#8B5CF6"
                  stopOpacity={0.45}
                />

                <stop
                  offset="95%"
                  stopColor="#8B5CF6"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#20263B"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748b" }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748b" }}
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="cpu"
              stroke="#8B5CF6"
              strokeWidth={3}
              fill="url(#cpu)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </GlassCard>
  );
}