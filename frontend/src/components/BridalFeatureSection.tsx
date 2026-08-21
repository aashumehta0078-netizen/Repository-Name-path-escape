import { Crown, MessageCircle } from "lucide-react";
import { IMAGES, waLink } from "@/config/site";
import { Reveal } from "@/components/Reveal";

const BRIDAL_MESSAGE =
  "Hello Mansi Beauty Care, I would like to book a bridal consultation for bridal makeup in Zundal, Ahmedabad.";

export const BridalFeatureSection = () => (
  <section id="bridal" className="relative overflow-hidden py-20 md:py-28 scroll-mt-24">
    <img
      src={IMAGES.bridalLarge}
      alt="Bridal makeup in Zundal — elegant Indian bridal look by Mansi Beauty Care"
      className="absolute inset-0 h-full w-full object-cover"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/70 to-charcoal/30" />

    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Reveal className="max-w-xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
          <Crown className="h-4 w-4 text-gold" />
          Bridal Makeup in Zundal
        </span>
        <h2 className="mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-white text-balance">
          Look Your Best on Your Special Day
        </h2>
        <p className="mt-5 text-base md:text-lg leading-relaxed text-white/85">
          From elegant traditional looks to modern bridal styles, create a look that
          feels uniquely yours. Sit with us, share your vision, and let us craft your
          perfect bridal look.
        </p>
        <a
          href={waLink(BRIDAL_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="bridal-consultation-btn"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-rosegold-deep shadow-lift transition-[background-color,transform] hover:bg-champagne hover:-translate-y-0.5"
        >
          <MessageCircle className="h-4 w-4" />
          Book Bridal Consultation
        </a>
      </Reveal>
    </div>
  </section>
);
