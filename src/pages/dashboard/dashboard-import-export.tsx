import { Upload, Download, FileJson, FileSpreadsheet, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function DashboardImportExport() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Import / Export</h1>
        <p className="mt-1 text-muted-foreground">
          Ingest data from CSV or JSON, export boards as PNG, PDF, or structured data
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Import
            </CardTitle>
            <CardDescription>
              Upload CSV or JSON files. Map columns to board structure.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 rounded-lg border border-dashed border-border p-6">
                <FileJson className="h-10 w-10 text-muted-foreground" />
                <div>
                  <p className="font-medium">JSON</p>
                  <p className="text-sm text-muted-foreground">
                    Full board structure
                  </p>
                </div>
                <Button variant="outline" className="ml-auto">Select file</Button>
              </div>
              <div className="flex items-center gap-4 rounded-lg border border-dashed border-border p-6">
                <FileSpreadsheet className="h-10 w-10 text-muted-foreground" />
                <div>
                  <p className="font-medium">CSV</p>
                  <p className="text-sm text-muted-foreground">
                    With column mapping
                  </p>
                </div>
                <Button variant="outline" className="ml-auto">Select file</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              Export
            </CardTitle>
            <CardDescription>
              Export selected area or full board
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <Button variant="outline" className="justify-start">
                <Image className="mr-2 h-4 w-4" />
                Export as PNG
              </Button>
              <Button variant="outline" className="justify-start">
                <Download className="mr-2 h-4 w-4" />
                Export as PDF
              </Button>
              <Button variant="outline" className="justify-start">
                <FileJson className="mr-2 h-4 w-4" />
                Export as JSON
              </Button>
              <Button variant="outline" className="justify-start">
                <FileSpreadsheet className="mr-2 h-4 w-4" />
                Export as CSV
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
