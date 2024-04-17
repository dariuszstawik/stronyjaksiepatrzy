import Button from "@/components/atoms/button";
import HeaderImg from "@/components/atoms/header-img";
import IconAsset from "@/components/atoms/icon-asset";
import HeaderContent from "@/components/molecules/header-content";
import Navbar from "@/components/molecules/navbar";
import Header from "@/components/organisms/header";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

export default function JackOswojonyJak() {
  return (
    <div className="relative overflow-x-hidden">
      <Head>
        <title>Strony jak się patrzy</title>
        <meta
          name="description"
          content="Nowoczesne strony internetowe bez limitu poprawek"
        />
        <meta property="og:title" content="Strony jak się patrzy" />
      </Head>

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
   
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `}
      </Script>
      <section className="w-screen min-h-screen overflow-x-hidden">
        <Navbar isNotHomepage />
        <div className="w-full mt-28 flex flex-col lg:flex-row">
          <div className="lg:w-2/5 min-h-sceen shrink-0">
            <div className="w-full min-h-sceen object-cover shrink-0">
              {" "}
              <img src="yakJack80.jpg" className="rounded-r" />
            </div>
            <div className="my-16 w-full min-h-sceen object-cover shrink-0 hidden lg:block">
              <img src="yak90.jpg" className="rounded " />
            </div>
          </div>

          <div className="w-full px-8 md:px-10 lg:pl-24 lg:pr-28 pt-6">
            <h1 className="mb-6 lg:mb-8 text-4xl lg:text-5xl font-semibold leading-tight">
              Witaj, świecie!{" "}
              <span className="block">
                <span className="text-red-400">Jestem Jack </span>
              </span>
              <span className="block"> - oswojony jak.</span>
              {/* <span className="leading-tight block text-red-400">
                      {"<jak>"} się patrzy
                    </span>{" "}
                    w ofercie, jakich mało */}
            </h1>
            <p className=" mb-10  leading-relaxed">
              Myślałeś/aś, że byk? Blisko - jestem jego kudłatym kuzynem.
            </p>
            <h3 className="text-xl font-semibold mt-8 mb-2">
              Parzystokopytny i strony internetowe?
            </h3>
            <p className=" mb-6  leading-relaxed">
              Jestem tzw. brand hero, czyli maskotką marki. Mówią, że pasuję tu
              charakterem. Z kilku powodów:
            </p>
            <h3 className="text-xl font-semibold mt-8 mb-2">
              1. Jaki są <span className="">pomocne i oddane</span>
            </h3>
            <p className="mb-6  leading-relaxed">
              Dzielimy się ciepłą wełną, karmimy tłustym mlekiem i serem.
              Przenosimy najcięższe pakunki. W Himalajach mówią, że człowieki
              bez jaków by nie przetrwały.
            </p>
            <p className="mb-6 p-6 bg-gray-50 text-gray-600 leading-relaxed rounded ">
              Strony jak się patrzy to współpraca w przyjaznej atmosferze i
              naprawdę indywidualne podejście do klienta. Dodatkowo, często
              współpracujemy z fundacjami i stowarzyszeniami, które lokalnie
              robią wiele dobrego. W przypadku stron dla firm, od kwietnia z
              każdego zlecenia przekazujemy 150 zł na cele społeczne lub
              charytatywne.
            </p>
            <h3 className="text-xl font-semibold mt-8 mb-2">
              2. Jaki angażują się na całego
            </h3>
            <p className=" mb-6  leading-relaxed">
              Bez ociągania nosimy ciężary tam, gdzie nie wjedzie żaden pojazd.
            </p>
            <p className="mb-6 p-6 bg-gray-50 text-gray-600 leading-relaxed rounded ">
              Strony jak się patrzy to zaangażowanie na 100% i poprawki bez
              limitu. Pracujemy, aż będziesz naprawdę zadowolony/a z efektów!
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              3. Jaki są silne i wytrzymałe
            </h3>
            <p className=" mb-6  leading-relaxed">
              Niestraszne nam dzikie zwierzęta, Yeti ani ekstremalne warunki
              (wyobraźcie sobie życie na 6000 metrów!).
            </p>
            <p className="mb-6 p-6 bg-gray-50 text-gray-600 leading-relaxed rounded ">
              Strony jak się patrzy wyróżniają się bezpieczeństwem. Twardsze niż
              orzechy w zimie, bardziej odporne na ataki hakerskie niż
              konkurencja na Wordpressie.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-2">
              4. Jaki są… po prostu jak się patrzy!
            </h3>
            <p className="mb-6 p-6 bg-gray-50 text-gray-600 leading-relaxed rounded ">
              A nasze strony: nowoczesne, estetyczne, funkcjonalne, szybkie i
              bezpieczne.
            </p>
            <p className=" mb-6 leading-relaxed rounded ">
              Potrzebujesz strony internetowej? Jack i spółka pomogą Ci wspiąć
              się na najwyższe szczyty cyfrowego świata!
            </p>
            <h3 className="text-xl font-semibold mt-8 mb-2">
              P.S. Masz pytania?{" "}
              <Link href="//#contactSection" className="text-red-400">
                Nie gryź się, tylko napisz!
              </Link>
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}
