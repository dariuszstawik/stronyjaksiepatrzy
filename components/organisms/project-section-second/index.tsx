import Button from "@/components/atoms/button";
import ListItem from "@/components/atoms/list-item";
import SectionParagraph from "@/components/atoms/section-paragraph";
import SectionHeader from "@/components/molecules/section-header";
import Image from "next/image";
import React from "react";

const ProjectSectionSecond = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col sm:max-w-md">
            <SectionHeader
              superTitle="przykładowe realizacje"
              title="Co to za film"
            ></SectionHeader>

            <SectionParagraph>
              Quiz filmowy nawiązujący do popularnego teleturnieju muzycznego.
              Czy zgadniesz tytuł po jednej sekundzie?
            </SectionParagraph>

            <ul>
              <li>
                <ListItem>wyświetlane losowe fragmenty filmów,</ListItem>
              </li>
              <li>
                <ListItem>automatycznie liczone statystyki,</ListItem>
              </li>
              <li>
                <ListItem>responsywność.</ListItem>
              </li>
            </ul>
            <div className="my-8">
              <Button
                path="https://dariuszstawik.github.io/movie-challenge/"
                isExternalLink
                isTargetBlank
              >
                Przejdź do aplikacji
              </Button>
            </div>
          </div>
        </div>
        <Image
          className="mt-24 w-full lg:hidden"
          src="/co-to-za-film-mockup.png"
          alt='mockup aplikacji "Co to za film"'
          width={1200}
          height={800}
        />
      </div>
      <div className="hidden lg:block lg:absolute lg:top-0 lg:mt-16 transition ease-in-out delay-150 lg:-mr-40 lg:right-0 lg:w-1/2 hover:-translate-x-60">
        <Image
          className="h-full w-full"
          src="/co-to-za-film-mockup.png"
          alt='mockup aplikacji "Co to za film"'
          width={1200}
          height={800}
        />
      </div>
    </section>
  );
};

export default ProjectSectionSecond;
