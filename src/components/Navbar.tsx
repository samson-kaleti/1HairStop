import  { useState } from 'react';
import { Search, User, ShoppingCart } from 'lucide-react';
import { Link } from './Link';
import { NavLinks } from './navigation/NavLinks';
import { MobileMenu } from './navigation/MobileMenu';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white  sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
            <Link href="/" className="text-2xl font-bold ml-2 md:ml-0">
            <img src="https://1hairstop.in/cdn/shop/files/1_Hair_Stop_Logo_-_Black_f3f1ba16-e269-4d8a-973a-8b64a1e81719.png?height=44&v=1678885440" alt="logo" />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <NavLinks className="flex items-center space-x-8  font-sans" />
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}