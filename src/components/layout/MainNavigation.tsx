
import { Link } from "react-router-dom";
import { 
  Settings,
  LayoutDashboard
} from "lucide-react";

interface MainNavigationProps {
  user: any; // Using 'any' here to match existing type in AuthContext
}

export const MainNavigation = ({ user }: MainNavigationProps) => {
  // Only show navigation for authenticated users
  if (!user) {
    return null;
  }

  // Only Dashboard and Settings for authenticated users
  const navigationItems = [
    { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard className="h-5 w-5 mr-2" /> },
    { name: "Settings", path: "/settings", icon: <Settings className="h-5 w-5 mr-2" /> }
  ];

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
