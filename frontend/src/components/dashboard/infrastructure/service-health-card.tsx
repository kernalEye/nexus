"use client";

import GlassCard from "@/components/ui/glass-card";

const services = [
  {
    name: "API Gateway",
    status: "Healthy",
    uptime: "99.99%",
    color: "bg-green-500",
  },
  {
    name: "Authentication",
    status: "Healthy",
    uptime: "99.97%",
    color: "bg-green-500",
  },
  {
    name: "PostgreSQL",
    status: "Warning",
    uptime: "98.42%",
    color: "bg-yellow-500",
  },
  {
    name: "Redis",
    status: "Healthy",
    uptime: "99.95%",
    color: "bg-green-500",
  },
  {
    name: "Kafka",
    status: "Healthy",
    uptime: "99.98%",
    color: "bg-green-500",
  },
];

export default function ServiceHealthCard() {
  return (
    <GlassCard className="p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white">
          Service Health
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Current service availability
        </p>
      </div>

      <div className="space-y-4">
        {services.map((service) => (
          <div
            key={service.name}
            className="flex items-center justify-between rounded-xl border border-white/5 bg-[#151B2E] p-3 transition hover:border-violet-500/20"
          >
            <div className="flex items-center gap-3">
              <span
                className={`h-2.5 w-2.5 rounded-full ${service.color}`}
              />

              <div>
                <p className="text-sm font-medium text-white">
                  {service.name}
                </p>

                <p className="text-xs text-slate-400">
                  {service.status}
                </p>
              </div>
            </div>

            <span className="text-sm font-semibold text-white">
              {service.uptime}
            </span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}