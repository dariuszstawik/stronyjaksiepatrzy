"use client";

import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React, { MouseEventHandler } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  version?: string;
  children: string;
  path?: string | Url | undefined;
  isExternalLink?: boolean;
  isTargetBlank?: boolean;
}

const Button = ({
  children,
  version,
  path,
  isExternalLink,
  isTargetBlank,
  ...rest
}: ButtonProps) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const onClickHandler: MouseEventHandler<HTMLAnchorElement> | undefined =
    isExternalLink ? undefined : handleScroll;

  if (isExternalLink) {
    return (
      <a
        onClick={onClickHandler}
        className={(() => {
          switch (version) {
            case "white":
              return "block w-full md:w-auto text-center py-4 px-8 text-sm font-medium leading-normal rounded border hover:border-gray-300";
            case "inContact":
              return "inline-block py-3 px-8 text-sm leading-normal font-medium bg-red-50 hover:bg-red-100 text-red-500 rounded transition duration-200";
            default:
              return "block w-full md:w-auto text-center py-4 px-8 md:mr-4 text-sm text-white font-medium leading-normal bg-red-400 hover:bg-blue-400 rounded transition duration-200";
          }
        })()}
        target={isTargetBlank ? "_blank" : ""}
        href={path as string}
      >
        {children}
      </a>
    );
  } else {
    return (
      <Link
        onClick={onClickHandler}
        className={(() => {
          switch (version) {
            case "white":
              return "block w-full md:w-auto text-center py-4 px-8 text-sm font-medium leading-normal rounded border hover:border-gray-300";
            case "inContact":
              return "inline-block py-3 px-8 text-sm leading-normal font-medium bg-red-50 hover:bg-red-100 text-red-500 rounded transition duration-200";
            default:
              return "block w-full md:w-auto text-center py-4 px-8 md:mr-4 text-sm text-white font-medium leading-normal bg-red-400 hover:bg-blue-400 rounded transition duration-200";
          }
        })()}
        href={path as string}
      >
        {children}
      </Link>
    );
  }
};

export default Button;
