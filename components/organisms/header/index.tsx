import HeaderImg from "@/components/atoms/header-img";
import IconAsset from "@/components/atoms/icon-asset";
import HeaderContent from "@/components/molecules/header-content";
import Navbar from "@/components/molecules/navbar/index";
import React from "react";

const Header = () => {
  return (
    <section className="relative overflow-y-hidden z-20 bg-white" id="top">
      <Navbar />
      <div className="relative flex flex-col-reverse">
        <HeaderImg />
        <HeaderContent />
      </div>
      <IconAsset />
    </section>
  );
};

export default Header;
