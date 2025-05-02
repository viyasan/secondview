
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Home,
  LogOut,
  Activity,
  Upload,
  Settings,
  Info,
  BookOpen
} from "lucide-react";

interface MobileNavProps {
  user: any; // Using 'any' here to match existing type in AuthContext
  handleSignOut: () => Promise<void>;
  setOpen: (open: boolean) => void;
}

export const MobileNav = ({ user, handleSignOut, setOpen }: MobileNavProps) => {
  // Define navigation items based on user authentication status
  const navigationItems = [
    { name: "Home", path: "/", icon: <Home className="h-5 w-5 mr-2" /> },
    { name: "About Us", path: "/about", icon: <Info className="h-5 w-5 mr-2" /> },
    { name: "How It Works", path: "/how-it-works", icon: <BookOpen className="h-5 w-5 mr-2" /> },
  ];

  // Add protected routes if user is authenticated
  if (user) {
    navigationItems.push(
      { name: "Upload Results", path: "/upload", icon: <Upload className="h-5 w-5 mr-2" /> },
      { name: "Settings", path: "/settings", icon: <Settings className="h-5 w-5 mr-2" /> }
    );
  }

  return (
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
  );
};
