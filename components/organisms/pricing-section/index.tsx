import PricingcardPremium from "@/components/molecules/pricing-card-premium";
import PricingcardStandard from "@/components/molecules/pricing-card-standard";
import SectionHeader from "@/components/molecules/section-header";
import React from "react";

const PricingSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="pricingSection">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-3">
          <div className="w-full lg:w-1/3 px-3 mb-10 lg:mb-0">
            <SectionHeader
              superTitle="strony jak się patrzy"
              title="Ceny aktualne do 15 lipca"
            ></SectionHeader>
            <p className="text-xl text-gray-500">
              Wycena obejmuje podstawową funkcjonalność strony. W przypadku
              większej liczby podstron oraz dodatkowych funkcjonalności (np.
              różne wersje językowe, formularze, niestandardowe animacje) wycena
              indywidualna. Ceny netto.
            </p>
          </div>

          <PricingcardStandard />
          <PricingcardPremium />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
