"use client";

import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function GlassCard({
  children,
  className,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        `
        rounded-3xl
        border
        border-white/10
        bg-[#101426]
        backdrop-blur-xl
        shadow-[0_10px_40px_rgba(0,0,0,0.35)]
        transition-all
        duration-300
        hover:border-violet-500/20
        hover:shadow-[0_0_35px_rgba(139,92,246,0.12)]
        `,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}