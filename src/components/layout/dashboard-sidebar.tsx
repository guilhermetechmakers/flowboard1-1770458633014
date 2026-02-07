import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  FolderKanban,
  Settings,
  Users,
  CreditCard,
  Shield,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Plus,
  Download,
  LayoutTemplate,
  HelpCircle,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useCollapsed } from "@/hooks/use-sidebar-collapsed";

const navItems = [
  { to: "/dashboard", icon: LayoutDashboard, label: "Overview" },
  { to: "/dashboard/projects", icon: FolderKanban, label: "Projects" },
  { to: "/dashboard/templates", icon: LayoutTemplate, label: "Templates" },
  { to: "/dashboard/import-export", icon: Download, label: "Import / Export" },
];

const adminItems = [
  { to: "/dashboard/admin", icon: Shield, label: "Admin" },
  { to: "/dashboard/users", icon: Users, label: "Users" },
  { to: "/dashboard/analytics", icon: BarChart3, label: "Analytics" },
  { to: "/dashboard/billing", icon: CreditCard, label: "Billing" },
];

const bottomItems = [
  { to: "/dashboard/settings", icon: Settings, label: "Settings" },
  { to: "/dashboard/profile", icon: User, label: "Profile" },
  { to: "/help", icon: HelpCircle, label: "Help" },
];

export function DashboardSidebar() {
  const [collapsed, setCollapsed] = useCollapsed();
  const location = useLocation();

  return (
    <aside
      className={cn(
        "flex flex-col border-r border-border bg-card transition-all duration-300 ease-in-out",
        collapsed ? "w-[72px]" : "w-64"
      )}
    >
      <div className="flex h-16 items-center justify-between border-b border-border px-4">
        {!collapsed && (
          <NavLink to="/" className="flex items-center gap-2 font-semibold">
            <span className="text-primary">FlowBoard</span>
          </NavLink>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </Button>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto p-2">
        <div className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.to;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  collapsed && "justify-center px-2"
                )}
              >
                <Icon className="h-5 w-5 shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </NavLink>
            );
          })}
        </div>

        <div className="border-t border-border pt-2">
          {adminItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.to;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  collapsed && "justify-center px-2"
                )}
              >
                <Icon className="h-5 w-5 shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </NavLink>
            );
          })}
        </div>

        <div className="border-t border-border pt-2">
          {bottomItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.to;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  collapsed && "justify-center px-2"
                )}
              >
                <Icon className="h-5 w-5 shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </NavLink>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
