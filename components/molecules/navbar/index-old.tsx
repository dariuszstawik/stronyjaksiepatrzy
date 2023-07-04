"use client";
import Button from "@/components/atoms/button";
import Logo from "@/components/atoms/logo";
import React, { useState } from "react";
import { navbarData } from "./navbarData";

const Navbar = () => {

const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed w-full bg-white px-4 xl:px-10 z-20">
      <nav className="relative w-full flex justify-between py-6 z-20 bg-white">
        <Logo />

        <div className="relative flex w-full gap-12 lg:w-3/5 lg:pl-16 ml-auto z-20 bg-white">
          <ul className="absolute top-full w-full flex flex-col justify-center items-center gap-12 lg:flex-row z-20 bg-white">
            {navbarData.map((item, i) => {
              return (
                <li key={i}>
                  <a
                    className="text-sm m-0 font-medium"
                    href={item.path}
                    onClick={handleScroll}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
                  <div className="lg:hidden ml-auto">
          <button className="navbar-burger flex items-center p-3 hover:bg-gray-50 rounded">
            <svg
              className="block h-4 w-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
          <div className="ml-auto">
            <Button version="white" path="#contactSection">
              Kontakt
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
