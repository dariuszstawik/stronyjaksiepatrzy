import HeaderImg from "@/components/atoms/header-img";
import IconAsset from "@/components/atoms/icon-asset";
import HeaderContent from "@/components/molecules/header-content";
import Navbar from "@/components/molecules/navbar";
import React from "react";

const Header = () => {
  return (
    <section className="relative overflow-y-hidden"  id="top">
      <HeaderImg />
      <Navbar />
      <HeaderContent />
<IconAsset/>
    </section>
  );
};

export default Header;
