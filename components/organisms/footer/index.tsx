import Logo from "@/components/atoms/logo";
import { navbarData } from "@/components/molecules/navbar/navbarData";
import React from "react";

const Footer = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center -mx-4">
          <div className="w-full lg:w-2/6 px-4">
            <div className="inline-block mb-6">
              <Logo />
            </div>
            <p className="hidden lg:block text-sm text-gray-500">
              All rights reserved © Dariusz Stawik 2023
            </p>
          </div>
          <div className="w-full lg:w-4/6 px-4">
            <div className="flex flex-wrap items-center justify-end">
              <ul className="w-full lg:w-auto inline-flex flex-wrap mb-4 lg:mb-0 md:mr-6 lg:mr-12">
                {navbarData.map((item, i) => {
                  return (
                    <li key={i} className="mr-12 mb-2 md:mb-0">
                      <a className="text-sm font-medium" href={item.path}>
                        {item.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <p className="mt-6 lg:hidden text-sm text-gray-500">
              All rights reserved © Dariusz Stawik 2023
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
