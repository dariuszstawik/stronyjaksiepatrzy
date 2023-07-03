import ListItem from "@/components/atoms/list-item";
import SectionParagraph from "@/components/atoms/section-paragraph";
import ItemsList from "@/components/molecules/items-list";
import SectionHeader from "@/components/molecules/section-header";
import React from "react";

const OfferSection = () => {
  return (
    <section className="relative py-20" id="offerSection">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-start -mx-4">
          <div className="relative w-full md:w-1/2 px-4 mb-12 md:mb-0">
            <img
              className="hidden lg:block absolute bottom-0 left-0 -mb-10 -ml-28"
              src="blue-dot-left-bars.svg"
              alt=""
            />
            <img
              className="h-96 lg:h-128 w-full rounded-xl object-cover"
              src="jaksiepatrzy-kwadrat1.jpg"
              alt=""
            />

          </div>
          <div className="relative w-full md:w-1/2 px-4 pb-20 lg:pb-0">
            <div className="lg:ml-auto max-w-md">
              <h2 className="mb-6 lg:mb-10 text-4xl font-semibold font-heading" />
<SectionHeader superTitle="strony jak się patrzy" title="Oferta"></SectionHeader>
<SectionParagraph>Chętnie wykonam dla Ciebie prostą stronę internetową lub
                aplikację, np.:</SectionParagraph>
                <ul className="my-4">
                  <li><ListItem>stronę firmową,</ListItem></li>
                  <li><ListItem>stronę projektu,</ListItem></li>
                  <li><ListItem>stronę portfolio.</ListItem></li>
                </ul>
                <SectionParagraph>
                Moje projekty są w pełni responsywne oraz posiadają CMS.
                </SectionParagraph>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
