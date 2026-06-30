"use client";

import {
  Area,
  AreaChart as RechartsAreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface AreaChartProps<T> {
  data: T[];
  dataKey: string;
  xAxisKey: string;
  stroke?: string;
  fill?: string;
}

export default function AreaChart<T extends Record<string, any>>({
  data,
  dataKey,
  xAxisKey,
  stroke = "#8B5CF6",
  fill = "#8B5CF6",
}: AreaChartProps<T>) {
  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
    >
      <RechartsAreaChart data={data}>
        <defs>
          <linearGradient
            id="gradient"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor={fill}
              stopOpacity={0.45}
            />

            <stop
              offset="100%"
              stopColor={fill}
              stopOpacity={0}
            />
          </linearGradient>
        </defs>

        <CartesianGrid
          stroke="#1E293B"
          strokeDasharray="4 4"
          vertical={false}
        />

        <XAxis
          dataKey={xAxisKey}
          tick={{
            fill: "#64748B",
            fontSize: 12,
          }}
          axisLine={false}
          tickLine={false}
        />

        <YAxis
          tick={{
            fill: "#64748B",
            fontSize: 12,
          }}
          axisLine={false}
          tickLine={false}
        />

        <Tooltip />

        <Area
          type="monotone"
          dataKey={dataKey}
          stroke={stroke}
          strokeWidth={3}
          fill="url(#gradient)"
        />
      </RechartsAreaChart>
    </ResponsiveContainer>
  );
}