import { Link } from "react-router-dom";
import { Plus, FolderKanban, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const projects = [
  { id: "1", name: "Q1 Roadmap", lastActivity: "2h ago", collaborators: 3 },
  { id: "2", name: "Research Board", lastActivity: "5h ago", collaborators: 2 },
  { id: "3", name: "Product Ideas", lastActivity: "1d ago", collaborators: 5 },
];

export function DashboardProjects() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="mt-1 text-muted-foreground">
            Manage your boards and collaborate with your team
          </p>
        </div>
        <Button asChild>
          <Link to="/dashboard/projects/new">
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="group overflow-hidden transition-all hover:shadow-card-hover">
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <FolderKanban className="h-6 w-6 text-primary" />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link to={`/dashboard/board/${project.id}`}>Open</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg">
                <Link
                  to={`/dashboard/board/${project.id}`}
                  className="hover:underline"
                >
                  {project.name}
                </Link>
              </CardTitle>
              <CardDescription className="mt-1">
                Last activity {project.lastActivity}
              </CardDescription>
              <div className="mt-4 flex -space-x-2">
                {Array.from({ length: project.collaborators }).map((_, i) => (
                  <Avatar key={i} className="h-8 w-8 border-2 border-card">
                    <AvatarFallback className="text-xs">
                      {String.fromCharCode(65 + i)}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
