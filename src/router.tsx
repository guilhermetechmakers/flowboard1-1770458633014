import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { LandingPage } from "@/pages/landing";
import { LoginPage } from "@/pages/auth/login";
import { SignupPage } from "@/pages/auth/signup";
import { PasswordResetPage } from "@/pages/auth/password-reset";
import { EmailVerifyPage } from "@/pages/auth/email-verify";
import { DashboardOverview } from "@/pages/dashboard/dashboard-overview";
import { DashboardProjects } from "@/pages/dashboard/dashboard-projects";
import { DashboardProjectNew } from "@/pages/dashboard/dashboard-project-new";
import { DashboardBoard } from "@/pages/dashboard/dashboard-board";
import { DashboardTemplates } from "@/pages/dashboard/dashboard-templates";
import { DashboardImportExport } from "@/pages/dashboard/dashboard-import-export";
import { DashboardSettings } from "@/pages/dashboard/dashboard-settings";
import { DashboardAdmin } from "@/pages/dashboard/dashboard-admin";
import { DashboardUsers } from "@/pages/dashboard/dashboard-users";
import { DashboardAnalytics } from "@/pages/dashboard/dashboard-analytics";
import { DashboardBilling } from "@/pages/dashboard/dashboard-billing";
import { DashboardProfile } from "@/pages/dashboard/dashboard-profile";
import { DashboardTransactions } from "@/pages/dashboard/dashboard-transactions";
import { CheckoutPage } from "@/pages/checkout";
import { HelpPage } from "@/pages/help";
import { PrivacyPage } from "@/pages/privacy";
import { TermsPage } from "@/pages/terms";
import { NotFoundPage } from "@/pages/not-found";
import { ServerErrorPage } from "@/pages/server-error";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
  { path: "/password-reset", element: <PasswordResetPage /> },
  { path: "/email-verify", element: <EmailVerifyPage /> },
  { path: "/checkout", element: <CheckoutPage /> },
  { path: "/help", element: <HelpPage /> },
  { path: "/privacy", element: <PrivacyPage /> },
  { path: "/terms", element: <TermsPage /> },
  { path: "/500", element: <ServerErrorPage /> },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardOverview /> },
      { path: "projects", element: <DashboardProjects /> },
      { path: "projects/new", element: <DashboardProjectNew /> },
      { path: "board/:projectId", element: <DashboardBoard /> },
      { path: "templates", element: <DashboardTemplates /> },
      { path: "import-export", element: <DashboardImportExport /> },
      { path: "settings", element: <DashboardSettings /> },
      { path: "admin", element: <DashboardAdmin /> },
      { path: "users", element: <DashboardUsers /> },
      { path: "analytics", element: <DashboardAnalytics /> },
      { path: "billing", element: <DashboardBilling /> },
      { path: "profile", element: <DashboardProfile /> },
      { path: "transactions", element: <DashboardTransactions /> },
    ],
  },
  { path: "/404", element: <NotFoundPage /> },
  { path: "*", element: <NotFoundPage /> },
]);

export function AppRouter() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster position="top-right" richColors />
    </QueryClientProvider>
  );
}
