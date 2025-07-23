import Image from "next/image";
import CTAButton from "@/components/cta-button";
import { Section } from "@/components/typography";

export default function HeroSection() {
  return (
    <Section className="relative h-screen flex items-center justify-center section">
      <div className="absolute inset-0 z-0 h-full">
        <Image
          src="https://res.cloudinary.com/quick-prime-tech/image/upload/v1749798831/618cdc3015e9f95c513a552e_ozyi0d.jpg"
          alt="Restaurant hero image"
          fill
          className="object-cover brightness-50 h-full"
          priority
        />
      </div>
      <div className="container-custom relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Exquisite Dining Experience
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90">
          Savor the artistry of fine cuisine in an elegant atmosphere
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="/reserve" size="lg">
            Reserve a Table
          </CTAButton>
          <CTAButton href="/menu" variant="outline" size="lg">
            Explore Our Menu
          </CTAButton>
        </div>
      </div>
    </Section>
  );
}
