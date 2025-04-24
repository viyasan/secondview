
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X, User, Search } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from '@/hooks/useCart';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="urbanite-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-lg md:text-xl font-semibold">
              URBANITE
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/collections/all" className="text-sm font-medium hover:text-urbanite-600 transition-colors">
              ALL PRODUCTS
            </Link>
            <Link to="/collections/men" className="text-sm font-medium hover:text-urbanite-600 transition-colors">
              MEN
            </Link>
            <Link to="/collections/women" className="text-sm font-medium hover:text-urbanite-600 transition-colors">
              WOMEN
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-urbanite-600 transition-colors">
              OUR STORY
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <Badge variant="destructive" className="absolute -top-1 -right-1 min-w-[1.1rem] h-[1.1rem] flex items-center justify-center px-0.5 py-0.5 text-[10px]">
                  {totalItems}
                </Badge>
              )}
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t animate-slide-down">
          <div className="urbanite-container py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/collections/all" 
                className="text-sm font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                ALL PRODUCTS
              </Link>
              <Link 
                to="/collections/men" 
                className="text-sm font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                MEN
              </Link>
              <Link 
                to="/collections/women" 
                className="text-sm font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                WOMEN
              </Link>
              <Link 
                to="/about" 
                className="text-sm font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                OUR STORY
              </Link>
              <div className="flex items-center space-x-4 py-2">
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <Search size={16} />
                  <span>Search</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <User size={16} />
                  <span>Account</span>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
