import Link from "next/link";
import { Activity } from "lucide-react";

interface LogoProps {
  collapsed?: boolean;
}

export default function Logo({
  collapsed = false,
}: LogoProps) {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3 rounded-2xl transition-all duration-300"
    >
      {/* Logo Icon */}
      <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/20 via-violet-500/10 to-transparent shadow-[0_0_30px_rgba(139,92,246,0.25)] backdrop-blur-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_45px_rgba(139,92,246,0.45)]">
        {/* Glow */}
        <div className="absolute inset-0 rounded-2xl bg-violet-500/20 blur-xl" />

        {/* Icon */}
        <Activity className="relative z-10 h-5 w-5 text-violet-400" />
      </div>

      {!collapsed && (
        <div className="flex flex-col leading-none">
          <span className="text-xl font-bold tracking-tight text-white">
            Kernal
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
              Eye
            </span>
          </span>

          <span className="mt-1 text-xs font-medium tracking-[0.25em] text-slate-500 uppercase">
            Developer Observability
          </span>
        </div>
      )}
    </Link>
  );
}