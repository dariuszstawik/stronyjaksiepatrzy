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
import Image from "next/image";

export default function Home() {
  return (
    <div className= "relative">
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
