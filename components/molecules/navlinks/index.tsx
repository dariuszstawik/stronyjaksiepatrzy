import Link from "next/link";
import React from "react";
import { navbarData } from "../navbar/navbarData";

interface NavlinksProps {
  closeMobileMenu: () => void;
  isVisible: boolean;
  isNotHomepage?: boolean;
}

const Navlinks = ({
  isVisible,
  isNotHomepage,
  closeMobileMenu,
}: NavlinksProps) => {
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
    <ul
      className={
        isVisible
          ? "bg-white text-sm font-medium list-none absolute z-40 w-full top-full left-0 bg-backgroundGray py-4 flex flex-col justify-center align-center items-center gap-10 lg:static lg:flex-row my-4 ml-4"
          : "bg-white text-sm font-medium list-none flex-col justify-center align-center items-center gap-10 lg:flex-row my-4 hidden lg:flex ml-4"
      }
    >
      {navbarData.map((navlink, i) => {
        return (
          <li key={i}>
            <Link
              href={navlink.path}
              onClick={(e) => {
                closeMobileMenu();
                !isNotHomepage && handleScroll(e);
              }}
            >
              {navlink.title}
            </Link>
          </li>
        );
      })}
      <li>
        <Link
          href="/jack-oswojony-jak"
          onClick={(e) => {
            closeMobileMenu();
          }}
        >
          Jak Jack
        </Link>
      </li>
    </ul>
  );
};

export default Navlinks;
