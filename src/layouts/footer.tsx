import Link from "next/link";
import { navLinks, contactInfo, openingHours } from "@/lib/constants";
import { Logo } from "@/components/logo";

export default function Footer() {
  return (
    <footer className="section-y section-x">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="size-12 rounded-full" />
              <span className="font-bold text-xl">Savoria</span>
            </Link>
            <p className="text-muted-foreground">
              Experience exquisite cuisine in an elegant atmosphere at our fine
              dining restaurant.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Opening Hours</h4>
            <ul className="space-y-2">
              {openingHours.map((day) => (
                <li key={day.day} className="flex justify-between">
                  <span className="text-foreground/80">{day.day}</span>
                  <span className="font-medium">{day.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-primary font-medium">Address:</span>
                <span className="text-foreground/80">
                  {contactInfo.address}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary font-medium">Phone:</span>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary font-medium">Email:</span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Savoria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
