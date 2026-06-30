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
import { MoreHorizontal } from "lucide-react";

const data = [
  { time: "00:00", errors: 0.45 },
  { time: "02:00", errors: 0.38 },
  { time: "04:00", errors: 0.31 },
  { time: "06:00", errors: 0.52 },
  { time: "08:00", errors: 0.48 },
  { time: "10:00", errors: 0.62 },
  { time: "12:00", errors: 0.56 },
  { time: "14:00", errors: 0.41 },
  { time: "16:00", errors: 0.36 },
  { time: "18:00", errors: 0.44 },
  { time: "20:00", errors: 0.58 },
  { time: "22:00", errors: 0.49 },
];

export default function ErrorRateChart() {
  return (
    <GlassCard className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">
            Error Rate
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Last 24 Hours
          </p>
        </div>

        <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#151B2E] hover:bg-violet-500/10">
          <MoreHorizontal
            size={18}
            className="text-slate-400"
          />
        </button>
      </div>

      <div className="h-[340px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient
                id="errorGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#EF4444"
                  stopOpacity={0.4}
                />

                <stop
                  offset="95%"
                  stopColor="#EF4444"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#1f2937"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="time"
              tick={{ fill: "#94A3B8", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fill: "#94A3B8", fontSize: 12 }}
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
              dataKey="errors"
              stroke="#EF4444"
              strokeWidth={3}
              fill="url(#errorGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </GlassCard>
  );
}