"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 section-x",
        scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container-custom flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-2">
          <Logo
            size={32}
            color="#F59E0B"
            className="text-white rounded-full w-12 h-12"
          />
          <span className="font-bold text-lg md:text-xl text-primary">
            Savoria
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href
                  ? "text-primary"
                  : pathname === "/" && !scrolled
                  ? "text-white"
                  : "text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild>
            <Link href="/reserve">Reserve Table</Link>
          </Button>
        </nav>

        {/* Mobile Menu Sheet */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  pathname === "/" && !scrolled
                    ? "text-white"
                    : "text-foreground"
                )}
              >
                <Menu className="size-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-3/4 md:w-1/2 section-x">
              <SheetHeader>
                <SheetTitle className="sr-only">Menu Sidebar</SheetTitle>
                <Link href="/" className="flex items-center gap-2">
                  <Logo size={28} color="#F59E0B" className="rounded-full" />
                  <span className="font-semibold text-lg text-primary">
                    Savoria
                  </span>
                </Link>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-base font-medium transition-colors hover:text-primary",
                      pathname === link.href
                        ? "text-primary"
                        : "text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="mt-4 w-full">
                  <Link href="/reserve">Reserve Table</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
