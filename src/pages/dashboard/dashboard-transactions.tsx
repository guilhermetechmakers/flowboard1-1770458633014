import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const transactions = [
  { id: "1", date: "2025-02-01", amount: "$19.00", status: "paid", type: "Subscription" },
  { id: "2", date: "2025-01-01", amount: "$19.00", status: "paid", type: "Subscription" },
  { id: "3", date: "2024-12-01", amount: "$19.00", status: "paid", type: "Subscription" },
];

export function DashboardTransactions() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Transaction History</h1>
          <p className="mt-1 text-muted-foreground">
            Billing history and AI credit usage
          </p>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Download CSV
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Transactions
          </CardTitle>
          <CardDescription>
            Recent invoices and payments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map((t) => (
              <div
                key={t.id}
                className="flex items-center justify-between rounded-lg border border-border p-4"
              >
                <div>
                  <p className="font-medium">{t.type}</p>
                  <p className="text-sm text-muted-foreground">{t.date}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-medium">{t.amount}</span>
                  <Badge variant="success">{t.status}</Badge>
                  <Button variant="ghost" size="sm">
                    Invoice
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
