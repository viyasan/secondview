
import { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Home,
  Menu,
  LogOut,
  Activity
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
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
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
              <Button variant="ghost" onClick={handleSignOut} className="hidden md:flex">
                <LogOut className="h-5 w-5 mr-2" />
                Sign Out
              </Button>
            ) : (
              <Button variant="default" onClick={() => navigate("/login")} className="hidden md:flex">
                Sign In
              </Button>
            )}
          </div>
        </div>
      </header>
      
      <main className="flex-1 container py-6">
        <Outlet />
      </main>
      
      <footer className="border-t py-4">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} VitalScan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
