import { Sparkle } from "lucide-react";

const ITEMS = [
  "Bridal Makeup",
  "Hair Spa",
  "Luxury Facials",
  "Nail Art",
  "Party Makeup",
  "Threading & Waxing",
  "Manicure & Pedicure",
  "Skin Care",
];

export const Marquee = () => (
  <div
    aria-hidden="true"
    className="overflow-hidden border-y border-[#EBE3D8] bg-ivory py-5 md:py-6"
  >
    <div className="flex w-max animate-marquee items-center gap-10">
      {[...ITEMS, ...ITEMS].map((item, i) => (
        <span key={i} className="flex items-center gap-10">
          <span
            className={`whitespace-nowrap text-xl md:text-2xl ${
              i % 2 === 0
                ? "font-serif text-charcoal/70"
                : "font-accent italic text-rosegold-deep"
            }`}
          >
            {item}
          </span>
          <Sparkle className="h-4 w-4 shrink-0 fill-gold/40 text-gold" />
        </span>
      ))}
    </div>
  </div>
);
