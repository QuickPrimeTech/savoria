import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/data";
import { Section, SubTitle, Header, Title } from "@/components/typography";

export default function TestimonialsSection() {
  return (
    <Section className="bg-secondary/30">
      <Header>
        <Title>What our Guests Say</Title>
        <SubTitle>Hear from those who have experienced Savoria</SubTitle>
      </Header>
      <Carousel>
        <CarouselContent>
          {testimonials.map((testimonial, key) => (
            <CarouselItem
              className="basis-full md:basis-1/2 lg:basis-1/3"
              key={key}
            >
              <Card key={testimonial.id} className="h-full flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={`Avatar of ${testimonial.name}`}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-primary/40 text-black">
                      {testimonial.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="text-muted-foreground mt-2 flex-grow">
                  “{testimonial.content}”
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Section>
  );
}
