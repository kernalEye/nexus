"use client";

import type { ReactNode } from "react";
import GlassCard from "@/components/ui/glass-card";
import { MoreHorizontal } from "lucide-react";

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  actions?: ReactNode;
}

export default function ChartCard({
  title,
  subtitle,
  children,
  actions,
}: ChartCardProps) {
  return (
    <GlassCard className="overflow-hidden p-6">
      {/* Header */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-white">
            {title}
          </h2>

          {subtitle && (
            <p className="mt-1 text-sm text-slate-400">
              {subtitle}
            </p>
          )}
        </div>

        <div className="flex items-center gap-2">
          {actions}

          <button
            className="
              flex
              h-9
              w-9
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
      </div>

      {/* Chart */}
      <div className="h-[320px] w-full">
        {children}
      </div>
    </GlassCard>
  );
}