import { useState } from "react";
import { LayoutTemplate, Search, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const templates = [
  { id: "1", name: "Product Roadmap", category: "Product", description: "Plan and visualize your product roadmap" },
  { id: "2", name: "Research Synthesis", category: "Research", description: "Organize research findings and insights" },
  { id: "3", name: "User Journey", category: "Design", description: "Map user flows and touchpoints" },
  { id: "4", name: "Sprint Planning", category: "Agile", description: "Plan sprints and track tasks" },
];

export function DashboardTemplates() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Templates</h1>
        <p className="mt-1 text-muted-foreground">
          Start with a template or create a blank board
        </p>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search templates..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {templates.map((t) => (
          <Card
            key={t.id}
            className={`cursor-pointer transition-all hover:shadow-card-hover ${selected === t.id ? "ring-2 ring-primary" : ""}`}
            onClick={() => setSelected(selected === t.id ? null : t.id)}
          >
            <CardHeader className="pb-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <LayoutTemplate className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">{t.name}</CardTitle>
              <CardDescription>{t.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-xs text-muted-foreground">{t.category}</span>
              <Button
                className="mt-4 w-full"
                variant={selected === t.id ? "default" : "outline"}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(t.id);
                }}
              >
                {selected === t.id ? <Check className="mr-2 h-4 w-4" /> : null}
                Apply template
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
