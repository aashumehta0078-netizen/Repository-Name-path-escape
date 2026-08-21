import { Phone, MessageCircle } from "lucide-react";
import { telLink, waLink } from "@/config/site";
import { Reveal } from "@/components/Reveal";

export const AppointmentCTASection = () => (
  <section className="relative overflow-hidden bg-rosegold-deep py-16 md:py-24">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-white/10 blur-3xl"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-gold/20 blur-3xl"
    />
    <Reveal className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-balance">
        Ready for Your Beauty Appointment?
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-base md:text-lg leading-relaxed text-white/85">
        Book your appointment today and enjoy professional beauty care at Mansi Beauty
        Care, Zundal.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-4">
        <a
          href={telLink()}
          data-testid="cta-call-now-btn"
          className="flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-rosegold-deep shadow-lift transition-[background-color,transform] hover:bg-champagne hover:-translate-y-0.5"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="cta-whatsapp-now-btn"
          className="flex items-center gap-2 rounded-full border-2 border-white/70 px-8 py-3.5 text-sm font-semibold text-white transition-[background-color,transform] hover:bg-white/10 hover:-translate-y-0.5"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp Now
        </a>
      </div>
    </Reveal>
  </section>
);
