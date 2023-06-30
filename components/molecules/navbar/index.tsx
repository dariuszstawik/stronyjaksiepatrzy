import Button from "@/components/atoms/button";
import Logo from "@/components/atoms/logo";
import React from "react";

const Navbar = () => {

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
      <nav className="flex justify-between items-center py-6">
                    <Logo/>
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
        <div className="hidden lg:flex w-auto lg:w-3/5 lg:pl-16 ml-auto">
          <ul className="flex items-center space-x-12">
            <li>
              <a className="text-sm font-medium" href="#aboutSection">
                O mnie
              </a>
            </li>
            <li>
              <a className="text-sm font-medium" href="#offerSection">
                Oferta
              </a>
            </li>
            <li>
              <a className="text-sm font-medium" href="#featuresSection">
                Dlaczego ja
              </a>
            </li>
            <li>
              <a className="text-sm font-medium" href="#projectFeatured">
                Realizacje
              </a>
            </li>
          </ul>
          <div className="ml-auto">
<Button version="inContact" path="#contactSection">Kontakt</Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
