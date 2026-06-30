"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import Logo from "./logo";
import Navigation from "./navigation";
import SystemStatusCard from "./system-status-card";
import CollapseButton from "./collapse-button";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <motion.aside
      animate={{
        width: collapsed ? 88 : 280,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="
        sticky
        top-0
        flex
        h-screen
        flex-col
        border-r
        border-white/10
        bg-[#050816]
        px-4
        py-5
      "
    >
      {/* Logo */}
      <Logo collapsed={collapsed} />

      {/* Navigation */}
      <div className="sidebar-scroll mt-8 flex-1 overflow-y-auto">
        <Navigation collapsed={collapsed} />
      </div>

      {/* Bottom Section */}
      <div className="mt-4 space-y-4">
        {/* {!collapsed && <SystemStatusCard />} */}

        <div className="flex justify-center">
          <CollapseButton
            collapsed={collapsed}
            onClick={() => setCollapsed((prev) => !prev)}
          />
        </div>
      </div>
    </motion.aside>
  );
}