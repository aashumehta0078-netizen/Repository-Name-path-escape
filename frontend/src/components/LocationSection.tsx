import { MapPin, Navigation, Phone, MessageCircle } from "lucide-react";
import { SITE, telLink, waLink } from "@/config/site";
import { Reveal } from "@/components/Reveal";

export const LocationSection = () => (
  <section id="contact" className="bg-cream py-16 md:py-24 scroll-mt-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rosegold-deep">
          Find Us
        </p>
        <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-charcoal">
          Visit Mansi Beauty Care
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="flex h-full flex-col rounded-3xl border border-[#EBE3D8] bg-white p-8 shadow-card">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rosegold-soft/60 text-rosegold-deep">
              <MapPin className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-serif text-xl font-semibold text-charcoal">{SITE.name}</h3>
            <address className="mt-2 text-base not-italic leading-relaxed text-[#635D5C]">
              {SITE.area}, {SITE.city}, {SITE.state}, {SITE.country}
            </address>
            <p className="mt-4 text-sm leading-relaxed text-[#8E8887]">
              Easy to reach from Chandkheda, Motera and Vaishnodevi Circle. Call or
              WhatsApp us on{" "}
              <a href={telLink()} className="font-semibold text-rosegold-deep">
                {SITE.phoneDisplay}
              </a>{" "}
              — exact shop address and timings will be updated here soon.
            </p>

            <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row sm:flex-wrap">
              <a
                href={SITE.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="location-directions-btn"
                className="flex items-center justify-center gap-2 rounded-full bg-rosegold-deep px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-rosegold"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
              <a
                href={telLink()}
                data-testid="location-call-btn"
                className="flex items-center justify-center gap-2 rounded-full border border-rosegold/40 px-5 py-3 text-sm font-semibold text-rosegold-deep transition-colors hover:bg-rosegold-soft/40"
              >
                <Phone className="h-4 w-4" />
                Call
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="location-whatsapp-btn"
                className="flex items-center justify-center gap-2 rounded-full border-2 border-[#25D366]/60 px-5 py-3 text-sm font-semibold text-[#128C7E] transition-colors hover:bg-[#25D366]/10"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="h-full min-h-[320px] overflow-hidden rounded-3xl border border-[#EBE3D8] shadow-card">
            <iframe
              title="Map showing Mansi Beauty Care location in Zundal, Ahmedabad"
              src="https://www.google.com/maps?q=Zundal,%20Ahmedabad,%20Gujarat&output=embed"
              className="h-full min-h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              data-testid="location-map-embed"
            />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
