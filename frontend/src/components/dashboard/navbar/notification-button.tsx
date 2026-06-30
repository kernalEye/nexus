"use client";

import { Bell } from "lucide-react";

export default function NotificationButton() {
  return (
    <button
      type="button"
      aria-label="Notifications"
      className="
        group
        relative
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-2xl
        border
        border-white/10
        bg-[#101426]
        transition-all
        duration-300
        hover:border-violet-500/40
        hover:bg-violet-500/10
        hover:shadow-[0_0_30px_rgba(139,92,246,.25)]
      "
    >
      <Bell
        size={18}
        className="text-slate-300 transition group-hover:text-white"
      />

      {/* Notification Badge */}
      <span
        className="
          absolute
          -right-1
          -top-1
          flex
          h-5
          min-w-[20px]
          items-center
          justify-center
          rounded-full
          bg-violet-600
          px-1
          text-[10px]
          font-semibold
          text-white
        "
      >
        8
      </span>
    </button>
  );
}