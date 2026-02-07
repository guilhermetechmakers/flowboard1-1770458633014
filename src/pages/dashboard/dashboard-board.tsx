import { useParams } from "react-router-dom";
import {
  MousePointer2,
  Move,
  Link2,
  Square,
  Layout,
  Undo2,
  Redo2,
  ZoomIn,
  ZoomOut,
  Grid3X3,
  Bot,
  Minimize2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const nodeTypes = [
  { type: "text", label: "Text", icon: Square },
  { type: "link", label: "Research Link", icon: Link2 },
  { type: "file", label: "File", icon: Square },
  { type: "image", label: "Image", icon: Square },
  { type: "task", label: "Task", icon: Square },
  { type: "table", label: "Table", icon: Square },
  { type: "code", label: "Code", icon: Square },
  { type: "note", label: "Note", icon: Square },
];

export function DashboardBoard() {
  const { projectId } = useParams();

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col bg-muted/30">
      {/* Toolbar */}
      <div className="flex h-14 items-center justify-between border-b border-border bg-background px-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" title="Select">
            <MousePointer2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" title="Pan">
            <Move className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" title="Connect">
            <Link2 className="h-4 w-4" />
          </Button>
          <Separator orientation="vertical" className="mx-2 h-6" />
          <Button variant="ghost" size="icon" title="Create node">
            <Square className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" title="Auto-layout">
            <Layout className="h-4 w-4" />
          </Button>
          <Separator orientation="vertical" className="mx-2 h-6" />
          <Button variant="ghost" size="icon" title="Undo">
            <Undo2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" title="Redo">
            <Redo2 className="h-4 w-4" />
          </Button>
          <Separator orientation="vertical" className="mx-2 h-6" />
          <Button variant="ghost" size="icon" title="Zoom in">
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" title="Zoom out">
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" title="Grid toggle">
            <Grid3X3 className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-primary/20 text-xs font-medium">
              U
            </div>
          </div>
          <Button variant="ghost" size="sm">
            Share
          </Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Canvas area */}
        <div className="relative flex-1 overflow-hidden">
          <div
            className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:24px_24px]"
            style={{ minHeight: "800px", minWidth: "1200px" }}
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Card className="w-64 shadow-card">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm">Sample Node</CardTitle>
                    <Badge variant="secondary">text</Badge>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Double-click to edit. Connect nodes by dragging from handles.
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Node types palette */}
        <div className="w-48 border-l border-border bg-card p-2">
          <p className="mb-2 text-xs font-medium text-muted-foreground">
            Node types
          </p>
          <div className="grid grid-cols-2 gap-1">
            {nodeTypes.map((n) => {
              const Icon = n.icon;
              return (
                <Button
                  key={n.type}
                  variant="ghost"
                  size="sm"
                  className="h-auto flex-col gap-1 p-2"
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-xs">{n.label}</span>
                </Button>
              );
            })}
          </div>
        </div>

        {/* AI Agent panel */}
        <div className="w-80 border-l border-border bg-card">
          <div className="flex h-12 items-center justify-between border-b border-border px-4">
            <div className="flex items-center gap-2">
              <Bot className="h-4 w-4 text-primary" />
              <span className="font-medium">AI Agent</span>
            </div>
            <Button variant="ghost" size="icon">
              <Minimize2 className="h-4 w-4" />
            </Button>
          </div>
          <div className="p-4">
            <p className="text-sm text-muted-foreground">
              Select nodes or ask for suggestions. The AI can summarize, propose
              next steps, and generate content.
            </p>
            <Button className="mt-4 w-full" variant="outline">
              Get suggestions
            </Button>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="h-16 border-t border-border bg-card px-4">
        <div className="flex h-full items-center gap-4">
          <span className="text-sm text-muted-foreground">Version history</span>
          <div className="h-8 flex-1 rounded bg-muted" />
          <Button variant="ghost" size="sm">
            Branch
          </Button>
        </div>
      </div>
    </div>
  );
}
