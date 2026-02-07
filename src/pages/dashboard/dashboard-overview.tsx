import { Link } from "react-router-dom";
import {
  FolderKanban,
  LayoutTemplate,
  Download,
  TrendingUp,
  Users,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const metrics = [
  { label: "Active Projects", value: "12", icon: FolderKanban, trend: "+2 this month" },
  { label: "AI Credits Used", value: "340", icon: Sparkles, trend: "of 500" },
  { label: "Collaborators", value: "8", icon: Users, trend: "Active" },
];

const recentActivity = [
  { action: "AI suggested structure", project: "Q1 Roadmap", time: "2h ago" },
  { action: "Comment on node", project: "Research Board", time: "5h ago" },
  { action: "New board created", project: "Product Ideas", time: "1d ago" },
];

export function DashboardOverview() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
        <p className="mt-1 text-muted-foreground">
          Welcome back. Here&apos;s what&apos;s happening with your projects.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((m) => {
          const Icon = m.icon;
          return (
            <Card key={m.label} className="overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {m.label}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{m.value}</div>
                <p className="text-xs text-muted-foreground">{m.trend}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick actions</CardTitle>
            <CardDescription>
              Get started with common tasks
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            <Button asChild variant="outline" className="h-auto flex-col items-start gap-2 p-4">
              <Link to="/dashboard/projects/new" className="flex flex-col items-start gap-2">
                <FolderKanban className="h-5 w-5" />
                New Board
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto flex-col items-start gap-2 p-4">
              <Link to="/dashboard/templates" className="flex flex-col items-start gap-2">
                <LayoutTemplate className="h-5 w-5" />
                Templates
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto flex-col items-start gap-2 p-4">
              <Link to="/dashboard/import-export" className="flex flex-col items-start gap-2">
                <Download className="h-5 w-5" />
                Import / Export
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent activity</CardTitle>
            <CardDescription>
              Latest updates across your boards
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {recentActivity.map((a) => (
                <li key={a.action + a.time} className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="font-medium">{a.action}</p>
                    <p className="text-sm text-muted-foreground">{a.project}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{a.time}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
