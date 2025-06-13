"use client";

import React from "react";
import { Section, Header, Title, SubTitle } from "@/components/typography";
import CTAButton from "@/components/cta-button";
import { contactInfo } from "@/lib/constants";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import Link from "next/link";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

export default function ContactSection() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  const onLoad = React.useCallback((map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(() => {
    setMap(null);
  }, []);

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
              <Link
                href={contactInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </Link>
              <Link
                href={contactInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </Link>
              <Link
                href={contactInfo.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Map Container */}
        <div className="relative h-64 md:h-full w-full rounded-lg overflow-hidden">
          {isLoaded && (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
              onLoad={onLoad}
              onUnmount={onUnmount}
            >
              {/* Optional children */}
            </GoogleMap>
          )}
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
    </Section>
  );
}
