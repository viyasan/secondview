
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-urbanite-950 text-urbanite-100 pt-16 pb-8">
      <div className="urbanite-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">URBANITE</h3>
            <p className="text-sm text-urbanite-300 mb-6">
              Minimalist, sustainable fashion for the modern world. Ethically sourced, 
              thoughtfully designed.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-urbanite-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </Link>
              <Link to="#" className="text-urbanite-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </Link>
              <Link to="#" className="text-urbanite-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Shop Column */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold mb-4 uppercase text-white">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/collections/all" className="text-urbanite-300 hover:text-white transition-colors">All Products</Link></li>
              <li><Link to="/collections/men" className="text-urbanite-300 hover:text-white transition-colors">Men</Link></li>
              <li><Link to="/collections/women" className="text-urbanite-300 hover:text-white transition-colors">Women</Link></li>
              <li><Link to="/collections/accessories" className="text-urbanite-300 hover:text-white transition-colors">Accessories</Link></li>
              <li><Link to="/collections/bestsellers" className="text-urbanite-300 hover:text-white transition-colors">Bestsellers</Link></li>
              <li><Link to="/collections/new-arrivals" className="text-urbanite-300 hover:text-white transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold mb-4 uppercase text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-urbanite-300 hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/sustainability" className="text-urbanite-300 hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="/careers" className="text-urbanite-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/store-locator" className="text-urbanite-300 hover:text-white transition-colors">Store Locator</Link></li>
              <li><Link to="/contact" className="text-urbanite-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Customer Service Column */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold mb-4 uppercase text-white">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faq" className="text-urbanite-300 hover:text-white transition-colors">Help & FAQ</Link></li>
              <li><Link to="/shipping" className="text-urbanite-300 hover:text-white transition-colors">Shipping & Delivery</Link></li>
              <li><Link to="/returns" className="text-urbanite-300 hover:text-white transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/size-guide" className="text-urbanite-300 hover:text-white transition-colors">Size Guide</Link></li>
              <li><Link to="/privacy-policy" className="text-urbanite-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-urbanite-300 hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-urbanite-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xs text-urbanite-400 mb-4 md:mb-0">
              © {currentYear} URBANITE. All rights reserved.
            </div>
            <div className="flex space-x-6 text-xs text-urbanite-400">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
