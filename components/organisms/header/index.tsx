import HeaderImg from "@/components/atoms/header-img";
import HeaderContent from "@/components/molecules/header-content";
import Navbar from "@/components/molecules/navbar";
import React from "react";

const Header = () => {
  return (
    <section className="relative overflow-y-hidden">
      <HeaderImg />
      <Navbar />
      <HeaderContent />
      <img
        className="hidden xl:block absolute right-0 bottom-0 mb-64"
        src="yellow-dot-right-shield.svg"
        alt=""
      />
      {/* <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
        <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-lg font-semibold leading-none" href="#">
              <img
                className="h-7"
                src="zeus-assets/logo/logo-zeus-red.svg"
                alt=""
                width="auto"
              />
            </a>
            <button className="navbar-close">
              <svg
                className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                  href="#"
                >
                  About
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                  href="#"
                >
                  Company
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                  href="#"
                >
                  Services
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                  href="#"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a
                className="block py-3 text-center text-sm leading-normal bg-red-50 hover:bg-red-100 text-red-300 font-semibold rounded transition duration-200"
                href="#"
              >
                Contact Us
              </a>
            </div>
            <p className="mt-6 mb-4 text-sm text-center text-gray-500">
              <span>© 2021 All rights reserved.</span>
            </p>
          </div>
        </nav>
      </div> */}
    </section>
  );
};

export default Header;
