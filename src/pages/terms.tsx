import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function TermsPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4">
          <Link to="/" className="font-semibold text-primary">
            FlowBoard
          </Link>
          <Button variant="ghost" asChild>
            <Link to="/">Back to home</Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-3xl font-bold tracking-tight">Terms of Service</h1>
        <p className="mt-2 text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="prose prose-neutral mt-12 dark:prose-invert">
          <h2>1. Acceptance</h2>
          <p>
            By using FlowBoard, you agree to these terms. If you do not agree, do not use the service.
          </p>

          <h2>2. Acceptable Use</h2>
          <p>
            You agree not to use the service for illegal purposes, to violate others&apos; rights,
            or to attempt to gain unauthorized access.
          </p>

          <h2>3. Liability</h2>
          <p>
            FlowBoard is provided &quot;as is.&quot; We are not liable for indirect, incidental,
            or consequential damages.
          </p>

          <h2>4. Versioning</h2>
          <p>
            We may update these terms. Continued use after changes constitutes acceptance.
            Archived versions are available upon request.
          </p>
        </div>
      </main>
    </div>
  );
}
