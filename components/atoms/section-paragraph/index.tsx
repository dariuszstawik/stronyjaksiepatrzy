import React, { ReactNode } from "react";

const SectionParagraph = ({ children }: { children: ReactNode }) => {
  return <p className="my-2 text-gray-500 text-lg">{children}</p>;
};

export default SectionParagraph;
