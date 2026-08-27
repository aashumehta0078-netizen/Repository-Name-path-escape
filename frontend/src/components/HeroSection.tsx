import { BadgeCheck, MessageCircle, CalendarHeart, Sparkles, ShieldCheck, Heart } from "lucide-react";
import { IMAGES, waLink } from "@/config/site";
import { useBooking } from "@/components/BookingContext";
import { Reveal } from "@/components/Reveal";

const TRUST_POINTS = [
  { icon: Heart, label: "Ladies-only comfort" },
  { icon: ShieldCheck, label: "Hygienic & sanitized" },
  { icon: Sparkles, label: "Quality products" },
];

export const HeroSection = () => {
  const { openBooking } = useBooking();

  return (
    <section id="home" className="relative overflow-hidden bg-cream pt-28 md:pt-36 pb-16 md:pb-24 scroll-mt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-rosegold-soft/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-champagne blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <div>
          <Reveal>
            <span
              data-testid="hero-trust-badge"
              className="inline-flex items-center gap-2 rounded-full border border-rosegold/30 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-rosegold-deep"
            >
              <BadgeCheck className="h-4 w-4" />
              Trusted Beauty Care in Zundal
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.12] tracking-tight text-charcoal text-balance">
              Your Beauty,{" "}
              <span className="relative inline-block text-rosegold-deep">
                Our Expertise
                <svg
                  aria-hidden="true"
                  viewBox="0 0 220 12"
                  className="absolute -bottom-2 left-0 w-full text-rosegold/60"
                  fill="none"
                >
                  <path d="M3 9C60 3 160 3 217 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-[#635D5C]">
              Professional beauty and personal care services in Zundal, Ahmedabad,
              designed to help you look and feel your best.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openBooking()}
                data-testid="hero-book-appointment-btn"
                className="flex items-center gap-2 rounded-full bg-rosegold-deep px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-[background-color,transform,box-shadow] hover:bg-rosegold hover:-translate-y-0.5 hover:shadow-lift"
              >
                <CalendarHeart className="h-4 w-4" />
                Book Appointment
              </button>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-whatsapp-cta-btn"
                className="flex items-center gap-2 rounded-full border-2 border-[#25D366]/60 bg-white px-7 py-3.5 text-sm font-semibold text-[#128C7E] transition-[background-color,transform] hover:bg-[#25D366]/10 hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {TRUST_POINTS.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-sm font-medium text-charcoal/70">
                  <Icon className="h-4 w-4 text-rosegold" />
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-[2rem] rounded-tr-[6rem] shadow-lift">
              <img
                src={IMAGES.heroBridal}
                alt="Elegant bridal makeup by Mansi Beauty Care, a ladies beauty parlour in Zundal, Ahmedabad"
                className="h-[420px] md:h-[520px] w-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="absolute -bottom-8 -left-4 md:-left-10 w-36 md:w-48 overflow-hidden rounded-3xl border-4 border-cream shadow-lift">
              <img
                src={IMAGES.heroSalon}
                alt="Relaxing beauty salon and spa treatment at Mansi Beauty Care Zundal"
                className="h-40 md:h-56 w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-5 -right-3 md:-right-6 rounded-2xl bg-white/95 px-5 py-3 shadow-card backdrop-blur">
              <p className="font-serif text-lg font-semibold text-rosegold-deep">Beauty Salon</p>
              <p className="text-xs font-medium tracking-wide text-[#635D5C]">in Zundal, Ahmedabad</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
