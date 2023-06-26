import React from "react";

interface ButtonProps {
  version: string;
  children: string;
  path: string;
}

const Button = ({ children, version, path }: ButtonProps) => {
  return (
    <button
      className={(() => {
        switch (version) {
          case "white":
            return "block w-full md:w-auto text-center mb-2 py-4 px-8 text-sm font-medium rounded border hover:border-gray-300";
          case "inContact":
            return "inline-block py-3 px-8 text-sm leading-normal font-medium bg-red-50 hover:bg-red-100 text-red-500 rounded transition duration-200";
          default:
            return "block w-full md:w-auto text-center mb-2 py-4 px-8 md:mr-4 text-sm text-white font-medium leading-normal bg-red-400 hover:bg-red-300 rounded transition duration-200";
        }
      })()}
      href={path}
    >
      {children}
    </button>
  );
};

export default Button;
