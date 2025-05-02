
import { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Menu,
  Activity,
  User,
  LogOut,
} from "lucide-react";
import { MainNavigation } from "./MainNavigation";
import { FooterContent } from "./FooterContent";
import { MobileNav } from "./MobileNav";

export const AppLayout = () => {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link to="/" className="flex items-center space-x-2">
              <Activity className="h-6 w-6 text-green-600" />
              <span className="font-bold text-xl">SecondView</span>
            </Link>
          </div>
          
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[280px]">
              <MobileNav user={user} handleSignOut={handleSignOut} setOpen={setOpen} />
            </SheetContent>
          </Sheet>
          
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <MainNavigation user={user} />
            
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
          <FooterContent />
        </div>
      </footer>
    </div>
  );
};
