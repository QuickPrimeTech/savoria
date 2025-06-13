import CTASection from "@/components/cta-section";

export default function CTAHomeSection() {
  return (
    <CTASection
      title="Ready to Experience Savoria?"
      description="Join us for an unforgettable dining experience. Reserve your table today."
      primaryCTA={{ text: "Reserve a Table", href: "/reserve" }}
      secondaryCTA={{ text: "Explore Our Menu", href: "/menu" }}
    />
  );
}
