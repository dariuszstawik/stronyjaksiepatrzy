import React from "react";

const AboutSection = () => {
  return (
    <section className="relative py-20">
      <div className="relative container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="max-w-lg">
              <span className="text-xs text-blue-400 font-semibold">
                strony jak się patrzy
              </span>
              <h2 className="mt-8 mb-6 lg:mb-10 lg:pr-8 text-4xl font-semibold">
                O mnie
              </h2>
              <p className="mb-6 lg:mb-12 text-gray-500 text-lg">
                {/* Przez ponad 10 lat pracowałem jako specjalista ds. marketingu i
                promocji oraz koordynator projektów - w organizacjach
                pozarządowych, jednostkach samorządu oraz firmach prywatnych. W
                tym roku rozpocząłem swoją przygodę jako programista. W związku
                z tym, że znajduję się na początku nowej drogi, do 15 lipca
                oferuję okazyjne ceny. Obawiasz się słabych efektów? Sprawdź
                moje realizacje - dbałość o szczegóły i zadowolenie klientów są
                dla mnie priorytetem!&nbsp; */}
                Programista frontend, webmaster, specjalista ds. marketingu.
                Jako programista zbieram pierwsze doświadczenia, w marketingu
                (głównie w organizacjach pozarządowych) spędziłem ponad 10 lat.
                Ponieważ buduję portfolio programistyczne, do 15 lipca oferuję
                strony i aplikacje w okazyjnych cenach. Chcesz zobaczyć, jakich
                efektów możesz się spodziewać - sprawdź moje realizacje.
              </p>
              <a
                className="inline-block py-4 px-8 text-sm text-white font-medium leading-normal bg-red-400 hover:bg-red-300 transition duration-200 rounded"
                href="#"
              >
                Try demo
              </a>
            </div>
          </div>
          <div className="relative w-full lg:w-1/2 px-4">
            <img
              className="rounded-xl object-cover lg:h-128"
              src="https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
      <img
        className="hidden xl:block absolute top-0 right-0 mt-52"
        src="yellow-dot-right-shield.svg"
        alt=""
      />
    </section>
  );
};

export default AboutSection;
