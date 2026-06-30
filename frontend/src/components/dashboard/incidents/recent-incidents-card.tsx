"use client";

import GlassCard from "@/components/ui/glass-card";
import {
  CircleAlert,
  Search,
  Eye,
  CheckCircle2,
} from "lucide-react";

const incidents = [
  {
    id: 1,
    title: "Database Latency Spike",
    status: "Investigating",
    icon: CircleAlert,
    color: "text-red-500",
    time: "10 min ago",
  },
  {
    id: 2,
    title: "API Gateway Timeout",
    status: "Monitoring",
    icon: Search,
    color: "text-yellow-500",
    time: "32 min ago",
  },
  {
    id: 3,
    title: "Redis Connection Drop",
    status: "Resolved",
    icon: Eye,
    color: "text-blue-500",
    time: "1 hour ago",
  },
  {
    id: 4,
    title: "Kafka Consumer Lag",
    status: "Completed",
    icon: CheckCircle2,
    color: "text-green-500",
    time: "3 hours ago",
  },
];

export default function RecentIncidentsCard() {
  return (
    <GlassCard className="p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white">
          Recent Incidents
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Latest incident timeline
        </p>
      </div>

      <div className="space-y-5">
        {incidents.map((incident, index) => {
          const Icon = incident.icon;

          return (
            <div
              key={incident.id}
              className="relative flex gap-4"
            >
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#151B2E]">
                  <Icon
                    size={18}
                    className={incident.color}
                  />
                </div>

                {index !== incidents.length - 1 && (
                  <div className="mt-2 h-10 w-px bg-white/10" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-2">
                <h3 className="text-sm font-semibold text-white">
                  {incident.title}
                </h3>

                <p className="mt-1 text-xs text-slate-400">
                  {incident.status}
                </p>

                <p className="mt-2 text-xs text-slate-500">
                  {incident.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </GlassCard>
)}