import Button from "@/components/atoms/button";
import IconAsset from "@/components/atoms/icon-asset";
import SectionParagraph from "@/components/atoms/section-paragraph";
import SectionSupertitle from "@/components/atoms/section-supertitle";
import SectionTitle from "@/components/atoms/section-title";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section className="relative py-16 pt-28" id="aboutSection">
      <div className="relative container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="max-w-lg">
              <SectionSupertitle>strony jak się patrzy</SectionSupertitle>
              <SectionTitle>Cześć,</SectionTitle>

              <SectionParagraph>
                Nazywam się Dariusz Stawik i chętnie stworzę dla Ciebie
                nowoczesną i funkcjonalną stronę internetową. Oferuję
                <b> strony bez limitu poprawek</b>, choć wszyscy mi to
                odradzali.
                {' "'}Klienci będą to wykorzystywać, co chwilę zmieniać zdanie,
                przeciągać pracę w nieskończoność.{'" '}
                To, co jest jednak dla mnie najważniejsze, to żebyś był/a
                naprawdę zadowolony/a z efektów naszej pracy!
              </SectionParagraph>
              <SectionParagraph>
                Zanim zająłem się tworzeniem stron, przez ponad 10 lat działałem
                i pracowałem <b> w fundacjach i stowarzyszeniach </b> - głównie
                jako koordynator projektów i specjalista ds. marketingu. Byłem
                też wolontariuszem, m.in. pomagając w nauce dzieciakom ze
                świetlic środowiskowych. Co wynoszę z tamtego czasu?
                Zaangażowanie, cierpliwość, empatię i indywidualne podejście do
                każdego. Do dziś chętnie współpracuję z organizacjami. Od
                kwietnia z każdego zlecenia, które realizuję dla firm,
                przekazuję 150 zł na cele społeczne.
              </SectionParagraph>
              <SectionParagraph>
                W swoich działaniach nie jestem sam -
                <b> współpracuję z grafikami i fotografami.</b> Jeśli
                potrzebujesz na stronę loga lub sesji zdjęciowej, to również
                dobrze trafiłeś/aś.
              </SectionParagraph>

              <div className="mt-8">
                <Button path="#projectFeatured">Sprawdź moje realizacje</Button>
              </div>
            </div>
          </div>
          <div className="relative w-full lg:w-1/2 px-4">
            <Image
              className="rounded-xl object-cover "
              src="/DS56.jpg"
              alt="Dariusz Stawik"
              width={900}
              height={1086}
            />
          </div>
        </div>
      </div>
      <IconAsset />
    </section>
  );
};

export default AboutSection;
