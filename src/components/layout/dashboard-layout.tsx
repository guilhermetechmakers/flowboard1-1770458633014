import { Outlet, useLocation } from "react-router-dom";
import { SidebarProvider } from "@/contexts/sidebar-context";
import { DashboardSidebar } from "./dashboard-sidebar";
import { DashboardHeader } from "./dashboard-header";
import { cn } from "@/lib/utils";

export function DashboardLayout() {
  const location = useLocation();
  const isBoard = location.pathname.includes("/board/");

  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden">
        <DashboardSidebar />
        <div className="flex flex-1 flex-col overflow-hidden">
          <DashboardHeader />
          <main
            className={cn(
              "flex-1 overflow-y-auto bg-muted/30",
              isBoard ? "flex flex-col p-0 overflow-hidden" : "p-6"
            )}
          >
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
