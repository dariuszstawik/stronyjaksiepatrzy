"use client";
import Image from "next/image";
import React from "react";
import Button from "../button";

const HeaderImg = () => {
  return (
    <div className="block w-full h-full object-cover z-30 lg:w-2/5 lg:absolute lg:top-0 lg:left-0 relative">
      <img
        className="h-full object-cover"
        src="/yakJack80.jpg"
        alt="zdjęcie jaka pracującego na laptopie"
        // width={1015}
        // height={1015}
        // priority
      />
      {/* <div className="absolute bottom-32"> */}
      {/* <Button path="">Hej, jestem Jack - oswojony jak. Poznajmy się!</Button> */}
      {/* <img src="bubble3.svg" className="w-1/2 fill-white"></img> */}
      {/* </div> */}
      <div
        className="absolute -top-6 left-8 p-6 pl-12 pr-8  rounded-r-lg"
        // style={{
        //   backgroundImage: `url("/bubble5.svg")`,
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <img src="bubble5.svg" className="w-56 rotate-3"></img>
        {/* <h2 className="text-2xl mb-2">Hej, jestem Jack - oswojony jak.</h2>
        <h2 className="text-2xl ">Poznajmy się!</h2> */}
      </div>
    </div>
  );
};

export default HeaderImg;
