import Image from "next/image";
import CTAButton from "@/components/cta-button";
import { contactInfo } from "@/lib/constants";
import { Section, Header, Title, SubTitle } from "@/components/typography";
import { Instagram } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
const instagramPosts = [
  {
    id: 1,
    url: "https://res.cloudinary.com/dhlyei79o/image/upload/v1749805965/z_Nearly-raw-borscht2-square_lx9xff.jpg",
    name: "Borscht",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/dhlyei79o/image/upload/v1749806052/1732138234686_agwc7i.webp",
    name: "Pelmeni",
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/dhlyei79o/image/upload/v1749806177/beef-stroganoff-193133-1_ijmdkm.jpg",
    name: "Beef Stroganoff",
  },
  {
    id: 4,
    url: "https://res.cloudinary.com/dhlyei79o/image/upload/v1749806337/blini-with-cream-cheese-and-smoked-salmon-515810_vaetha.jpg",
    name: "Blini",
  },
  {
    id: 5,
    url: "https://res.cloudinary.com/dhlyei79o/image/upload/v1749806417/olivier-salad-ensalada-rusa-featured_hsek8w.jpg",
    name: "Olivier Salad",
  },
  {
    id: 6,
    url: "https://res.cloudinary.com/dhlyei79o/image/upload/v1749806475/chicken-shashlik-dry-recipe-card_hmatjy.jpg",
    name: "Shashlik",
  },
];

export default function InstagramSection() {
  return (
    <Section
      className="section-padding bg-secondary/30"
      aria-labelledby="instagram-section"
    >
      <Header>
        <Title id="instagram-section">Follow Us on Instagram</Title>
        <SubTitle>
          Stay updated with our latest creations and events. Follow us for
          behind-the-scenes content, special promotions, and more!
        </SubTitle>
      </Header>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {instagramPosts.map((post, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3"
            >
              <div className="relative aspect-16/9 overflow-hidden rounded-lg">
                <Image
                  src={post.url}
                  alt={`${post.name} Instagram post ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="text-center mt-8">
        <CTAButton href={contactInfo.socialMedia.instagram} className="gap-2">
          <Instagram className="w-5 h-5" />
          Follow Us
        </CTAButton>
      </div>
    </Section>
  );
}
