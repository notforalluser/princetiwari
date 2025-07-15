import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    "Home",
    "About Us",
    "Skills",
    "Experience",
    "Projects",
    "Certificates",
    // "Blogs",
    "Contact Us",
  ];

  return (
    <nav className="bg-black z-50 text-white shadow-md fixed top-0 left-0 w-full rounded-lg border-b border-white">
      <div className="bg-white/10 max-w-7xl mx-auto px-5 py-3 flex justify-between items-center rounded-xl">
        <div className="font-bold text-lg bg-white/20 px-2 py-1 rounded-full">PT</div>
        <ul className="hidden md:flex space-x-6 text-base font-medium">
          {links.map((link) => (
            <li key={link}>
              <Link
                to={link.toLowerCase().replace(/\s/g, "")}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer hover:text-purple-500 hover:underline underline-offset-8 transition duration-300"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div className="font-bold text-lg bg-white/20 px-2 py-1 rounded-full">CT</div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <ul className="md:hidden px-6 pb-4 space-y-4 text-base font-medium bg-white shadow-sm">
          {links.map((link) => (
            <li key={link}>
              <Link
                to={link.toLowerCase().replace(/\s/g, "")}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="block cursor-pointer hover:text-pink-500 transition duration-300"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;