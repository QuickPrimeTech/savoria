import {
  AboutCard,
  AboutCardHeader,
  AboutCardImage,
  AboutCardCTA,
  AboutCardContent,
  AboutCardTitle,
  AboutCardDescription,
} from "@/components/about-card";
import { Section, Header, Title, SubTitle } from "@/components/typography";

const aboutCardsData = [
  {
    title: "Our Story",
    description:
      "Founded with a passion for exceptional cuisine, Savoria brings together traditional techniques and innovative flavors. Our culinary team is dedicated to creating memorable dining experiences through thoughtfully crafted dishes using the finest seasonal ingredients.",
    image: {
      src: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1749797585/Restaurant-Manager-1080x6752_szs1aa.jpg",
      alt: "Restaurant interior",
    },
    cta: {
      label: "Learn More",
      href: "/about",
    },
  },
  {
    title: "Host an Event",
    description:
      "From intimate gatherings to grand celebrations, our private dining spaces provide the perfect backdrop for your special occasions. Our events team will work with you to create a customized experience that exceeds your expectations.",
    image: {
      src: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1749797659/private-dining-1920_dmzble.webp",
      alt: "Private event space",
    },
    cta: {
      label: "Plan Your Event",
      href: "/private-events",
    },
  },
  {
    title: "Dining Experience",
    description:
      "Every visit to Savoria is an opportunity to indulge in culinary excellence. Our attentive service, elegant ambiance, and exceptional cuisine combine to create an unforgettable dining experience that engages all the senses.",
    image: {
      src: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1749798320/114f3948_sazyjm.jpg",
      alt: "Dining experience",
    },
    cta: {
      label: "Reserve Table",
      href: "/reserve",
    },
  },
];

export default function AboutCardsSection() {
  return (
    <Section aria-labelledby="about-header">
      <Header>
        <Title id="about-header">About Savoria</Title>
        <SubTitle>
          Discover the essence of our restaurant and what makes us unique
        </SubTitle>
      </Header>
      {aboutCardsData.map((card, index) => (
        <AboutCard key={index} reverse={index % 2 === 1}>
          <AboutCardImage src={card.image.src} alt={card.image.alt} />
          <AboutCardContent>
            <AboutCardHeader>
              <AboutCardTitle>{card.title}</AboutCardTitle>
              <AboutCardDescription>{card.description}</AboutCardDescription>
            </AboutCardHeader>
            <AboutCardCTA href={card.cta.href}>{card.cta.label}</AboutCardCTA>
          </AboutCardContent>
        </AboutCard>
      ))}
    </Section>
  );
}
