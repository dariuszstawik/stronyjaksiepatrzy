"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "@/components/molecules/testtimonial-card";
import SectionHeader from "@/components/molecules/section-header";
import Image from "next/image";

export default function TestimonialCarousel() {
  const settingsLg = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: (
      <img
        width="60"
        height="60"
        src="https://img.icons8.com/ios-glyphs/60/chevron-left.png"
        alt="chevron-left"
      />
    ),
    nextArrow: (
      <img
        width="60"
        height="60"
        src="https://img.icons8.com/ios-glyphs/60/chevron-right.png"
        alt="chevron-right"
      />
    ),
  };

  const settingsSm = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: (
      <img
        width="60"
        height="60"
        src="https://img.icons8.com/ios-glyphs/60/chevron-left.png"
        alt="chevron-left"
      />
    ),
    nextArrow: (
      <img
        width="60"
        height="60"
        src="https://img.icons8.com/ios-glyphs/60/chevron-right.png"
        alt="chevron-right"
      />
    ),
  };

  return (
    <section className="relative bg-white pt-28 pb-10 px-0 " id="testimonials">
      <Image
        className="hidden md:block absolute top-0 left-0 mt-24"
        src="blue-dot-left-bars.svg"
        alt="ikona"
        width={236}
        height={102}
      />
      <div className="relative container px-4 mx-auto text-center">
        <div className="max-w-2xl mx-auto">
          <SectionHeader
            superTitle="strony jak się patrzy"
            title="Opinie"
            isCentered
          />
          <p className="mb-12 text-xl text-gray-500">
            Skąd pewność, że możesz nam zaufać? Przeczytaj opinie zadowolonych
            klientów i współpracowników.
          </p>
        </div>
      </div>
      <div className="hidden lg:block w-[80%] mx-auto">
        <Slider {...settingsLg}>
          <TestimonialCard
            name="Aleksandra Grzybkowska"
            title="graficzka, przedsiębiorczyni, wielokrotna medalistka Mistrzostw Polski w Jeździectwie"
          >
            Zanim poznałam Darka, zleciłam stworzenie swojej strony{" "}
            <a
              href="https://smart-equestrian.pl"
              className="text-blue-600"
              target="_blank"
            >
              www.smart-equestrian.pl
            </a>{" "}
            agencji marketingowej. Strona była bardzo słaba, zrobiona z szablonu
            pomimo zapewnień, że była tworzona od zera. Na koniec firma odmówiła
            wprowadzenia poprawek - pomimo informacji o moim urlopie, bo rzekomo
            zgłosiłam je za późno. Kiedy przekazałam projekt tej stronki do
            Darka - byłam w szoku, że można robić strony aż tak bardzo 1:1.
            Jestem bardzo zadowolona z przebiegu tego zlecenia. Darek jest
            przesympatyczny, wyrozumiały i dokładny w tym co robi. Wyrazem
            mojego zaufania i aptrobaty jest rychły koniec prac nad kolejnym
            projektem dla firmy Goliat sp. z o.o.! Darek przejął ten projekt po
            innej osobie, która porzuciła go ze względu na jego skomplikowanie
            graficzne. Słowem podsumowania - Darek realizuje projekty dokładnie
            tak jak tego oczekujesz (oraz doradza jeżeli jego zdaniem coś
            mogłoby wyglądać lepiej). Jest kulturalny, sympatyczny i zdolny.
            Polecam całym sercem i rozumem!
          </TestimonialCard>
          <TestimonialCard
            name="Wojciech Ciesielkiewicz"
            title="Prezes Fundacji Kopalnia Inicjatyw"
          >
            Nasza{" "}
            <a
              href="https://kopalniainicjatyw.eu"
              className="text-blue-600"
              target="_blank"
            >
              Fundacja Kopalnia Inicjatyw
            </a>{" "}
            działa już od wielu lat. Strona internetowa była w naszych planach
            już dawno. W końcu nadszedł moment na jej założenie. Zdecydowaliśmy
            się na Strony jak się patrzy i Pana Dariusza. Wszystko zostało
            sprawnie ustalone i bardzo przystępnie wytłumaczone. Zostaliśmy
            kompleksowo zaopiekowani od grafiki po aspekty techniczne. Strona
            wygląda przejrzyście i nowocześnie. Super kontakt i wsparcie
            pierwszorzędne ze strony Pana Dariusza.
          </TestimonialCard>
        </Slider>
      </div>

      <div className="lg:hidden">
        <Slider {...settingsSm}>
          <TestimonialCard
            name="Aleksandra Grzybkowska"
            title="graficzka, przedsiębiorczyni, wielokrotna medalistka Mistrzostw Polski w Jeździectwie"
          >
            Zanim poznałam Darka, zleciłam stworzenie swojej strony{" "}
            <a
              href="https://smart-equestrian.pl"
              className="text-blue-600"
              target="_blank"
            >
              www.smart-equestrian.pl
            </a>{" "}
            agencji marketingowej. Strona była bardzo słaba, zrobiona z szablonu
            pomimo zapewnień, że była tworzona od zera. Na koniec firma odmówiła
            wprowadzenia poprawek - pomimo informacji o moim urlopie, bo rzekomo
            zgłosiłam je za późno. Kiedy przekazałam projekt tej stronki do
            Darka - byłam w szoku, że można robić strony aż tak bardzo 1:1.
            Jestem bardzo zadowolona z przebiegu tego zlecenia. Darek jest
            przesympatyczny, wyrozumiały i dokładny w tym co robi. Wyrazem
            mojego zaufania i aptrobaty jest rychły koniec prac nad kolejnym
            projektem dla firmy Goliat sp. z o.o.! Darek przejął ten projekt po
            innej osobie, która porzuciła go ze względu na jego skomplikowanie
            graficzne. Słowem podsumowania - Darek realizuje projekty dokładnie
            tak jak tego oczekujesz (oraz doradza jeżeli jego zdaniem coś
            mogłoby wyglądać lepiej). Jest kulturalny, sympatyczny i zdolny.
            Polecam całym sercem i rozumem!
          </TestimonialCard>
          <TestimonialCard
            name="Wojciech Ciesielkiewicz"
            title="Prezes Fundacji Kopalnia Inicjatyw"
          >
            Nasza{" "}
            <a
              href="https://kopalniainicjatyw.eu"
              className="text-blue-600"
              target="_blank"
            >
              Fundacja Kopalnia Inicjatyw
            </a>{" "}
            działa już od wielu lat. Strona internetowa była w naszych planach
            już dawno. W końcu nadszedł moment na jej założenie. Zdecydowaliśmy
            się na Strony jak się patrzy i Pana Dariusza. Wszystko zostało
            sprawnie ustalone i bardzo przystępnie wytłumaczone. Zostaliśmy
            kompleksowo zaopiekowani od grafiki po aspekty techniczne. Strona
            wygląda przejrzyście i nowocześnie. Super kontakt i wsparcie
            pierwszorzędne ze strony Pana Dariusza.
          </TestimonialCard>
        </Slider>
      </div>
    </section>
  );
}
