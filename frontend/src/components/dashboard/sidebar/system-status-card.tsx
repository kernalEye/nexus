"use client";

import { Activity } from "lucide-react";

export default function SystemStatusCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#101426] to-[#0B1023] p-5 shadow-[0_0_40px_rgba(139,92,246,0.12)]">
      {/* Purple Glow */}
      <div className="absolute -bottom-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />

      {/* Header */}
      <div className="relative z-10 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#22c55e]" />

        <p className="text-sm font-semibold text-white">
          System Status
        </p>
      </div>

      {/* Subtitle */}
      <p className="relative z-10 mt-2 text-xs leading-5 text-slate-400">
        All Systems Operational
      </p>

      {/* Globe */}
      <div className="relative mt-4 flex justify-center">
        <div className="flex h-28 w-30 items-center justify-center rounded-full border border-violet-500/20 bg-violet-500/10 shadow-[0_0_40px_rgba(139,92,246,0.25)]">
          {/* <Activity
            size={42}
            className="text-violet-400"
          /> */}
          <img src="./bg1.png" alt="globe" className="h-30 w-30 rounded-full" />
        </div>
      </div>
    </div>
  );
}