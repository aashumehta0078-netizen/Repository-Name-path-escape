import { Instagram, Facebook, MessageCircle, MapPin } from "lucide-react";
import { SITE, waLink } from "@/config/site";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const POPULAR_SERVICES = [
  "Bridal Makeup",
  "Facial & Cleanup",
  "Hair Spa & Styling",
  "Waxing & Threading",
  "Manicure & Pedicure",
  "Nail Art",
];

export const Footer = () => (
  <footer className="bg-charcoal pb-24 pt-14 text-white/80 md:pb-14">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-xl font-semibold text-white">{SITE.name}</p>
          <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-rosegold" />
            {SITE.area}, {SITE.city}, {SITE.state}, {SITE.country}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            A ladies beauty parlour in Zundal, Ahmedabad — professional beauty and
            personal care services in a comfortable, welcoming space.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rosegold-soft">Quick Links</p>
          <ul className="mt-4 space-y-2.5">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-testid={`footer-link-${link.label.toLowerCase()}`}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rosegold-soft">Popular Services</p>
          <ul className="mt-4 space-y-2.5">
            {POPULAR_SERVICES.map((s) => (
              <li key={s}>
                <a href="#services" className="text-sm text-white/70 transition-colors hover:text-white">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rosegold-soft">Connect With Us</p>
          <div className="mt-4 flex gap-3">
            <a
              href={SITE.instagramUrl}
              aria-label="Mansi Beauty Care on Instagram (link coming soon)"
              data-testid="footer-social-instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-rosegold hover:text-rosegold-soft"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={SITE.facebookUrl}
              aria-label="Mansi Beauty Care on Facebook (link coming soon)"
              data-testid="footer-social-facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-rosegold hover:text-rosegold-soft"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Mansi Beauty Care on WhatsApp"
              data-testid="footer-social-whatsapp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-[#25D366] hover:text-[#25D366]"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/50">
            Call or WhatsApp:{" "}
            <a href={`tel:${SITE.phoneDial}`} className="font-semibold text-white/80 transition-colors hover:text-white">
              {SITE.phoneDisplay}
            </a>
          </p>
          <p className="mt-2 text-xs leading-relaxed text-white/50">
            Exact shop address, timings and social profiles will be updated here once
            shared by the salon.
          </p>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
        © 2026 Mansi Beauty Care. All rights reserved.
      </div>
    </div>
  </footer>
);
