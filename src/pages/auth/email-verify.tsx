import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

type Status = "loading" | "success" | "failure";

export function EmailVerifyPage() {
  const [status, setStatus] = useState<Status>("loading");
  const [isResending, setIsResending] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // For demo: assume success. In production, verify token from URL params
      setStatus("success");
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleResend = async () => {
    setIsResending(true);
    try {
      await new Promise((r) => setTimeout(r, 800));
      toast.success("Verification email sent!");
    } catch {
      toast.error("Failed to resend. Please try again.");
    } finally {
      setIsResending(false);
    }
  };

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4">
        <Card className="w-full max-w-md">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <p className="mt-4 text-muted-foreground">Verifying your email...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (status === "failure") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-destructive/20">
              <XCircle className="h-6 w-6 text-destructive" />
            </div>
            <CardTitle className="text-2xl">Verification failed</CardTitle>
            <CardDescription>
              The verification link may have expired or is invalid.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={handleResend} className="w-full" disabled={isResending}>
              {isResending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Resend verification email
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link to="/login">Back to login</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--accent-success))]/20">
            <CheckCircle className="h-6 w-6 text-[hsl(var(--accent-success))]" />
          </div>
          <CardTitle className="text-2xl">Email verified!</CardTitle>
          <CardDescription>
            Your account has been verified. You can now access all features.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full" onClick={() => navigate("/dashboard")}>
            Continue to Dashboard
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
