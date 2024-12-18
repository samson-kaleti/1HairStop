import { useState, useEffect, useCallback } from 'react';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';
import { Link } from './Link';
import { DesktopNavLinks } from './navigation/DesktopNavLinks';
import { MobileNavLinks } from './navigation/MobileNavLinks';

export function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const checkScreenSize = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [checkScreenSize]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          )}

          {/* Logo */}
          <div className="flex justify-start">
            <Link href="/">
              <img
                src="https://1hairstop.in/cdn/shop/files/1_Hair_Stop_Logo_-_Black_f3f1ba16-e269-4d8a-973a-8b64a1e81719.png"
                alt="Logo"
                className="h-8 md:h-10"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && <DesktopNavLinks />}

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 cursor-pointer" />
            <User className="w-5 h-5 cursor-pointer" />
            <ShoppingCart className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNavLinks 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
    </nav>
  );
}