import { Card, CardContent } from "@/components/ui/card";
import { Section, Title, SubTitle, Header } from "@/components/typography";
import { Utensils, Handshake, Sparkles } from "lucide-react"; // pick icons that match meaning

const features = [
  {
    title: "Exceptional Cuisine",
    description:
      "Our menu features carefully crafted dishes using the finest seasonal ingredients, prepared with precision and creativity.",
    icon: Utensils,
  },
  {
    title: "Impeccable Service",
    description:
      "Our attentive staff is dedicated to providing a seamless dining experience, anticipating your needs with warmth and professionalism.",
    icon: Handshake,
  },
  {
    title: "Elegant Ambiance",
    description:
      "Our thoughtfully designed space creates the perfect atmosphere for memorable dining experiences, whether intimate or celebratory.",
    icon: Sparkles,
  },
];

export default function WhyChooseUsSection() {
  return (
    <Section className="section-padding">
      <Header>
        <Title>Why Choose Savoria?</Title>
        <SubTitle>What sets Savoria apart from the rest</SubTitle>
      </Header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card className="text-center" key={index}>
            <CardContent className="p-6 flex flex-col items-center">
              <div className="bg-secondary/50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
