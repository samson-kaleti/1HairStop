import { Link } from "../Link";
import { ChevronDown } from "lucide-react";

export function DesktopNavLinks() {
  const navItems = [
    { title: "BEST SELLERS" },
    {
      title: "HAIR EXTENSIONS",
      submenu: [
        { title: "7 Set Clip-in Extensions", link: "/hair-extensions/clip-in" },
        { title: "Volumizers", link: "/hair-extensions/volumizers" },
        { title: "Bangs, Buns & Braids", link: "/hair-extensions/bangs" },
        { title: "Clip-in Streaks", link: "/hair-extensions/streaks" },
        { title: "Ponytail Extensions", link: "/hair-extensions/ponytail" },
        { title: "HaloHair Extensions", link: "/hair-extensions/halo" },
      ],
    },
    {
      title: "HAIR THINNING",
      submenu: [
        { title: "Shop All", link: "/hair-extensions/clip-in" },
        { title: "Invisible Patches", link: "/hair-extensions/volumizers" },
        { title: "Hair Toppers", link: "/hair-extensions/bangs" },
        { title: "Luxury Wigs", link: "/hair-extensions/streaks" },
        { title: "Customisation", link: "/hair-extensions/ponytail" },
      ],
    },
    {
      title: "HAIR CARE",
      submenu: [
        { title: "Hair Care & Esssentials", link: "/hair-extensions/clip-in" },
        { title: "Eyebrows", link: "/hair-extensions/volumizers" },
        { title: "Hair Accessories", link: "/hair-extensions/bangs" },
      ],
    },
    { title: "BOOK AN APPOINTMENT",submenu: [
      { title: "In-Person Consult - Bangalore", link: "/hair-extensions/clip-in" },
      { title: "In-Person Consult - Hyderabad", link: "/hair-extensions/volumizers" },
      { title: "Video Consult", link: "/hair-extensions/bangs" },
    ], },
    { title: "HELP" ,  submenu: [
      { title: "Hair Care/ Maintenance", link: "/hair-extensions/clip-in" },
      { title: "Loyalty Program", link: "/hair-extensions/volumizers" },
      { title: "Customer Reviews", link: "/hair-extensions/bangs" },
      { title: "Contact Us", link: "/hair-extensions/bangs" },

    ],},
  ];
  return (
    <ul className=" flex items-center justify-center  space-x-8">
      {navItems.map((item, index) => (
        <li key={index} className="relative group cursor-pointer">
          <Link href={"#"} className="text-gray-700 text-[12px] hover:text-gray-900">
            {item.title}
            {item.submenu && (
              <ChevronDown className="inline-block w-4 h-4 ml-1" />
            )}
          </Link>
          {item.submenu && (
            <ul className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md w-48 opacity-0 group-hover:opacity-100 transition-all duration-300">
              {item.submenu.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <Link
                    href={subItem.link}
                    className="block px-4 py-2 hover:bg-gray-100 text-[12px]"
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
