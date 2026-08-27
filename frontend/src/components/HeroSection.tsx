import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BadgeCheck, MessageCircle, CalendarHeart, Sparkles, ShieldCheck, Heart } from "lucide-react";
import { IMAGES, waLink } from "@/config/site";
import { useBooking } from "@/components/BookingContext";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const TRUST_POINTS = [
  { icon: Heart, label: "Ladies-only comfort" },
  { icon: ShieldCheck, label: "Hygienic & sanitized" },
  { icon: Sparkles, label: "Quality products" },
];

const MaskedLine = ({ children, delay, className = "" }: { children: ReactNode; delay: number; className?: string }) => (
  <span className="-mb-3 block overflow-hidden pb-3">
    <motion.span
      className={`block ${className}`}
      initial={{ y: "112%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1.1, delay, ease: EASE }}
    >
      {children}
    </motion.span>
  </span>
);

const FadeIn = ({ children, delay, className = "" }: { children: ReactNode; delay: number; className?: string }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);

export const HeroSection = () => {
  const { openBooking } = useBooking();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yMain = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const ySmall = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const yGhost = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={ref} id="home" className="relative overflow-hidden bg-cream pt-28 md:pt-36 pb-20 md:pb-28 scroll-mt-24">
      <motion.span
        aria-hidden="true"
        style={{ y: yGhost, WebkitTextStroke: "1px rgba(163, 92, 80, 0.13)" }}
        className="pointer-events-none absolute -top-8 left-0 select-none font-accent text-[26vw] leading-none text-transparent"
      >
        Mansi
      </motion.span>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-rosegold-soft/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-champagne blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <div>
          <FadeIn delay={0.15}>
            <span
              data-testid="hero-trust-badge"
              className="inline-flex items-center gap-2 rounded-full border border-rosegold/30 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-rosegold-deep"
            >
              <BadgeCheck className="h-4 w-4" />
              Trusted Beauty Care in Zundal
            </span>
          </FadeIn>

          <h1 className="mt-7 font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-charcoal">
            <MaskedLine delay={0.3}>Your Beauty,</MaskedLine>
            <MaskedLine delay={0.45} className="font-accent italic text-rosegold-deep">
              Our Expertise
            </MaskedLine>
          </h1>

          <FadeIn delay={0.75}>
            <p className="mt-7 max-w-xl text-base md:text-lg leading-relaxed text-[#635D5C]">
              Professional beauty and personal care services in Zundal, Ahmedabad,
              designed to help you look and feel your best.
            </p>
          </FadeIn>

          <FadeIn delay={0.9}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <motion.button
                onClick={() => openBooking()}
                data-testid="hero-book-appointment-btn"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 rounded-full bg-rosegold-deep px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-rosegold"
              >
                <CalendarHeart className="h-4 w-4" />
                Book Appointment
              </motion.button>
              <motion.a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-whatsapp-cta-btn"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 rounded-full border-2 border-[#25D366]/60 bg-white px-7 py-3.5 text-sm font-semibold text-[#128C7E] transition-colors hover:bg-[#25D366]/10"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </motion.a>
            </div>
          </FadeIn>

          <FadeIn delay={1.05}>
            <ul className="mt-11 flex flex-wrap gap-x-8 gap-y-3">
              {TRUST_POINTS.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-sm font-medium text-charcoal/70">
                  <Icon className="h-4 w-4 text-rosegold" />
                  {label}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.35, ease: EASE }}
            className="relative"
          >
            <motion.div style={{ y: yMain }} className="overflow-hidden rounded-b-[2rem] rounded-t-[999px] shadow-lift">
              <img
                src={IMAGES.heroBridal}
                alt="Elegant bridal makeup by Mansi Beauty Care, a ladies beauty parlour in Zundal, Ahmedabad"
                className="h-[440px] md:h-[560px] w-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: ySmall }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: EASE }}
            className="absolute -bottom-8 -left-4 md:-left-10 w-36 md:w-48 overflow-hidden rounded-3xl border-4 border-cream shadow-lift"
          >
            <img
              src={IMAGES.heroSalon}
              alt="Relaxing beauty salon and spa treatment at Mansi Beauty Care Zundal"
              className="h-40 md:h-56 w-full object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 1, ease: EASE }}
            className="absolute -left-6 -top-8 hidden h-28 w-28 md:block"
          >
            <div className="h-full w-full animate-[spin_18s_linear_infinite]">
              <svg viewBox="0 0 100 100" className="h-full w-full fill-rosegold-deep text-[8.5px] font-semibold uppercase tracking-[0.2em]">
                <defs>
                  <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                </defs>
                <text>
                  <textPath href="#badge-circle">Mansi Beauty Care • Zundal • Ahmedabad •</textPath>
                </text>
              </svg>
            </div>
            <Sparkles className="absolute inset-0 m-auto h-6 w-6 text-rosegold" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
            className="absolute -top-5 -right-3 md:-right-6 rounded-2xl bg-white/95 px-5 py-3 shadow-card backdrop-blur"
          >
            <p className="font-serif text-lg font-semibold text-rosegold-deep">Beauty Salon</p>
            <p className="text-xs font-medium tracking-wide text-[#635D5C]">in Zundal, Ahmedabad</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
