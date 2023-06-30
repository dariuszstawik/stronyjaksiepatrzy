import React from 'react'

const Logo = () => {

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
<a className="ml-10 text-xl lg:text-xl font-semibold" href="#top">
              Strony{" "}
              <span
                className="leading-tight text-red-400"
                contentEditable="false"
              >
                jak się patrzy
              </span>{" "}
            </a>
  )
}

export default Logo;