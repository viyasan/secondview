import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { AppLayout } from "@/components/layout/AppLayout";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { Analytics } from "@vercel/analytics/next";
// Pages
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import SignupPage from "@/pages/SignupPage";
import DashboardPage from "@/pages/DashboardPage";
import UploadPage from "@/pages/UploadPage";
import ResultsPage from "@/pages/ResultsPage";
import SettingsPage from "@/pages/SettingsPage";
import NotFound from "./pages/NotFound";
import AboutUsPage from "@/pages/AboutUsPage";
import HowItWorksPage from "@/pages/HowItWorksPage";

// Legal Pages
import PrivacyPolicyPage from "@/pages/legal/PrivacyPolicyPage";
import TermsOfServicePage from "@/pages/legal/TermsOfServicePage";
import CookiePolicyPage from "@/pages/legal/CookiePolicyPage";
import GDPRPage from "@/pages/legal/GDPRPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster position="top-right" closeButton />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<HomePage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="signup" element={<SignupPage />} />
              <Route path="about" element={<AboutUsPage />} />
              <Route path="how-it-works" element={<HowItWorksPage />} />

              {/* Legal Pages */}
              <Route path="legal">
                <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
                <Route
                  path="terms-of-service"
                  element={<TermsOfServicePage />}
                />
                <Route path="cookie-policy" element={<CookiePolicyPage />} />
                <Route path="gdpr" element={<GDPRPage />} />
              </Route>

              {/* Protected Routes */}
              <Route element={<ProtectedRoute />}>
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="upload" element={<UploadPage />} />
                <Route path="results/:id" element={<ResultsPage />} />
                <Route path="settings" element={<SettingsPage />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
