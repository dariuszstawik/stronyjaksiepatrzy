"use client";
import Link from "next/link";
import React from "react";

type LogoProps = {
  closeMobileMenu?: () => void;
  isNotHomepage?: boolean;
};

const Logo: React.FC<LogoProps> = ({ closeMobileMenu, isNotHomepage }) => {
  // const Logo = ({ closeMobileMenu }: { closeMobileMenu?: () => void }) => {
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
    <Link
      className="ml-4 text-sm lg:text-xl font-semibold shrink-0"
      href={`${isNotHomepage ? "/" : "/#top"}`}
      onClick={(e) => {
        {
          closeMobileMenu ? closeMobileMenu() : "";
        }
        !isNotHomepage && handleScroll(e);
      }}
    >
      Strony{" "}
      <span className="leading-tight text-red-400">{"<jak>"} się patrzy</span>{" "}
    </Link>
  );
};

export default Logo;
