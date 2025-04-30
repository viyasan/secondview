
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Activity } from "lucide-react";

export const FooterContent = () => {
  const legalLinks = [
    { name: "Privacy Policy", path: "/legal/privacy-policy" },
    { name: "Terms of Service", path: "/legal/terms-of-service" },
    { name: "Cookie Policy", path: "/legal/cookie-policy" },
    { name: "GDPR", path: "/legal/gdpr" },
  ];

  return (
    <>
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
        
        {/* Contact */}
        <div className="col-span-1">
          <h3 className="text-sm font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Email: contact@vitalscan.com</li>
            <li>Phone: (555) 123-4567</li>
            <li>Support Hours: 9 AM - 5 PM EST</li>
          </ul>
        </div>
      </div>
      
      <Separator className="mb-6" />
      
      <div className="text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} VitalScan. All rights reserved.</p>
      </div>
    </>
  );
};
