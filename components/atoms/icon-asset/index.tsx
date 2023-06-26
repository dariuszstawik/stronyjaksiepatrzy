import React from "react";

const IconAsset = ({ version }: { version: string }) => {
  return (
    <img
      className="hidden xl:block absolute right-0 bottom-0 mb-64"
      src={
        version === "v2"
          ? "blue-dot-left-bars.svg"
          : "yellow-dot-right-shield.svg"
      }
      alt="asset icon"
    />
  );
};

export default IconAsset;
