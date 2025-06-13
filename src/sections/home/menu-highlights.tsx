import CTAButton from "@/components/cta-button";
import { menuItems } from "@/lib/data";
import { Section, Title, SubTitle, Header } from "@/components/typography";
import {
  MenuCard,
  MenuCardImage,
  MenuCardHeaderContent,
  MenuCardContent,
} from "@/components/menu-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export default function MenuHighlightsSection() {
  return (
    <Section className="section-padding bg-secondary/30">
      <Header>
        <Title>Menu Highlights</Title>
        <SubTitle>
          Discover our chef's signature creations, crafted with the finest
          seasonal ingredients
        </SubTitle>
      </Header>
      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent className="-ml-4">
          {menuItems.slice(0, 3).map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <MenuCard>
                <MenuCardImage
                  src={item.image}
                  alt={item.name}
                  badge={
                    item.tags.includes("Chef's Special")
                      ? "Chef's Special"
                      : undefined
                  }
                />
                <MenuCardHeaderContent title={item.name} price={item.price} />
                <MenuCardContent
                  description={item.description}
                  tags={item.tags}
                />
              </MenuCard>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="text-center mt-8">
        <CTAButton href="/menu">View Full Menu</CTAButton>
      </div>
    </Section>
  );
}
