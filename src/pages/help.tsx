import { Link } from "react-router-dom";
import { HelpCircle, Book, Video, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const faqs = [
  {
    q: "How do I create a new board?",
    a: "Click 'New Project' from the dashboard or use the quick action. Choose a template or start blank.",
  },
  {
    q: "How does the AI agent work?",
    a: "The AI agent analyzes your nodes and context to provide summaries, suggest next steps, and generate content. Select nodes and ask for suggestions.",
  },
  {
    q: "Can I invite collaborators?",
    a: "Yes. Open a board and click 'Share' to invite team members via email. You can set roles (viewer, editor, admin).",
  },
  {
    q: "What file formats can I import?",
    a: "We support CSV and JSON. Use the Import page to map columns and validate before importing.",
  },
];

export function HelpPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <HelpCircle className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight">Help & Support</h1>
          <p className="mt-2 text-muted-foreground">
            Documentation, guides, and contact
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="h-5 w-5" />
                Getting Started
              </CardTitle>
              <CardDescription>
                Quick guides to get you up and running
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="text-primary hover:underline">
                    Creating your first board
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-primary hover:underline">
                    Understanding node types
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-primary hover:underline">
                    Using the AI agent
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="h-5 w-5" />
                Video Tutorials
              </CardTitle>
              <CardDescription>
                Watch step-by-step tutorials
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="text-primary hover:underline">
                    Product roadmap template
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-primary hover:underline">
                    Research synthesis workflow
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>FAQ</CardTitle>
            <CardDescription>
              Frequently asked questions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-lg border border-border p-4"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    {faq.q}
                    <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
                </details>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8" id="contact">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Contact Support
            </CardTitle>
            <CardDescription>
              Can&apos;t find what you need? Reach out.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="contact-email">Email</Label>
                <Input id="contact-email" type="email" placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-message">Message</Label>
                <Input id="contact-message" placeholder="Describe your issue..." className="h-24" />
              </div>
              <Button>Send</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
