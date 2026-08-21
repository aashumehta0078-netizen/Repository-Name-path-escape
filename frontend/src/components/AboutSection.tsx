import { HeartHandshake, Sparkles, Armchair } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const FEATURES = [
  {
    icon: HeartHandshake,
    title: "Professional Care",
    text: "Attentive, experienced beauticians who take time to understand what suits you before every service.",
  },
  {
    icon: Sparkles,
    title: "Quality Beauty Services",
    text: "From bridal makeup to everyday grooming, every service is done with quality products and careful technique.",
  },
  {
    icon: Armchair,
    title: "Comfortable Experience",
    text: "A clean, calm and welcoming ladies-only space where you can truly relax while we pamper you.",
  },
];

export const AboutSection = () => (
  <section id="about" className="bg-ivory py-16 md:py-24 scroll-mt-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rosegold-deep">About Us</p>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-charcoal">
            Welcome to Mansi Beauty Care
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#635D5C]">
            Mansi Beauty Care is a ladies beauty parlour in Zundal, Ahmedabad, offering
            quality beauty and personal care services in a comfortable and welcoming
            environment. Whether you are preparing for your wedding day, a special
            occasion, or simply want some well-deserved self-care, our beauty salon in
            Zundal gives you personal attention, honest advice and a relaxing experience
            every time you visit.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#635D5C]">
            We are easy to reach for clients across Zundal, Chandkheda, Motera and
            Vaishnodevi Circle — your neighbourhood beauty salon near Zundal for
            everything from threading and waxing to bridal makeup in Zundal.
          </p>
        </Reveal>

        <div className="grid gap-5">
          {FEATURES.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 120}>
              <article
                data-testid={`about-feature-${title.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex gap-4 rounded-3xl border border-[#EBE3D8] bg-white p-6 shadow-card transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-soft"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rosegold-soft/60 text-rosegold-deep">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-charcoal">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#635D5C]">{text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
