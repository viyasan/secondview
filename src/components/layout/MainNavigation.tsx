
import { Link } from "react-router-dom";
import { 
  Home,
  Upload,
  Settings,
  Info,
  BookOpen
} from "lucide-react";

interface MainNavigationProps {
  user: any; // Using 'any' here to match existing type in AuthContext
}

export const MainNavigation = ({ user }: MainNavigationProps) => {
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
  );
};
