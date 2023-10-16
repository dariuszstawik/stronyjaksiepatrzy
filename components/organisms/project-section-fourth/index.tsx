import Button from "@/components/atoms/button";
import ListItem from "@/components/atoms/list-item";
import SectionParagraph from "@/components/atoms/section-paragraph";
import SectionHeader from "@/components/molecules/section-header";
import Image from "next/image";
import React from "react";

const ProjectSectionFourth = () => {
  return (
    <section className="relative py-20 overflow-x-hidden">
      <div className="container px-4 mx-auto">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col sm:max-w-md">
            <SectionHeader
              superTitle="przykładowe realizacje"
              title="Strona Smart Equestrian"
            ></SectionHeader>

            <SectionParagraph>
              Strona firmy, którą założyła Aleksandra Grzybkowska, wielokrotna
              medalistka Mistrzostw Polski w jeździectwie.
            </SectionParagraph>

            <ul>
              <li>
                <ListItem>
                  wdrożenie programistyczne projektu graficznego
                </ListItem>
              </li>
              <li>
                <ListItem>strona dwujęzyczna,</ListItem>
              </li>
              <li>
                <ListItem>moduł sklepu internetowego.</ListItem>
              </li>
            </ul>
            <div className="my-8">
              <Button
                path="https://smart-equestrian.pl/"
                isExternalLink
                isTargetBlank
              >
                Przejdź do strony
              </Button>
            </div>
          </div>
        </div>
        <Image
          className="mt-24 w-full lg:hidden"
          src="/smarteq-mockup.png"
          alt="mockup Smart Equestrian"
          width={1200}
          height={800}
        />
      </div>
      <div className="hidden lg:block lg:absolute lg:top-0 lg:mt-32 transition ease-in-out delay-150 lg:-mr-40 lg:right-0 lg:w-1/2 hover:-translate-x-60">
        <Image
          className="h-full w-full"
          src="/smarteq-mockup.png"
          alt="mockup Smart Equestrian"
          width={1200}
          height={800}
        />
      </div>
    </section>
  );
};

export default ProjectSectionFourth;
