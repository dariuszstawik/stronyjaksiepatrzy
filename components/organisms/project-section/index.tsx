import Button from "@/components/atoms/button";
import ListItem from "@/components/atoms/list-item";
import SectionParagraph from "@/components/atoms/section-paragraph";
import SectionHeader from "@/components/molecules/section-header";
import Link from "next/link";
import React from "react";

const ProjectSection = () => {
  return (
    <section className="relative py-20 overflow-x-hidden">
      <div className="container px-4 mx-auto">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col sm:max-w-md">
<SectionHeader superTitle="przykładowe realizacje" title="Nowa strona Fundacji Futprints"></SectionHeader>
            {/* <p className="mb-10 text-lg text-gray-500">
            Strona fundacji, która zajmuje się wsparciem osób zagrożonych wykluczeniem, w szczególności osób w kryzysie bezdomności.
            </p> */}
            <SectionParagraph>Strona fundacji, która zajmuje się wsparciem osób zagrożonych wykluczeniem, w szczególności osób w kryzysie bezdomności.</SectionParagraph>
            {/* <Link href="https://futprints-website.vercel.app/">Zobacz stronę</Link> */}
<ul>
  <li><ListItem>strona wielojęzyczna,</ListItem></li>
  <li><ListItem>responsywność,</ListItem></li>
  <li><ListItem>panel CMS.</ListItem></li>
</ul>
<div className="my-8">
<Button path="https://futprints-website.vercel.app/" isExternalLink>Przejdź do strony</Button>
</div>
          </div>
        </div>
        <img className="mt-24 w-full lg:hidden" src="futprints-mockup.jpg" alt="" />
      </div>
      <div className="hidden lg:block lg:absolute lg:top-0 lg:mt-32 transition ease-in-out delay-150 lg:-mr-40 lg:right-0 lg:w-1/2 hover:-translate-x-60">
        <img className="h-full w-full" src="futprints-mockup.jpg" alt="" />
      </div>
    </section>
  );
};

export default ProjectSection;
