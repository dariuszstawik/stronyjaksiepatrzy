import React from "react";

const SectionTitle = ({ children }: { children: string }) => {
  return (
    <h2 className="mt-8 mb-6 lg:mb-10 lg:pr-8 text-4xl font-semibold">
      {children}
    </h2>
  );
};

export default SectionTitle;
