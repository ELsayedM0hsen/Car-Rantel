import React, { useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import logo from "../../assets/logo1.png";

export const NaveLinks = [
  { id: 1, name: "HOME", link: "/#" },
  { id: 1, name: "CARS", link: "/#" },
  { id: 1, name: "ABOUT", link: "/#" },
  { id: 1, name: "BOOKING", link: "/#" },
];
const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="shadow-md relative w-full z-10 bg-white dark:bg-dark dark:text-white duration-300">
      <div className="container py-2 md:py-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="image" className="rounded-full w-20 h-20" />
            <span className="font-bold text-3xl font-serif">Car Rantel</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NaveLinks.map((item) => (
                <li key={item.id} className="py-4">
                  <a
                    href={item.link}
                    className="py-2 text-lg hover:text-primary hover:border-b-2 hover:border-primary transition-colors duration-500 font-medium"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              {theme === "dark" ? (
                <BiSolidSun
                  className="text-2xl"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BiSolidMoon
                  className="text-2xl"
                  onClick={() => setTheme("dark")}
                />
              )}
            </ul>
          </nav>
          <div className="md:hidden flex items-center gap-4">
            {theme === "dark" ? (
              <BiSolidSun
                className="text-2xl"
                onClick={() => setTheme("light")}
              />
            ) : (
              <BiSolidMoon
                className="text-2xl"
                onClick={() => setTheme("dark")}
              />
            )}
            {showMenu ? (
              <HiMenuAlt1
                className="corsor-pointer transition-all"
                size={30}
                onClick={() => setShowMenu(!showMenu)}
              />
            ) : (
              <HiMenuAlt3
                className="corsor-pointer transition-all"
                size={30}
                onClick={() => setShowMenu(!showMenu)}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
