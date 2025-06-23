import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/layouts/navbar";
import Footer from "@/layouts/footer";
import WhatsAppChat from "@/components/whatsapp-chat";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Savoria | Fine Dining Restaurant",
  description: "Experience exquisite cuisine in an elegant atmosphere",
  openGraph: {
    title: "Savoria | Fine Dining Restaurant",
    description: "Experience exquisite cuisine in an elegant atmosphere",
    url: "https://savoria-swart.vercel.app",
    siteName: "Savoria",
    images: [
      {
        url: "https://res.cloudinary.com/dhlyei79o/image/upload/v1750695743/OpenGraphImage_zaf8ol.png",
        width: 1200,
        height: 630,
        alt: "Savoria Fine Dining Restaurant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Savoria | Fine Dining Restaurant",
    description: "Experience exquisite cuisine in an elegant atmosphere",
    images: [
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1750695743/OpenGraphImage_zaf8ol.png",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppChat />
        </ThemeProvider>
      </body>
    </html>
  );
}
