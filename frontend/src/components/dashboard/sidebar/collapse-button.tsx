"use client";

import { ChevronLeft } from "lucide-react";
import { cn } from "../../../lib/utils";

interface CollapseButtonProps {
  collapsed: boolean;
  onClick: () => void;
}

export default function CollapseButton({
  collapsed,
  onClick,
}: CollapseButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
      className={cn(
        "group flex h-11 w-11 items-center justify-center rounded-2xl",
        "border border-white/10",
        "bg-[#12182A]/80 backdrop-blur-xl",
        "transition-all duration-300",
        "hover:border-violet-500/40",
        "hover:bg-violet-500/10",
        "hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-violet-500/40"
      )}
    >
      <ChevronLeft
        size={18}
        className={cn(
          "text-slate-400 transition-all duration-300 group-hover:text-violet-400",
          collapsed && "rotate-180"
        )}
      />
    </button>
  );
}