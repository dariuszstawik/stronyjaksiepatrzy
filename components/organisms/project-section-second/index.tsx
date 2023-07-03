import Button from "@/components/atoms/button";
import ListItem from "@/components/atoms/list-item";
import SectionParagraph from "@/components/atoms/section-paragraph";
import SectionHeader from "@/components/molecules/section-header";
import Link from "next/link";
import React from "react";

const ProjectSectionSecond = () => {
  return (
    <section className="relative py-20 overflow-x-hidden">
      <div className="container px-4 mx-auto">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col sm:max-w-md">
<SectionHeader superTitle="przykładowe realizacje" title="Co to za film"></SectionHeader>

            <SectionParagraph>Quiz filmowy nawiązujący do popularnego teleturnieju muzycznego. Czy zgadniesz tytuł po jednej sekundzie?</SectionParagraph>

<ul>
  <li><ListItem>wyświetlane losowe fragmenty filmów,</ListItem></li>
  <li><ListItem>automatycznie liczone statystyki,</ListItem></li>
  <li><ListItem>responsywność.</ListItem></li>
</ul>
<div className="my-8">
<Button path="https://dariuszstawik.github.io/movie-challenge/" isExternalLink>Przejdź do aplikacji</Button>
</div>
          </div>
        </div>
        <img className="mt-24 w-full lg:hidden" src="futprints-mockup.jpg" alt="" />
      </div>
      <div className="hidden lg:block lg:absolute lg:top-0 lg:mt-32 transition ease-in-out delay-150 lg:-mr-40 lg:right-0 lg:w-1/2 hover:-translate-x-60">
        <img className="h-full w-full" src="co-to-za-film-mockup.png" alt="" />
      </div>
    </section>
  );
};

export default ProjectSectionSecond;
