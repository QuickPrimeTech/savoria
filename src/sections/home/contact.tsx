import { Section, Header, Title, SubTitle } from "@/components/typography";
import Image from "next/image";
import CTAButton from "@/components/cta-button";
import { contactInfo } from "@/lib/constants";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function ContactSection() {
  return (
    <Section aria-labelledby="contact-section">
      <Header>
        <Title id="contact-section">Contact Us</Title>
        <SubTitle>
          Have questions or want to make a reservation? Reach out to us! Our
          team is here to assist you with any inquiries.
        </SubTitle>
      </Header>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-secondary/30 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <div className="space-y-4">
            <div>
              <p className="font-medium">Address:</p>
              <p className="text-muted-foreground">{contactInfo.address}</p>
            </div>
            <div>
              <p className="font-medium">Phone:</p>
              <p>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-primary hover:underline"
                >
                  {contactInfo.phone}
                </a>
              </p>
            </div>
            <div>
              <p className="font-medium">Email:</p>
              <p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-primary hover:underline"
                >
                  {contactInfo.email}
                </a>
              </p>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="font-medium mb-2">Follow Us:</h4>
            <div className="flex gap-4">
              <a
                href={contactInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href={contactInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href={contactInfo.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="relative h-64 md:h-full w-full rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Restaurant location"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4">
              <CTAButton
                href={contactInfo.googleMapsUrl}
                size="sm"
                className="shadow-md"
              >
                View on Google Maps
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
