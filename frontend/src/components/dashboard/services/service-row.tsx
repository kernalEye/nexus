"use client";

import { MoreHorizontal } from "lucide-react";
import ServiceStatusBadge from "./service-status-badge";

interface ServiceRowProps {
  name: string;
  cpu: number;
  memory: number;
  requests: string;
  latency: string;
  uptime: string;
  status: "Healthy" | "Warning" | "Critical";
}

export default function ServiceRow({
  name,
  cpu,
  memory,
  requests,
  latency,
  uptime,
  status,
}: ServiceRowProps) {
  return (
    <tr className="border-b border-white/5 transition-all duration-300 hover:bg-white/[0.02]">
      {/* Service */}
      <td className="px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10">
            <div className="h-3 w-3 rounded-full bg-violet-500" />
          </div>

          <div>
            <p className="font-medium text-white">{name}</p>

            <p className="text-xs text-slate-500">
              Production Service
            </p>
          </div>
        </div>
      </td>

      {/* Status */}
      <td className="px-6 py-5">
        <ServiceStatusBadge status={status} />
      </td>

      {/* CPU */}
      <td className="px-6 py-5">
        <span className="text-sm font-medium text-white">
          {cpu}%
        </span>
      </td>

      {/* Memory */}
      <td className="px-6 py-5">
        <span className="text-sm font-medium text-white">
          {memory}%
        </span>
      </td>

      {/* Requests */}
      <td className="px-6 py-5">
        <span className="text-sm text-slate-300">
          {requests}
        </span>
      </td>

      {/* Latency */}
      <td className="px-6 py-5">
        <span className="text-sm text-slate-300">
          {latency}
        </span>
      </td>

      {/* Uptime */}
      <td className="px-6 py-5">
        <span className="font-medium text-emerald-400">
          {uptime}
        </span>
      </td>

      {/* Actions */}
      <td className="px-6 py-5">
        <button
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            transition
            hover:bg-white/5
          "
        >
          <MoreHorizontal
            size={18}
            className="text-slate-400"
          />
        </button>
      </td>
    </tr>
  );
}