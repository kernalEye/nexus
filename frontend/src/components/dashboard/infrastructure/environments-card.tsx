"use client";

import GlassCard from "@/components/ui/glass-card";
import { Server } from "lucide-react";

const environments = [
  {
    name: "Production",
    status: "Healthy",
    uptime: "99.99%",
    color: "bg-green-500",
  },
  {
    name: "Staging",
    status: "Deploying",
    uptime: "99.81%",
    color: "bg-yellow-500",
  },
  {
    name: "Development",
    status: "Running",
    uptime: "99.94%",
    color: "bg-blue-500",
  },
  {
    name: "QA",
    status: "Idle",
    uptime: "99.73%",
    color: "bg-slate-500",
  },
];

export default function EnvironmentsCard() {
  return (
    <GlassCard className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Environments
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Runtime environments
          </p>
        </div>

        <Server
          size={20}
          className="text-violet-400"
        />
      </div>

      <div className="space-y-4">
        {environments.map((env) => (
          <div
            key={env.name}
            className="
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-white/5
              bg-[#151B2E]
              p-4
              transition
              hover:border-violet-500/20
            "
          >
            <div className="flex items-center gap-3">
              <span
                className={`h-2.5 w-2.5 rounded-full ${env.color}`}
              />

              <div>
                <p className="text-sm font-medium text-white">
                  {env.name}
                </p>

                <p className="text-xs text-slate-400">
                  {env.status}
                </p>
              </div>
            </div>

            <span className="text-sm font-semibold text-white">
              {env.uptime}
            </span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}