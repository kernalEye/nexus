"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "../../../lib/utils";

interface NavigationItemProps {
  title: string;
  href: string;
  icon: LucideIcon;
  active?: boolean;
  collapsed?: boolean;
  badge?: string | number | undefined;
}

export default function NavigationItem({
  title,
  href,
  icon: Icon,
  active = false,
  collapsed = false,
  badge,
}: NavigationItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex h-12 items-center overflow-hidden rounded-2xl border transition-all duration-300",

        active
          ? "border-violet-500/30 bg-gradient-to-r from-violet-500/20 via-violet-500/10 to-transparent shadow-[0_0_25px_rgba(139,92,246,0.25)]"
          : "border-transparent hover:border-white/10 hover:bg-white/[0.04]"
      )}
    >
      {/* Active Glow */}
      {active && (
        <>
          <div className="absolute inset-0 bg-violet-500/5 blur-xl" />
          <div className="absolute left-0 top-2 bottom-2 w-1 rounded-full bg-violet-400" />
        </>
      )}

      <div
        className={cn(
          "relative z-10 flex w-full items-center",
          collapsed ? "justify-center px-0" : "justify-between px-4"
        )}
      >
        {/* Left */}
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-300",
              active
                ? "bg-violet-500/15 text-violet-400"
                : "text-slate-400 group-hover:bg-white/5 group-hover:text-white"
            )}
          >
            <Icon size={18} />
          </div>

          {!collapsed && (
            <span
              className={cn(
                "text-sm font-medium transition-colors",
                active
                  ? "text-white"
                  : "text-slate-400 group-hover:text-white"
              )}
            >
              {title}
            </span>
          )}
        </div>

        {/* Right */}
        {!collapsed && (
          <div className="flex items-center gap-2">
            {badge && (
              <span className="rounded-full bg-violet-500/15 px-2 py-0.5 text-[10px] font-semibold text-violet-300">
                {badge}
              </span>
            )}

            <ChevronRight
              size={16}
              className={cn(
                "transition-all duration-300",
                active
                  ? "translate-x-0 text-violet-400"
                  : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-slate-400"
              )}
            />
          </div>
        )}
      </div>
    </Link>
  );
}