"use client";

import type { LucideIcon } from "lucide-react";

import {
  TrendingDown,
  TrendingUp,
} from "lucide-react";

import GlassCard from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  trend: string | number;
  subtitle: string;
  icon: LucideIcon;
  color?: "violet" | "green" | "orange" | "red";
}

const colorClasses = {
  violet: {
    bg: "bg-violet-500/10",
    text: "text-violet-400",
    glow: "shadow-violet-500/20",
  },
  green: {
    bg: "bg-green-500/10",
    text: "text-green-400",
    glow: "shadow-green-500/20",
  },
  orange: {
    bg: "bg-orange-500/10",
    text: "text-orange-400",
    glow: "shadow-orange-500/20",
  },
  red: {
    bg: "bg-red-500/10",
    text: "text-red-400",
    glow: "shadow-red-500/20",
  },
};

export default function MetricCard({
  title,
  value,
  trend,
  subtitle,
  icon: Icon,
  color = "violet",
}: MetricCardProps) {
  const styles = colorClasses[color];

  return (
    <GlassCard
      className="
        p-6
        cursor-pointer
        hover:-translate-y-1
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between">

        <div
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-xl",
            styles.bg
          )}
        >
          <Icon
            size={20}
            className={styles.text}
          />
        </div>

        {typeof trend === "number" && trend >= 0 ? (
          <TrendingUp
            size={18}
            className="text-green-400"
          />
        ) : (
          <TrendingDown
            size={18}
            className="text-red-400"
          />
        )}
      </div>

      {/* Title */}
      <p className="mt-5 text-sm text-slate-400">
        {title}
      </p>

      {/* Value */}
      <h2 className="mt-2 text-4xl font-bold text-white">
        {value}
      </h2>

      {/* Footer */}
      <div className="mt-4 flex items-center gap-2">
        <span
          className={cn(
            "text-sm font-semibold",
            typeof trend === "number" && trend >= 0
              ? "text-green-400"
              : "text-red-400"
          )}
        >
          {typeof trend === "number" && trend >= 0 ? "+" : ""}
          {trend}%
        </span>

        <span className="text-sm text-slate-500">
          {subtitle}
        </span>
      </div>
    </GlassCard>
  );
}