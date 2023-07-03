import React from "react";

const SectionSupertitle = ({ children }: { children: string }) => {
  return (
    <span className="text-xs text-blue-400 font-semibold" contentEditable="false">{children}</span>
  );
};

export default SectionSupertitle;
