import { Link } from "react-router-dom";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ServerErrorPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/30 px-4">
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-destructive/20">
          <AlertTriangle className="h-8 w-8 text-destructive" />
        </div>
        <h1 className="mt-6 text-3xl font-bold tracking-tight">Something went wrong</h1>
        <p className="mt-2 text-muted-foreground">
          We&apos;re sorry. An unexpected error occurred. Please try again.
        </p>
      </div>
      <div className="mt-8 flex gap-4">
        <Button onClick={() => window.location.reload()}>
          <RefreshCw className="mr-2 h-4 w-4" />
          Retry
        </Button>
        <Button variant="outline" asChild>
          <Link to="/">Go home</Link>
        </Button>
      </div>
      <p className="mt-8 text-center text-sm text-muted-foreground">
        If the problem persists,{" "}
        <Link to="/help#contact" className="text-primary hover:underline">
          contact support
        </Link>
      </p>
    </div>
  );
}
