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
            Zanim poznałam Darka, zleciłam stworzenie swojej strony
            www.smart-equestrian.pl agencji marketingowej. Strona była bardzo
            słaba, zrobiona z szablonu pomimo zapewnień, że była tworzona od
            zera. Na koniec firma odmówiła wprowadzenia poprawek - pomimo
            informacji o moim urlopie, bo rzekomo zgłosiłam je za późno. Kiedy
            przekazałam projekt tej stronki do Darka - byłam w szoku, że można
            robić strony aż tak bardzo 1:1. Jestem bardzo zadowolona z przebiegu
            tego zlecenia. Darek jest przesympatyczny, wyrozumiały i dokładny w
            tym co robi. Wyrazem mojego zaufania i aptrobaty jest rychły koniec
            prac nad kolejnym projektem dla firmy Goliat sp. z o.o.! Darek
            przejął ten projekt po innej osobie, która porzuciła go ze względu
            na jego skomplikowanie graficzne. Słowem podsumowania - Darek
            realizuje projekty dokładnie tak jak tego oczekujesz (oraz doradza
            jeżeli jego zdaniem coś mogłoby wyglądać lepiej). Jest kulturalny,
            sympatyczny i zdolny. Polecam całym sercem i rozumem!
          </TestimonialCard>
          <TestimonialCard
            name="Wojciech Ciesielkiewicz"
            title="Prezes Fundacji Kopalnia Inicjatyw"
          >
            Nasza Fundacja Kopalnia Inicjatyw działa już od wielu lat. Strona
            internetowa była w naszych planach już dawno. W końcu nadszedł
            moment na jej założenie. Zdecydowaliśmy się na Strony jak się patrzy
            i Pana Dariusza. Wszystko zostało sprawnie ustalone i bardzo
            przystępnie wytłumaczone. Zostaliśmy kompleksowo zaopiekowani od
            grafiki po aspekty techniczne. Strona wygląda przejrzyście i
            nowocześnie. Super kontakt i wsparcie pierwszorzędne ze strony Pana
            Dariusza.
          </TestimonialCard>
          {/* <TestimonialCard
            name="Dr hab. Jerzy Krzyszkowski"
            title="Prof. Uniwersytetu Jana Długosza w Częstochowie"
          >
            Superwizja jest ważnym narzędziem zarządzania zasobami ludzkimi w
            jednostkach organizacyjnych pomocy społecznej. Może ona istotnie
            ułatwić, pomóc w zmianie stylu kierowania poprzez m.in. zwiększenie
            partycypacji pracowników w zarządzaniu, tworzenie zespołów
            zadaniowych czy uelastycznienie struktur organizacyjnych.
          </TestimonialCard>
          <TestimonialCard
            name="Ewa Błędowska"
            title="Kierowniczka Działu Pomocy Środowiskowej MOPS w Wodzisławiu Śląskim"
          >
            Superwizja to niewątpliwie zwiększanie samoświadomości w pracy
            zawodowej lecz nie tylko – dla mnie to także rozwój samej siebie,
            możliwość przeanalizowania własnych postępowań, działań, zachowań.
            Mówiąc krótko – superwizuj się a otworzysz przed sobą nowe ścieżki.
          </TestimonialCard>
          <TestimonialCard
            name="Dr hab. Izabela Krasiejko"
            title="Prof. Uniwersytetu Jana Długosza w Częstochowie"
          >
            Superwizja pracy socjalno-wychowawczej i terapeutycznej umożliwia
            refleksję nad metodycznym działaniem asystenta z rodziną i poziomem
            współpracy z kooperantami. Służy zarówno podniesieniu jakości
            usługi, jak i profesjonalizacji zawodu asystent rodziny.
            Ogólnopolskie Stowarzyszenie Asystentów Rodziny czyni starania, by
            zapis o obowiązku pracodawcy do zagwarantowania asystentom rodziny i
            koordynatorom zespołu asysty rodzinnej korzystania z superwizji
            znalazł się w ustawie o wspieraniu rodziny i systemie pieczy
            zastępczej.
          </TestimonialCard>
          <TestimonialCard
            name="Paweł Maczyński"
            title="Przewodniczący, Polska Federacja Związkowa Pracowników Socjalnych i Pomocy Społecznej"
          >
            Potrzebujemy wspólnie zadbać, by przywrócić zaufanie do superwizji
            wśród pracowników socjalnych i uczynić superwizję faktycznie
            dostępną dla wszystkich pomagających.
          </TestimonialCard> */}
        </Slider>
      </div>

      <div className="lg:hidden">
        <Slider {...settingsSm}>
          <TestimonialCard name="Beata Kisiel" title="Pracowniczka socjalna">
            Superwizja pracy socjalnej to dla mnie cenne narzędzie. Podczas
            spotkań superwizyjnych mam poczucie wsparcia, zespołowej „burzy
            mózgów” i szukania rozwiązań. Czuję się bezpieczna wiedząc, że nie
            będę oceniana ani krytykowana za dotychczasowe działania podejmowane
            w ramach pracy z rodzinami. Uczestnictwo w tych spotkaniach pozwala
            na zdobycie wiedzy poprzez naukę na konkretnych przykładach. Ważne
            jest to, że z każdego spotkania wychodzę z propozycjami nowych
            rozwiązań, co ułatwia mi dalszą pracę.
          </TestimonialCard>
          <TestimonialCard
            name="Małgorzata Aleksandrowicz"
            title="Dyrektorka Centrum Usług Społecznych w Myślenicach"
          >
            W kalendarzu naszego ośrodka, superwizja dla pracowników socjalnych,
            asystentów rodziny i kadry zarządzającej od lat zajmuje stałe i
            ważne miejsce. Dla mnie to czas refleksji nad omawianą sytuacją,
            czas na ujawnienie własnych uczuć, sformułowanie oczekiwań i impuls
            do zaplanowania dalszych działań, realizacji celów, wdrażania zmian.
            Ta istotna forma wsparcia jest narzędziem doskonalenia naszych
            kompetencji zawodowych, pozyskiwania wiedzy i umiejętności,
            umożliwiającym wymianę doświadczeń oraz budowanie relacji w grupie.
          </TestimonialCard>
          <TestimonialCard
            name="Dr hab. Jerzy Krzyszkowski"
            title="Prof. Uniwersytetu Jana Długosza w Częstochowie"
          >
            Superwizja jest ważnym narzędziem zarządzania zasobami ludzkimi w
            jednostkach organizacyjnych pomocy społecznej. Może ona istotnie
            ułatwić, pomóc w zmianie stylu kierowania poprzez m.in. zwiększenie
            partycypacji pracowników w zarządzaniu, tworzenie zespołów
            zadaniowych czy uelastycznienie struktur organizacyjnych.
          </TestimonialCard>
          <TestimonialCard
            name="Ewa Błędowska"
            title="Kierowniczka Działu Pomocy Środowiskowej MOPS w Wodzisławiu Śląskim"
          >
            Superwizja to niewątpliwie zwiększanie samoświadomości w pracy
            zawodowej lecz nie tylko – dla mnie to także rozwój samej siebie,
            możliwość przeanalizowania własnych postępowań, działań, zachowań.
            Mówiąc krótko – superwizuj się a otworzysz przed sobą nowe ścieżki.
          </TestimonialCard>
        </Slider>
      </div>
    </section>
  );
}
