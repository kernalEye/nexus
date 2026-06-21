import React from "react";
import {
  Activity,
  Layout,
  AlertTriangle,
  FileText,
  BarChart3,
  Clock,
} from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const features = [
    { icon: Activity, text: "Real-time Monitoring" },
    { icon: Layout, text: "Distributed Tracing" },
    { icon: AlertTriangle, text: "Error Tracking" },
    { icon: FileText, text: "Log Management" },
    { icon: BarChart3, text: "Infrastructure Metrics" },
    { icon: Clock, text: "Uptime Monitoring" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient( rgba(2, 3, 13, 0.5), rgba(2, 3, 13, 0.5) ), url('/bg1.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#02030d]/55" />

      {/* Content */}
      <div className="relative z-10 h-screen flex items-center justify-center px-6">
        <div className="w-full mx-auto max-w-[1700px] px-6 lg:px-16 py-8 drop-shadow-2xl min-h-[85vh]">
          <div className="grid lg:grid-cols-[1fr_520px] gap-3 items-center h-full">

            {/* LEFT SIDE */}
            <div className="hidden lg:block max-w-lg">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                  <Activity className="w-6 h-6 text-white" />
                </div>

                <h2 className="text-4xl font-bold text-white">
                  Kernal<span className="text-purple-400">Eye</span>
                </h2>
              </div>

              {/* Heading */}
              <h1 className="text-3xl xl:text-5xl font-bold leading-tight text-white">
                Observe Everything.
              </h1>

              <h1 className="text-3xl xl:text-5xl font-bold leading-tight bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Miss Nothing.
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Real-time monitoring, logging and tracing for modern
                infrastructure and applications.
              </p>

              {/* Features */}
              <div className="space-y-5">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-slate-200"
                  >
                    <feature.icon className="w-4 h-4 text-purple-400" />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Uptime Card */}
              {/* <div className="mt-10 w-[280px] rounded-2xl border border-white/10 bg-black/20 backdrop-blur-md p-4">
                <div className="text-xs text-slate-400 uppercase tracking-wider">
                  System Uptime
                </div>

                <div className="flex justify-between items-center mt-2">
                  <div className="text-3xl font-bold text-white">
                    99.99%
                  </div>

                  <div className="text-green-400 text-sm">
                    ▲ 0.01%
                  </div>
                </div>
              </div> */}
            </div>

            {/* RIGHT SIDE */}
            <div className="flex justify-center lg:justify-end items-center h-fit self-center">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}