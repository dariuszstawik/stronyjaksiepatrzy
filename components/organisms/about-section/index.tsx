import Button from "@/components/atoms/button";
import IconAsset from "@/components/atoms/icon-asset";
import SectionParagraph from "@/components/atoms/section-paragraph";
import SectionSupertitle from "@/components/atoms/section-supertitle";
import SectionTitle from "@/components/atoms/section-title";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section className="relative py-16" id="aboutSection">
      <div className="relative container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="max-w-lg">
              <SectionSupertitle>strony jak się patrzy</SectionSupertitle>
              <SectionTitle>Cześć,</SectionTitle>

              <SectionParagraph>
                {" "}
                {/* Nazywam się Dariusz Stawik i chętnie stworzę dla Ciebie
                nowoczesną i funkcjonalną stronę internetową. Jestem programistą
                frontend, webmasterem i specjalistą ds. marketingu. Jako
                programista zbieram pierwsze doświadczenia, w marketingu
                (głównie w organizacjach pozarządowych) spędziłem ponad 10 lat.
                Ponieważ buduję portfolio programistyczne, na początek oferuję
                strony i aplikacje w okazyjnych cenach. Czy efekty będą równie
                atrakcyjne? Przekonaj się - sprawdź moje realizacje.{" "} */}
                Nazywam się Dariusz Stawik i chętnie stworzę dla Ciebie
                nowoczesną i funkcjonalną stronę internetową. Jestem programistą
                frontend, webmasterem i specjalistą ds. marketingu. Jako
                programista zacząłem w zeszłym roku, w marketingu (głównie w
                fundacjach i stowarzyszeniach) spędziłem ponad 10 lat.
                Współpracuję z grafikami i fotografami, więc jeżeli potrzebujesz
                na stronę loga lub sesji zdjęciowej, ogarniemy to!
              </SectionParagraph>

              <div className="mt-8">
                <Button path="#projectFeatured">Sprawdź moje realizacje</Button>
              </div>
            </div>
          </div>
          <div className="relative w-full lg:w-1/2 px-4">
            <Image
              className="rounded-xl object-cover lg:h-128"
              src="/DS4.jpg"
              alt="Dariusz Stawik"
              width={900}
              height={998}
            />
          </div>
        </div>
      </div>
      <IconAsset />
    </section>
  );
};

export default AboutSection;
