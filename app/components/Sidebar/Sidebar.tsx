// components/Sidebar.js
"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { signOut } from "next-auth/react";
import GetMenu from "./Menu";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div
        className={`fixed top-0 left-0 z-30 h-full bg-gray-800 w-64 overflow-y transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* <button
          className="text-white p-4 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button> */}
        <div className="mt-5 ml-5">
          <a href="" className="text-2xl font-semibold text-white">
            NextDash
          </a>
        </div>
        <nav className="flex flex-col mt-10 space-y-2">
          <ul>
            <GetMenu />
            <li>
              <a
                onClick={() => signOut({ callbackUrl: "/" })}
                className="block p-4 text-sm font-medium text-white hover:bg-gray-600"
              >
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <button
        className={`fixed top-3 right-3 z-40 text-black p-4 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars size={24} />
      </button>
    </>
  );
};

export default Sidebar;
