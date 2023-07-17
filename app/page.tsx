import AboutSection from "@/components/organisms/about-section";
import ContactSection from "@/components/organisms/contact-section";
import FeaturesSection from "@/components/organisms/features-section";
import Footer from "@/components/organisms/footer";
import Header from "@/components/organisms/header";
import OfferSection from "@/components/organisms/offer-section";
import PricingSection from "@/components/organisms/pricing-section";
import ProjectFeatured from "@/components/organisms/project-Featured";
import ProjectSection from "@/components/organisms/project-section";
import ProjectSectionSecond from "@/components/organisms/project-section-second";
import Head from "next/head";
import { DataLayerObject } from "./types";
import Script from "next/script";

declare global {
  interface Window {
    dataLayer: DataLayerObject[];
  }
}

export default function Home() {
  return (
    <div className="relative">
      <Head>
        <title>Strony jak się patrzy</title>
        <meta
          name="description"
          content="Strony www jak się patrzy w cenach, jakich mało."
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
      <Header />
      <AboutSection />
      <OfferSection />
      <FeaturesSection />
      <ProjectFeatured />
      <ProjectSection />
      <ProjectSectionSecond />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
