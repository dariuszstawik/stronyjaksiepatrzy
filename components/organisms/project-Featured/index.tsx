import SectionHeader from "@/components/molecules/section-header";
import Image from "next/image";
import React from "react";

const ProjectFeatured = () => {
  return (
    <section className="relative py-20" id="projectFeatured">
      <Image
        className="hidden md:block absolute top-0 left-0 mt-24"
        src="blue-dot-left-bars.svg"
        alt="ikona"
        width={236}
        height={102}
      />
      <div className="relative container px-4 mx-auto text-center">
        <div className="max-w-2xl mx-auto">
<SectionHeader superTitle="strony jak się patrzy" title="Przykładowe realizacje" isCentered/>
          <p className="mb-12 text-xl text-gray-500">
Czy w tak przystępnych cenach możesz się spodziewać zadowalających efektów? Sprawdź moje przykładowe realizacje - stronę fundacji oraz aplikację filmową.
          </p>

          <div>
            <Image className="mx-auto" src="/jaksiepatrzy-mockup.jpg" alt="mockup witryny stronyjaksiepatrzy.pl" width={1200} height={800} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectFeatured;
