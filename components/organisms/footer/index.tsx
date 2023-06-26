import React from "react";

const Footer = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center -mx-4">
          <div className="w-full lg:w-2/6 px-4">
            <a
              className="inline-block mb-6 text-gray-900 text-lg font-semibold"
              href="#"
            >
              <img
                className="h-7"
                src="zeus-assets/logo/logo-zeus-red.svg"
                alt=""
                width="auto"
              />
            </a>
            <p className="hidden lg:block text-sm text-gray-500">
              All rights reserved © Zeus Corporation 2021
            </p>
          </div>
          <div className="w-full lg:w-4/6 px-4">
            <div className="flex flex-wrap items-center justify-end">
              <ul className="w-full lg:w-auto inline-flex flex-wrap mb-4 lg:mb-0 md:mr-6 lg:mr-12">
                <li className="mr-12 mb-2 md:mb-0">
                  <a className="text-sm font-medium" href="#">
                    About
                  </a>
                </li>
                <li className="mr-12 mb-2 md:mb-0">
                  <a className="text-sm font-medium" href="#">
                    Company
                  </a>
                </li>
                <li className="mr-12 mb-2 md:mb-0">
                  <a className="text-sm font-medium" href="#">
                    Services
                  </a>
                </li>
                <li className="mb-2 md:mb-0">
                  <a className="text-sm font-medium" href="#">
                    Testimonials
                  </a>
                </li>
              </ul>
              <a
                className="inline-block mr-auto lg:mr-0 py-4 px-8 text-sm text-white font-medium leafing-normal bg-red-400 hover:bg-red-300 rounded"
                href="#"
              >
                Get in Touch
              </a>
            </div>
            <p className="mt-6 lg:hidden text-sm text-gray-500">
              All rights reserved © Zeus Corporation 2021
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
