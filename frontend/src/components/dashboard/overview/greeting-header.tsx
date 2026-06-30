"use client";

import { motion } from "framer-motion";

interface GreetingHeaderProps {
  userName?: string;
}

export default function GreetingHeader({
  userName = "Ali",
}: GreetingHeaderProps) {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
      }}
      className="mb-8"
    >
      <h1 className="text-4xl font-bold tracking-tight text-white">
        {greeting},{" "}
        <span className="text-violet-400">
          {userName}
        </span>{" "}
        👋
      </h1>

      <p className="mt-2 text-base text-slate-400">
        Here's what's happening with your infrastructure.
      </p>
    </motion.div>
  );
}