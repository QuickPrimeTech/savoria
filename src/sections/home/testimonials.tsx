import {
  TestimonialCard,
  TestimonialHeader,
  TestimonialContent,
} from "@/components/testimonial-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
              <TestimonialCard key={testimonial.id}>
                <TestimonialHeader
                  name={testimonial.name}
                  role={testimonial.role}
                  avatar={testimonial.avatar}
                />
                <TestimonialContent>{testimonial.content}</TestimonialContent>
              </TestimonialCard>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Section>
  );
}
