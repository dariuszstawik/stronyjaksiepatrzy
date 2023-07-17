"use client";
import Hamburger from "@/components/atoms/hamburger";
import Logo from "@/components/atoms/logo";
import React, { useState } from "react";
import Navlinks from "../navlinks";
import Button from "@/components/atoms/button";

const Navbar = () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuActive(false);
  };

  return (
    <div className="fixed w-full h-28 flex justify-between items-center px-4 lg:px-16 py-4 bg-white top-0 left-0 z-30">
      <Logo closeMobileMenu={closeMobileMenu} />
      <div className="pl-16 w-3/5 flex justify-end lg:justify-between content-center items-center gap-6">
        <Navlinks
          isVisible={isMobileMenuActive}
          closeMobileMenu={closeMobileMenu}
        />
        <Button version="white" path="#contactSection">
          Kontakt
        </Button>
        <Hamburger
          hasCloseIcon={isMobileMenuActive ? true : false}
          toggleMobileMenu={toggleMobileMenu}
        />
      </div>
    </div>
  );
};

export default Navbar;
