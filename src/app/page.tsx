import HeroSection from "@/sections/home/hero";
import MenuHighlightsSection from "@/sections/home/menu-highlights";
import AboutCardsSection from "@/sections/home/about";
import TestimonialsSection from "@/sections/home/testimonials";
import CTAHomeSection from "@/sections/home/cta";
import WhyChooseUsSection from "@/sections/home/why-choose-us";
import FAQSection from "@/sections/home/faq";
import ContactSection from "@/sections/home/contact";
import InstagramSection from "@/sections/home/instagram";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MenuHighlightsSection />

      <AboutCardsSection />

      <TestimonialsSection />

      <CTAHomeSection />

      <WhyChooseUsSection />

      <FAQSection />

      <ContactSection />

      <InstagramSection />
    </>
  );
}
