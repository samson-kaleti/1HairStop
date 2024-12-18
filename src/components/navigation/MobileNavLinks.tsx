import { useState } from 'react';
import { Link } from '../Link';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface MobileNavLinksProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavLinks({ isOpen, onClose }: MobileNavLinksProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const navItems = [
    { title: 'BEST SELLERS' },
    {
      title: 'HAIR EXTENSIONS',
      submenu: [
        { title: '7 Set Clip-in Extensions', link: '/hair-extensions/clip-in' },
        { title: 'Volumizers', link: '/hair-extensions/volumizers' },
        { title: 'Bangs, Buns & Braids', link: '/hair-extensions/bangs' },
        { title: 'Clip-in Streaks', link: '/hair-extensions/streaks' },
        { title: 'Ponytail Extensions', link: '/hair-extensions/ponytail' },
        { title: 'HaloHair Extensions', link: '/hair-extensions/halo' },
      ],
    },
    {
      title: 'HAIR THINNING',
      submenu: [
        { title: 'Toppers', link: '/hair-thinning/toppers' },
        { title: 'Patches', link: '/hair-thinning/patches' },
      ],
    },
    { title: 'HAIR CARE' },
    { title: 'BOOK AN APPOINTMENT' },
    { title: 'HELP' },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Overlay with fade effect */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? 'opacity-30' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Menu panel with slide effect */}
      <div
        className={`absolute top-0 left-0 h-full w-3/4 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4" onClick={onClose}>
          <X className="w-6 h-6 text-gray-600 cursor-pointer" />
        </div>

        {/* Main Menu Items */}
        <div className="relative overflow-hidden h-[calc(100%-64px)]">
          <ul
            className={`absolute w-full transition-transform duration-300 ease-in-out ${
              activeMenu ? '-translate-x-full' : 'translate-x-0'
            }`}
          >
            {navItems.map((item, index) => (
              <li key={index} className="border-b">
                <div
                  className="flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-gray-50"
                  onClick={() => item.submenu && setActiveMenu(item.title)}
                >
                  <span className="text-gray-700">{item.title}</span>
                  {item.submenu && <ChevronRight className="w-4 h-4" />}
                </div>
              </li>
            ))}
          </ul>

          {/* Submenu */}
          {navItems.map(
            (item) =>
              item.submenu && (
                <div
                  key={item.title}
                  className={`absolute top-0 left-0 w-full h-full bg-white transition-transform duration-300 ease-in-out ${
                    activeMenu === item.title ? 'translate-x-0' : 'translate-x-full'
                  }`}
                >
                  {/* Back Button */}
                  <div
                    className="flex items-center px-4 py-3 border-b cursor-pointer hover:bg-gray-50"
                    onClick={() => setActiveMenu(null)}
                  >
                    <ChevronLeft className="w-5 h-5" />
                    <span className="ml-2 text-gray-700 font-semibold">
                      Back
                    </span>
                  </div>

                  {/* Submenu Items */}
                  <ul>
                    {item.submenu.map((subItem, index) => (
                      <li key={index} className="border-b hover:bg-gray-50">
                        <Link 
                          href={subItem.link} 
                          className="block px-4 py-3 text-gray-700"
                       
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}