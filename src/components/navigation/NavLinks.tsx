import { Link } from '../Link';
import { ChevronDown } from 'lucide-react';

interface NavLinksProps {
  className?: string;
}

export function NavLinks({ className = '' }: NavLinksProps) {
  const navItems = [
    { title: 'BEST SELLERS', link: '/best-sellers' },
    {
      title: 'HAIR EXTENSIONS',
      link: '/hair-extensions',
      submenu: [
        { title: '7 Set Clip-in Extensions', link: '/hair-extensions/clip-in' },
        { title: 'Volumizers', link: '/hair-extensions/volumizers' },
        { title: 'Bangs, Buns & Braids', link: '/hair-extensions/bangs' },
        { title: 'Clip-in Streaks', link: '/hair-extensions/streaks' },
        { title: 'Ponytail Extensions', link: '/hair-extensions/ponytail' },
        { title: 'HaloHair Extensions', link: '/hair-extensions/halo' },
      ],
    },
    { title: 'HAIR THINNING', link: '/hair-thinning' },
    { title: 'HAIR CARE', link: '/hair-care' },
    { title: 'BOOK AN APPOINTMENT', link: '/book' },
    { title: 'HELP', link: '/help' },
  ];

  return (
    <ul className={`flex items-center ${className}`}>
      {navItems.map((item, index) => (
        <li key={index} className="relative group cursor-pointer">
          {/* Main Link */}
          <Link
            href={item.link}
            className="flex items-center text-gray-700 font-serif text-sm hover:text-gray-900 transition- text-nowrap"
          >
            {item.title}
            {item.submenu && <ChevronDown className="w-4 h-4 ml-1" />}
          </Link>

          {/* Dropdown Submenu */}
          {item.submenu && (
            <ul
              className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              {item.submenu.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <Link
                    href={subItem.link}
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    {subItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
