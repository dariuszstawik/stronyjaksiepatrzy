import PricingcardPremium from "@/components/molecules/pricing-card-premium";
import PricingcardStandard from "@/components/molecules/pricing-card-standard";
import PricingcardStart from "@/components/molecules/pricing-card-start";
import SectionHeader from "@/components/molecules/section-header";
import React from "react";

const PricingSection = () => {
  return (
    // <section className="py-20 bg-gray-50" id="pricingSection">
    //   <div className="container px-4 mx-auto">
    //     <div className="flex flex-wrap items-center -mx-3">
    //       <div className="w-full lg:w-1/3 px-3 mb-10 lg:mb-0">
    //         <SectionHeader
    //           superTitle="strony jak się patrzy"
    //           title="Ceny aktualne do 23 lipca"
    //         ></SectionHeader>
    //         <p className="text-xl text-gray-500">
    //           Wycena obejmuje podstawową funkcjonalność strony. W przypadku
    //           większej liczby podstron oraz dodatkowych funkcjonalności (np.
    //           różne wersje językowe, formularze, niestandardowe animacje) wycena
    //           indywidualna. Ceny netto.
    //         </p>
    //       </div>

    //       <PricingcardStandard />
    //       <PricingcardPremium />
    //     </div>
    //   </div>
    // </section>

    <section className="relative pt-20 pb-36" id="pricingSection">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mb-28 mx-auto text-center">
          <SectionHeader
            superTitle="strony jak się patrzy"
            title="Podstawowy cennik"
            isCentered
          />
          <p className="max-w-lg mx-auto text-xl text-gray-500">
            Wycena obejmuje podstawową funkcjonalność strony. W przypadku
            większej liczby podstron oraz dodatkowych funkcjonalności (np. różne
            wersje językowe, formularze, niestandardowe animacje) wycena
            indywidualna. Nie jestem VATowcem, więc cena netto = cena brutto.
          </p>
        </div>
        <div className="flex flex-wrap -mx-3 -mb-10 lg:-mb-16">
          <PricingcardStart />
          <PricingcardStandard />
          <PricingcardPremium />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
