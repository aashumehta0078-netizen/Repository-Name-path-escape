import { UserRound, BadgeCheck, Sparkles, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const PILLARS = [
  {
    icon: UserRound,
    title: "Personalized Beauty Care",
    text: "Every skin type and every face is different — we tailor each service to what genuinely suits you.",
  },
  {
    icon: BadgeCheck,
    title: "Professional Service",
    text: "Skilled, courteous beauticians and proper technique, from a simple threading to full bridal makeup.",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic & Comfortable Environment",
    text: "Clean tools, fresh linen and a calm, ladies-only space designed for you to unwind.",
  },
  {
    icon: Sparkles,
    title: "Quality Products",
    text: "We use trusted, skin-friendly beauty products so your skin and hair get the care they deserve.",
  },
];

export const WhyChooseUsSection = () => (
  <section className="bg-ivory py-16 md:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rosegold-deep">
          The Mansi Difference
        </p>
        <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-charcoal">
          Why Choose Mansi Beauty Care?
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} delay={i * 100}>
            <article
              data-testid={`why-card-${i}`}
              className="h-full rounded-3xl border border-[#EBE3D8] bg-white p-7 text-center shadow-card transition-[transform,box-shadow] hover:-translate-y-1.5 hover:shadow-soft"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rosegold-soft/60 text-rosegold-deep">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-charcoal">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#635D5C]">{text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
