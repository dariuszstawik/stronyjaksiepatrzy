import React, { ReactNode } from "react";

const SectionParagraph = ({ children }: { children: ReactNode }) => {
  return <p className="mb-6 lg:mb-12 text-gray-500 text-lg">{children}</p>;
};

export default SectionParagraph;
