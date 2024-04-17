import SectionHeader from "@/components/molecules/section-header";
import React from "react";

const FeaturesSection = () => {
  return (
    <section className="relative py-20" id="featuresSection">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mb-28 mx-auto text-center">
          <SectionHeader
            superTitle="strony jak się patrzy"
            title="Dlaczego ja?"
            isCentered
          />
          <p className="max-w-lg mx-auto text-xl text-gray-500">
            Firm i osób projektujących strony internetowe jest wiele. Zobacz, co
            wyróżnia moją ofertę
          </p>
        </div>
        <div className="flex flex-wrap -mx-3 -mb-10 lg:-mb-16">
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-10 lg:mb-16">
            <div className="relative pt-16 pb-12 px-8 bg-gray-50 rounded-lg text-center hover:bg-white hover:shadow-2xl">
              <span className="absolute top-0 inset-x-0 -mt-6 flex justify-center items-center w-16 h-16 mx-auto rounded-full bg-blue-400 text-white">
                1
              </span>
              <h3 className="mb-6 text-2xl font-semibold font-heading">
                rozsądne ceny
              </h3>
              <p className="text-gray-500">
                Korzystniej zlecić freelancerowi niż agencji marketingowej.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-10 lg:mb-16">
            <div className="relative pt-16 pb-12 px-8 bg-gray-50 rounded-lg text-center hover:bg-white hover:shadow-2xl">
              <span className="absolute top-0 inset-x-0 -mt-6 flex justify-center items-center w-16 h-16 mx-auto rounded-full bg-teal-500 text-white">
                2
              </span>
              <h3 className="mb-6 text-2xl font-semibold font-heading">
                wydajność i bezpieczeństwo
              </h3>
              <p className="text-gray-500">
                Tworzę strony w oparciu o technologie Next.js i headless CMS -
                działają szybciej i są bezpieczniejsze od stron zbudowanych na
                Wordpressie.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-10 lg:mb-16">
            <div className="relative pt-16 pb-12 px-8 bg-gray-50 rounded-lg text-center hover:bg-white hover:shadow-2xl">
              <span className="absolute top-0 inset-x-0 -mt-6 flex justify-center items-center w-16 h-16 mx-auto rounded-full bg-red-500 text-white">
                3
              </span>
              <h3 className="mb-6 text-2xl font-semibold font-heading">
                poprawki bez limitu
              </h3>
              <p className="text-gray-500">
                Zależy mi, żeby każdy klient był zadowolony z efektów
                współpracy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
