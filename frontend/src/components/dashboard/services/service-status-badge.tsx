"use client";

import { cn } from "@/lib/utils";

interface ServiceStatusBadgeProps {
  status: "Healthy" | "Warning" | "Critical";
}

const statusStyles = {
  Healthy: {
    dot: "bg-emerald-500",
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  Warning: {
    dot: "bg-amber-500",
    text: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  Critical: {
    dot: "bg-red-500",
    text: "text-red-400",
    bg: "bg-red-500/10",
  },
};

export default function ServiceStatusBadge({
  status,
}: ServiceStatusBadgeProps) {
  const style = statusStyles[status];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1.5",
        style.bg
      )}
    >
      <span
        className={cn(
          "h-2.5 w-2.5 rounded-full",
          style.dot
        )}
      />

      <span
        className={cn(
          "text-xs font-medium",
          style.text
        )}
      >
        {status}
      </span>
    </div>
  );
}