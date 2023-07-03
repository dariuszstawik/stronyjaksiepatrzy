import Button from "@/components/atoms/button";
import React from "react";

const HeaderContent = () => {
  return (
    <div className="relative container px-4 mx-auto pb-20 mt-28">
      <div className="w-full lg:w-3/5 lg:pl-16 ml-auto">
        <div className="mt-10 lg:mt-20 max-w-2xl lg:pr-10">
          <div className="max-w-xl">
            <h2 className="mb-6 lg:mb-12 text-4xl lg:text-5xl font-semibold">
              Strony{" "}
              <span
                className="leading-tight block text-red-400"
              >
                jak się patrzy
              </span>{" "}
              w cenach, jakich mało
            </h2>
            <p
              className="max-w-md mb-6 lg:mb-14 text-gray-500 leading-relaxed"
            >
              Potrzebujesz strony internetowej lub prostej aplikacji? Koniecznie
              zapoznaj się z moją ofertą!
            </p>
          </div>
        </div>
        <div className="flex flex-wrap mb-16 lg:mb-20">

          <Button path="#offerSection">Sprawdź ofertę</Button>
         
          <Button version="white" path="#contactSection">Wyślij wiadomość</Button>
         
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
