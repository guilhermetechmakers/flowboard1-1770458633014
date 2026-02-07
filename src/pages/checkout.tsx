import { useState } from "react";
import { Link } from "react-router-dom";
import { CreditCard, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const plans = [
  { id: "monthly", name: "Monthly", price: 19, period: "month" },
  { id: "annual", name: "Annual", price: 190, period: "year", savings: "Save 17%" },
];

export function CheckoutPage() {
  const [plan, setPlan] = useState("monthly");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-muted/30 py-12">
      <div className="mx-auto max-w-2xl px-4">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Checkout</h1>
          <p className="mt-1 text-muted-foreground">
            Complete your subscription
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Plan</CardTitle>
              <CardDescription>Select monthly or annual billing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {plans.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPlan(p.id)}
                    className={`flex flex-col rounded-lg border p-4 text-left transition-colors ${
                      plan === p.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <span className="font-medium">{p.name}</span>
                    <span className="text-2xl font-bold">${p.price}</span>
                    <span className="text-sm text-muted-foreground">/{p.period}</span>
                    {p.savings && (
                      <span className="mt-2 text-xs text-[hsl(var(--accent-success))]">
                        {p.savings}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Payment
              </CardTitle>
              <CardDescription>
                Enter your card details
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="card">Card number</Label>
                  <Input id="card" placeholder="4242 4242 4242 4242" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="coupon">Coupon</Label>
                  <Input id="coupon" placeholder="Optional" />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Processing..." : "Confirm & Pay"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Button variant="link" asChild>
              <Link to="/dashboard">Cancel</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
