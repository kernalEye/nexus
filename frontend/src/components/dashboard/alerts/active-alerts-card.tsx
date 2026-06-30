"use client";

import GlassCard from "@/components/ui/glass-card";
import {
  AlertTriangle,
  CheckCircle2,
  ServerCrash,
} from "lucide-react";

const alerts = [
  {
    id: 1,
    title: "Database CPU High",
    description: "CPU usage exceeded 90%",
    severity: "critical",
    time: "2 min ago",
  },
  {
    id: 2,
    title: "API Latency Warning",
    description: "Average latency reached 420ms",
    severity: "warning",
    time: "8 min ago",
  },
  {
    id: 3,
    title: "Kubernetes Healthy",
    description: "All worker nodes operational",
    severity: "healthy",
    time: "12 min ago",
  },
];

export default function ActiveAlertsCard() {
  return (
    <GlassCard className="h-full p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Active Alerts
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Live infrastructure events
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {alerts.map((alert) => {
          const isCritical = alert.severity === "critical";
          const isWarning = alert.severity === "warning";

          return (
            <div
              key={alert.id}
              className="
                rounded-2xl
                border
                border-white/10
                bg-[#151B2E]
                p-4
                transition
                hover:border-violet-500/30
              "
            >
              <div className="flex items-start gap-3">
                <div
                  className="
                    mt-1
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                  "
                >
                  {isCritical && (
                    <ServerCrash
                      className="text-red-500"
                      size={20}
                    />
                  )}

                  {isWarning && (
                    <AlertTriangle
                      className="text-amber-500"
                      size={20}
                    />
                  )}

                  {!isCritical && !isWarning && (
                    <CheckCircle2
                      className="text-green-500"
                      size={20}
                    />
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-white">
                    {alert.title}
                  </h3>

                  <p className="mt-1 text-xs text-slate-400">
                    {alert.description}
                  </p>

                  <p className="mt-3 text-xs text-slate-500">
                    {alert.time}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </GlassCard>
  );
}