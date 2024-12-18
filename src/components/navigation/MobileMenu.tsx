import { Menu } from 'lucide-react';
import { NavLinks } from './NavLinks';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
      >
        <Menu className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg py-2 px-4 z-50">
          <NavLinks className="flex flex-col space-y-4" />
        </div>
      )}
    </div>
  );
}