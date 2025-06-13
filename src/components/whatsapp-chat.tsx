"use client";

import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/constants";

export default function WhatsAppChat() {
  const openWhatsApp = () => {
    const phoneNumber = contactInfo.whatsapp.replace(/\D/g, "");
    const message = encodeURIComponent(
      "Hello, I'd like to make a reservation."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <Button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 rounded-full h-14 w-14 p-0 shadow-lg bg-green-500 hover:bg-green-600"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare className="h-6 w-6" />
    </Button>
  );
}
