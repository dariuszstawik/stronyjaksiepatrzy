import Image from "next/image";
import React from "react";

const HeaderImg = () => {
  return (
    <Image
      className="block w-full h-full object-cover z-30 lg:w-2/5 lg:absolute lg:top-0 lg:left-0"
      src="/yak.jpg"
      alt="zdjęcie jaka pracującego na laptopie"
      width={1015}
      height={1015}
    />
  );
};

export default HeaderImg;

