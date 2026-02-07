import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FolderKanban, LayoutTemplate } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

export function DashboardProjectNew() {
  const [name, setName] = useState("");
  const [useTemplate, setUseTemplate] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Enter a project name");
      return;
    }
    // TODO: API call
    await new Promise((r) => setTimeout(r, 500));
    toast.success("Project created!");
    navigate("/dashboard/projects");
  };

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">New Project</h1>
        <p className="mt-1 text-muted-foreground">
          Create a new board or start from a template
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Project details</CardTitle>
            <CardDescription>
              Give your project a name
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Project name</Label>
              <Input
                id="name"
                placeholder="My project"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="template"
                checked={useTemplate}
                onChange={(e) => setUseTemplate(e.target.checked)}
                className="h-4 w-4 rounded border-input"
              />
              <Label htmlFor="template" className="font-normal">
                Use template
              </Label>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button type="submit">Create project</Button>
          <Button type="button" variant="outline" onClick={() => navigate(-1)}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
