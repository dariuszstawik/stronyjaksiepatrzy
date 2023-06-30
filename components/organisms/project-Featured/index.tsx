import SectionHeader from "@/components/molecules/section-header";
import React from "react";

const ProjectFeatured = () => {
  return (
    <section className="relative py-20" id="projectFeatured">
      <img
        className="hidden md:block absolute top-0 left-0 mt-24"
        src="blue-dot-left-bars.svg"
        alt=""
      />
      <div className="relative container px-4 mx-auto text-center">
        <div className="max-w-2xl mx-auto">
<SectionHeader superTitle="strony jak się patrzy" title="Przykładowe realizacje" isCentered/>
          <p className="mb-12 text-xl text-gray-500">
Czy w tak przystępnych cenach możesz się spodziewać zadowalających efektów? Sprawdź moje przykładowe realizacje - stronę fundacji oraz aplikację filmową.
          </p>

          <div>
            <img className="mx-auto" src="jaksiepatrzy-mockup.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectFeatured;
