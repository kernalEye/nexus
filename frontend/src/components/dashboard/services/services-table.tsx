"use client";

import GlassCard from "@/components/ui/glass-card";
import ServiceRow from "./service-row";

const services = [
  {
    name: "API Gateway",
    cpu: 24,
    memory: 38,
    requests: "12.4K/min",
    latency: "124 ms",
    uptime: "99.99%",
    status: "Healthy" as const,
  },
  {
    name: "Authentication",
    cpu: 42,
    memory: 57,
    requests: "8.1K/min",
    latency: "96 ms",
    uptime: "99.98%",
    status: "Healthy" as const,
  },
  {
    name: "Payment Service",
    cpu: 71,
    memory: 78,
    requests: "3.7K/min",
    latency: "286 ms",
    uptime: "98.72%",
    status: "Warning" as const,
  },
  {
    name: "Notification Service",
    cpu: 91,
    memory: 84,
    requests: "1.4K/min",
    latency: "528 ms",
    uptime: "96.81%",
    status: "Critical" as const,
  },
  {
    name: "Redis Cache",
    cpu: 18,
    memory: 29,
    requests: "18.9K/min",
    latency: "12 ms",
    uptime: "99.99%",
    status: "Healthy" as const,
  },
];

export default function ServicesTable() {
  return (
    <GlassCard className="overflow-hidden">
      {/* Header */}

      <div className="flex items-center justify-between border-b border-white/10 p-6">
        <div>
          <h2 className="text-xl font-semibold text-white">
            Services
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Monitor all running microservices.
          </p>
        </div>

        <button
          className="
            rounded-xl
            border
            border-white/10
            bg-[#151B2E]
            px-4
            py-2
            text-sm
            text-white
            transition
            hover:border-violet-500/30
            hover:bg-violet-500/10
          "
        >
          View All
        </button>
      </div>

      {/* Table */}

      <div className="overflow-x-auto">
        <table className="w-full min-w-[1100px]">
          <thead className="bg-[#151B2E]">
            <tr>
              <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-400">
                Service
              </th>

              <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-400">
                Status
              </th>

              <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-400">
                CPU
              </th>

              <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-400">
                Memory
              </th>

              <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-400">
                Requests
              </th>

              <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-400">
                Latency
              </th>

              <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-400">
                Uptime
              </th>

              <th className="w-14"></th>
            </tr>
          </thead>

          <tbody>
            {services.map((service) => (
              <ServiceRow
                key={service.name}
                {...service}
              />
            ))}
          </tbody>
        </table>
      </div>
    </GlassCard>
  );
}