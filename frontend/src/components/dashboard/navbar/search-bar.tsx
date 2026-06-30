"use client";

import { Search, Command } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-full w-full max-w-[320px] md:max-w-[420px] lg:max-w-[520px] xl:max-w-[620px] 2xl:max-w-[700px]">
      {/* Search Icon */}
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
      />

      {/* Input */}
      <input
        type="text"
        placeholder="Search services, logs, metrics..."
        className="
          h-14
          w-full
          rounded-2xl
          border
          border-white/10
          bg-[#101426]
          pl-12
          pr-20
          text-sm
          text-white
          outline-none
          transition-all
          duration-300
          placeholder:text-slate-500
          hover:border-white/20
          focus:border-violet-500/40
          focus:bg-[#12182A]
          focus:shadow-[0_0_30px_rgba(139,92,246,0.15)]
        "
      />

      {/* Keyboard Shortcut */}
      <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-400">
        <Command size={12} />
        <span>K</span>
      </div>
    </div>
  );
}