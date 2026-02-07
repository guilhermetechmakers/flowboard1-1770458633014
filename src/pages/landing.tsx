import { Link } from "react-router-dom";
import {
  Bot,
  LayoutGrid,
  Users,
  Plug,
  ChevronRight,
  Sparkles,
  Zap,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Bot,
    title: "AI Agent",
    description:
      "Context-aware AI that summarizes, proposes next steps, detects gaps, and generates content for your boards.",
  },
  {
    icon: LayoutGrid,
    title: "Visual Board",
    description:
      "Infinite canvas for nodes and edges. Organize ideas, research, data, and workflows as connected flowcharts.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Real-time presence, cursor sharing, inline comments, and assignment. Work together seamlessly.",
  },
  {
    icon: Plug,
    title: "Integrations",
    description:
      "Connect with Google Drive, Notion, Slack, and GitHub. Import and export with ease.",
  },
];

const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started",
    features: ["Up to 2 collaborators", "3 boards", "Basic AI features", "Community support"],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "For growing teams",
    features: ["Unlimited collaborators", "Unlimited boards", "Advanced AI", "Priority support", "Import/Export"],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations",
    features: ["SSO/SAML", "Admin dashboard", "Audit logs", "Dedicated support", "Custom integrations"],
    cta: "Request Demo",
    featured: false,
  },
];

const testimonials = [
  {
    quote: "FlowBoard transformed how our product team maps user journeys. The AI suggestions are incredibly helpful.",
    author: "Sarah Chen",
    role: "Product Lead, TechCorp",
  },
  {
    quote: "Finally, a visual tool that understands research workflows. We use it for every project.",
    author: "Marcus Webb",
    role: "Research Director, Innovation Labs",
  },
  {
    quote: "The collaboration features are seamless. Our distributed team stays in sync effortlessly.",
    author: "Elena Rodriguez",
    role: "Design Lead, StartupXYZ",
  },
];

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Gradient mesh background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-[hsl(var(--accent-success))]/10 blur-3xl" />
        <div className="absolute -bottom-40 left-1/2 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2 font-semibold text-primary">
            <LayoutGrid className="h-6 w-6" />
            FlowBoard
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              to="/login"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Log in
            </Link>
            <Button asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary animate-fade-in">
            <Sparkles className="h-4 w-4" />
            AI-Assisted Visual Collaboration
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Organize ideas, research & workflows
            <span className="bg-gradient-to-r from-primary to-[hsl(var(--accent-success))] bg-clip-text text-transparent">
              {" "}
              as connected flowcharts
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            The visual board for teams that think. Context-aware AI, real-time collaboration, and powerful integrations.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" className="h-12 px-8 text-base">
              <Link to="/signup">
                Get Started
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base">
              <Link to="/dashboard">Request Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features - Bento grid */}
      <section className="border-t border-border bg-muted/30 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built for modern teams
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Everything you need to visualize, collaborate, and accelerate your work.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demo placeholder */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
            <div className="flex h-8 items-center gap-2 border-b border-border bg-muted/50 px-4">
              <div className="h-3 w-3 rounded-full bg-destructive/50" />
              <div className="h-3 w-3 rounded-full bg-warning/50" />
              <div className="h-3 w-3 rounded-full bg-[hsl(var(--accent-success))]/50" />
            </div>
            <div className="flex aspect-video items-center justify-center bg-muted/30">
              <div className="text-center">
                <LayoutGrid className="mx-auto h-16 w-16 text-muted-foreground/50" />
                <p className="mt-4 text-muted-foreground">Live demo preview</p>
                <Button asChild variant="outline" className="mt-4">
                  <Link to="/dashboard">Explore Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-t border-border bg-muted/30 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Start free, scale as you grow. No hidden fees.
            </p>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.name}
                className={`relative flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${
                  tier.featured ? "border-primary shadow-lg ring-2 ring-primary/20" : ""
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground">{tier.period}</span>
                  </div>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <Zap className="h-4 w-4 shrink-0 text-[hsl(var(--accent-success))]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="mt-6 w-full"
                    variant={tier.featured ? "default" : "outline"}
                  >
                    <Link to="/signup">{tier.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Loved by teams worldwide
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              See what our customers say about FlowBoard.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.author} className="relative">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-4">
                    <p className="font-medium">{t.author}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              <span className="font-semibold">FlowBoard</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/terms" className="text-muted-foreground hover:text-foreground">
                Terms
              </Link>
              <Link to="/privacy" className="text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
              <Link to="/help" className="text-muted-foreground hover:text-foreground">
                Docs
              </Link>
              <Link to="/help#contact" className="text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </nav>
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} FlowBoard. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
