"use client";

import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Boxes,
  BarChart3,
  FileText,
  GitBranch,
  Server,
  Bell,
  ShieldAlert,
  LayoutGrid,
  FileBarChart,
  Plug,
  Users,
  Settings,
} from "lucide-react";

import NavigationItem from "./navigation-item";

const navigation = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Services",
    href: "/dashboard/services",
    icon: Boxes,
  },
  {
    title: "Metrics",
    href: "/dashboard/metrics",
    icon: BarChart3,
  },
  {
    title: "Logs",
    href: "/dashboard/logs",
    icon: FileText,
  },
  {
    title: "Traces",
    href: "/dashboard/traces",
    icon: GitBranch,
  },
  {
    title: "Infrastructure",
    href: "/dashboard/infrastructure",
    icon: Server,
  },
  {
    title: "Alerts",
    href: "/dashboard/alerts",
    icon: Bell,
    badge: "8",
  },
  {
    title: "Incidents",
    href: "/dashboard/incidents",
    icon: ShieldAlert,
  },
  {
    title: "Dashboards",
    href: "/dashboard/dashboards",
    icon: LayoutGrid,
  },
  {
    title: "Reports",
    href: "/dashboard/reports",
    icon: FileBarChart,
  },
  {
    title: "Integrations",
    href: "/dashboard/integrations",
    icon: Plug,
  },
  {
    title: "Team",
    href: "/dashboard/team",
    icon: Users,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];
interface NavigationProps {
  collapsed?: boolean;
}

export default function Navigation({
  collapsed = false,
}: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className="space-y-2">
      {navigation.map((item) => (
        <NavigationItem
          key={item.href}
          title={item.title}
          href={item.href}
          icon={item.icon}
          badge={item.badge}
          collapsed={collapsed}
          active={pathname === item.href}
        />
      ))}
    </nav>
  );
}