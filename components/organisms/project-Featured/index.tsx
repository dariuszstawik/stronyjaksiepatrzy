import React from "react";

const ProjectFeatured = () => {
  return (
    <section className="relative py-20">
      <img
        className="hidden md:block absolute top-0 left-0 mt-24"
        src="zeus-assets/icons/dots/blue-dot-left-bars.svg"
        alt=""
      />
      <div className="relative container px-4 mx-auto text-center">
        <div className="max-w-2xl mx-auto">
          <span className="text-xs text-blue-400 font-semibold">
            strony jak się patrzy
          </span>
          <h2 className="mt-8 mb-10 text-4xl font-semibold font-heading">
            Lorem ipsum dolor sit amet consectutar domor at elis
          </h2>
          <p className="mb-12 text-xl text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
            aliquet orci.
          </p>

          <div>
            <img className="mx-auto" src="laptop.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectFeatured;
