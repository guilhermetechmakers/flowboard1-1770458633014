import { BarChart3 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", activities: 120, aiCalls: 45 },
  { name: "Feb", activities: 180, aiCalls: 62 },
  { name: "Mar", activities: 150, aiCalls: 78 },
  { name: "Apr", activities: 220, aiCalls: 95 },
  { name: "May", activities: 280, aiCalls: 120 },
  { name: "Jun", activities: 240, aiCalls: 105 },
];

export function DashboardAnalytics() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="mt-1 text-muted-foreground">
          Organization activity and AI usage over time
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Activity & AI Usage
          </CardTitle>
          <CardDescription>
            Board activities and AI credits consumed per month
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="activities"
                  stroke="hsl(var(--primary))"
                  fill="hsl(var(--primary) / 0.2)"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="aiCalls"
                  stroke="hsl(var(--accent-success))"
                  fill="hsl(var(--accent-success) / 0.2)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
