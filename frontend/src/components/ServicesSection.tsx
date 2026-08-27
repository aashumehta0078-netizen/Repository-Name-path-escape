import { useMemo, useState } from "react";
import { SERVICES, SERVICE_CATEGORIES, type ServiceCategory } from "@/data/services";
import { useBooking } from "@/components/BookingContext";
import { Reveal } from "@/components/Reveal";
import { ChapterHeading } from "@/components/ChapterHeading";

export const ServicesSection = () => {
  const [active, setActive] = useState<"All" | ServiceCategory>("All");
  const { openBooking } = useBooking();

  const visible = useMemo(
    () =>
      SERVICES.filter(
        (s) => s.available && (active === "All" || s.category === active),
      ),
    [active],
  );

  return (
    <section id="services" className="bg-cream py-16 md:py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <ChapterHeading index="02" overline="Beauty Services in Zundal" title="Our Beauty Services" />
          <p className="mt-4 text-base leading-relaxed text-[#635D5C]">
            Complete beauty care under one roof — from bridal makeup and hair styling
            to facials, waxing, nails and skin care at our beauty parlour in Zundal.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div
            data-testid="services-category-tabs"
            role="tablist"
            aria-label="Service categories"
            className="mt-10 flex flex-wrap justify-center gap-2"
          >
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={active === cat}
                onClick={() => setActive(cat)}
                data-testid={`services-tab-${cat.toLowerCase()}`}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-[background-color,color] ${
                  active === cat
                    ? "bg-rosegold-deep text-white shadow-soft"
                    : "bg-white text-charcoal/70 border border-[#EBE3D8] hover:border-rosegold/50 hover:text-rosegold-deep"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.id} delay={(i % 4) * 80}>
                <article
                  data-testid={`service-card-${service.id}`}
                  className="group flex h-full flex-col rounded-3xl border border-[#EBE3D8] bg-white p-6 shadow-card transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-rosegold/40 hover:shadow-soft"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-champagne text-rosegold-deep transition-colors group-hover:bg-rosegold-soft/60">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-charcoal">{service.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#635D5C]">
                    {service.description}
                  </p>
                  <button
                    onClick={() => openBooking(service.name)}
                    data-testid={`service-book-btn-${service.id}`}
                    className="mt-5 self-start rounded-full border border-rosegold/40 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-rosegold-deep transition-colors hover:bg-rosegold-deep hover:text-white"
                  >
                    Book Now
                  </button>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
