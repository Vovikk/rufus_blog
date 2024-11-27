"use client";

import { useState } from "react";
import Image from "next/image";
import menu from "@/assets/icons/menu.svg";
import search from "@/assets/icons/search.svg";

const Menu = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="absolute w-full flex justify-end">
      <Image
        src={menu}
        alt="Menu"
        onClick={toggleMenu}
        className="relative cursor-pointer z-50 mr-6"
      />
      {isMenuOpen && (
        <nav className="absolute z-50 bg-background top-14 right-0 w-full ">
          <ul className="flex flex-col items-center space-y-2">
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.href + link.key}>{link.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col px-16 space-y-2 py-4 w-full items-center">
            <div className="relative flex items-center w-full max-w-sm">
              <input
                type="text"
                className="w-full h-14 rounded-[3.75rem] px-8 placeholder:text-black"
                placeholder="Search"
              />
              <div htmlFor="input" className="absolute right-8 cursor-pointer">
                <Image src={search} alt="Search" />
              </div>
            </div>

            <button className="bg-purple text-white px-8 py-4 rounded-[3.75rem] max-w-sm w-full">
              ¡Hablemos!
            </button>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Menu;
