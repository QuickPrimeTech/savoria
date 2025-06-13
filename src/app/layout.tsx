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
