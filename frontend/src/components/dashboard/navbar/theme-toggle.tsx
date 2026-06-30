"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  return (
    <button
      type="button"
      aria-label="Toggle Theme"
      onClick={() => setDark(!dark)}
      className={cn(
        "group relative flex h-11 w-11 items-center justify-center",
        "rounded-2xl",
        "border border-white/10",
        "bg-[#101426]",
        "transition-all duration-300",
        "hover:border-violet-500/40",
        "hover:bg-violet-500/10",
        "hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]"
      )}
    >
      {dark ? (
        <Moon
          size={18}
          className="text-slate-300 transition-transform duration-300 group-hover:rotate-12"
        />
      ) : (
        <Sun
          size={18}
          className="text-yellow-400 transition-transform duration-300 group-hover:rotate-180"
        />
      )}
    </button>
  );
}