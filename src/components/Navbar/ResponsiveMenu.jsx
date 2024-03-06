import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { NaveLinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div className={`${showMenu ? "left-0" : "left-[100%]"}
    fixed bottom-0 top-0 z-20 w-[50%] h-screen flex justify-between flex-col bg-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md dark:bg-gray-900 dark:text-white
    `}>
      <div className="card flex p-3 gap-3">
        <FaUserCircle size={50} />
        <div className="flex flex-col">
          <h1>Hello User</h1>
          <h2>User Email</h2>
        </div>
      </div>
      <nav className="mt-12">
        <ul className="space-y-4 text-xl">
          {NaveLinks.map((item) => (
            <li>
              <a href={item.link} className="mb-5 inline-block">{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="footer">
        <h1>
          Made with ❤ by <a href="#">NoOne</a>
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
