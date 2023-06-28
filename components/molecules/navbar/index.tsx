import React from "react";

const Navbar = () => {
  return (
    <div className="relative px-4 xl:px-10">
      <nav className="flex justify-between items-center py-8">
        {/* <a className="inline-block mr-auto text-lg font-semibold" href="#">
          <img
            className="h-7"
            src="zeus-assets/logo/logo-zeus-red.svg"
            alt=""
            width="auto"
          />
        </a> */}
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
              <a className="text-sm font-medium" href="#">
                O mnie
              </a>
            </li>
            <li>
              <a className="text-sm font-medium" href="#">
                Oferta
              </a>
            </li>
            <li>
              <a className="text-sm font-medium" href="#">
                Cennik
              </a>
            </li>
            <li>
              <a className="text-sm font-medium" href="#">
                Realizacje
              </a>
            </li>
          </ul>
          <div className="ml-auto">
            <a
              className="inline-block py-3 px-8 text-sm leading-normal font-medium bg-red-50 hover:bg-red-100 text-red-500 rounded transition duration-200"
              href="#"
            >
              Kontakt
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
