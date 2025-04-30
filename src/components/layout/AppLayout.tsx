
import { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { 
  Home,
  Menu,
  LogOut,
  Activity,
  Upload,
  BarChart,
  User,
  Settings,
  BookOpen,
  CircleInfo
} from "lucide-react";

export const AppLayout = () => {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate("/login");
  };

  const navigationItems = [
    { name: "Home", path: "/", icon: <Home className="h-5 w-5 mr-2" /> },
    { name: "How It Works", path: "/how-it-works", icon: <BookOpen className="h-5 w-5 mr-2" /> },
    { name: "About Us", path: "/about", icon: <CircleInfo className="h-5 w-5 mr-2" /> },
  ];

  if (user) {
    navigationItems.push(
      { name: "Upload Results", path: "/upload", icon: <Upload className="h-5 w-5 mr-2" /> },
      { name: "Dashboard", path: "/dashboard", icon: <BarChart className="h-5 w-5 mr-2" /> },
      { name: "Settings", path: "/settings", icon: <Settings className="h-5 w-5 mr-2" /> }
    );
  }

  const legalLinks = [
    { name: "Privacy Policy", path: "/legal/privacy-policy" },
    { name: "Terms of Service", path: "/legal/terms-of-service" },
    { name: "Cookie Policy", path: "/legal/cookie-policy" },
    { name: "GDPR", path: "/legal/gdpr" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link to="/" className="flex items-center space-x-2">
              <Activity className="h-6 w-6 text-green-600" />
              <span className="font-bold text-xl">VitalScan</span>
            </Link>
          </div>
          
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[280px]">
              <div className="flex flex-col gap-6">
                <Link to="/" className="flex items-center space-x-2" onClick={() => setOpen(false)}>
                  <Activity className="h-6 w-6 text-green-600" />
                  <span className="font-bold text-xl">VitalScan</span>
                </Link>
                <nav className="flex flex-col gap-2">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex items-center py-2 text-muted-foreground hover:text-foreground"
                      onClick={() => setOpen(false)}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  ))}
                  {user && (
                    <Button
                      variant="ghost"
                      className="flex items-center justify-start px-2"
                      onClick={() => {
                        handleSignOut();
                        setOpen(false);
                      }}
                    >
                      <LogOut className="h-5 w-5 mr-2" />
                      Sign Out
                    </Button>
                  )}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="mx-6 items-center space-x-4 md:flex hidden">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground hidden md:block">
                  Hello, {user.email?.split('@')[0]}
                </span>
                <Button variant="ghost" onClick={handleSignOut} className="hidden md:flex">
                  <LogOut className="h-5 w-5 mr-2" />
                  Sign Out
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" onClick={() => navigate('/settings')}>
                  <User className="h-5 w-5" />
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Button variant="outline" onClick={() => navigate("/login")} className="hidden md:flex">
                  Sign In
                </Button>
                <Button variant="default" onClick={() => navigate("/signup")} className="hidden md:flex bg-green-600 hover:bg-green-700">
                  Sign Up
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>
      
      <main className="flex-1 container py-6">
        <Outlet />
      </main>
      
      <footer className="border-t py-8 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div className="col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <Activity className="h-5 w-5 text-green-600" />
                <span className="font-semibold">VitalScan</span>
              </Link>
              <p className="text-sm text-muted-foreground mb-4">
                Your trusted health analytics platform for blood test insights.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="col-span-1">
              <h3 className="text-sm font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="/how-it-works"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                {user && (
                  <li>
                    <Link 
                      to="/upload"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Upload Results
                    </Link>
                  </li>
                )}
              </ul>
            </div>
            
            {/* Legal Links */}
            <div className="col-span-1">
              <h3 className="text-sm font-semibold mb-3">Legal</h3>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <Separator className="mb-6" />
          
          <div className="text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} VitalScan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
