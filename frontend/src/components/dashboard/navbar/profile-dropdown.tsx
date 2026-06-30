"use client";

import { ChevronDown } from "lucide-react";

export default function ProfileDropdown() {
  return (
    <button
      type="button"
      className="
        group
        flex
        items-center
        gap-2
        lg:gap-3
        rounded-2xl
        border
        border-white/10
        bg-[#101426]
        lg:px-3
        px-2
        h-11
        // py-2
        transition-all
        duration-300
        hover:border-violet-500/40
        hover:bg-[#151C30]
        hover:shadow-[0_0_30px_rgba(139,92,246,.15)]
      "
    >
      {/* Avatar */}
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-700 text-sm font-semibold text-white">
        A
      </div>

      {/* User Info */}
      <div className="hidden text-left lg:block">
        <p className="text-sm font-semibold text-white">
          Ali Husain
        </p>

        <p className="text-xs text-slate-400">
          Admin
        </p>
      </div>

      {/* Avatar */}
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-700 text-sm font-semibold text-white">
        J
      </div>

      {/* User Info */}
      <div className="hidden text-left lg:block">
        <p className="text-sm font-semibold text-white">
          Junaid Khan
        </p>

        <p className="text-xs text-slate-400">
          Admin
        </p>
      </div>

      {/* Dropdown Icon */}
      <ChevronDown
        size={16}
        className="
          text-slate-400
          transition-transform
          duration-300
          group-hover:rotate-180
        "
      />
    </button>
  );
}