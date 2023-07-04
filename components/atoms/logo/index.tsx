'use client';
import React from 'react'

const Logo = ({closeMobileMenu} : {closeMobileMenu: ()=>void}) => {

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
<a className="ml-10 text-sm lg:text-xl font-semibold" href="#top" onClick={(e) => { closeMobileMenu(); handleScroll(e); }}>
              Strony{" "}
              <span
                className="leading-tight text-red-400"
              >
                jak się patrzy
              </span>{" "}
            </a>
  )
}

export default Logo;