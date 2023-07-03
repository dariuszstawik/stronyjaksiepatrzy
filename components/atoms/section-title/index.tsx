import React from "react";

const SectionTitle = ({ children }: { children: string }) => {
  return (
    <h2 className="mt-4 mb-6 text-4xl font-semibold" contentEditable="false">
      {children}
    </h2>
  );
};

export default SectionTitle;
