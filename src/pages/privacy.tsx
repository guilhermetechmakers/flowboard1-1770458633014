import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function PrivacyPage() {
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
        <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="prose prose-neutral mt-12 dark:prose-invert">
          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly (account, profile, board content),
            usage data (how you use the service), and device information.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use your information to provide and improve the service, communicate with you,
            and ensure security and compliance.
          </p>

          <h2>3. Data Retention</h2>
          <p>
            We retain your data for as long as your account is active. You may request
            deletion at any time.
          </p>

          <h2>4. Your Rights</h2>
          <p>
            You have the right to access, correct, and delete your data. Contact us for
            data protection inquiries.
          </p>

          <h2>5. Data Protection Contact</h2>
          <p>
            For privacy-related questions: privacy@flowboard.example.com
          </p>
        </div>
      </main>
    </div>
  );
}
