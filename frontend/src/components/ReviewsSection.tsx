import { Star, Quote, ExternalLink } from "lucide-react";
import { REVIEWS } from "@/data/reviews";
import { SITE } from "@/config/site";
import { Reveal } from "@/components/Reveal";

export const ReviewsSection = () => (
  <section id="reviews" className="bg-ivory py-16 md:py-24 scroll-mt-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rosegold-deep">
          Reviews
        </p>
        <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-charcoal">
          What Our Customers Say
        </h2>
        <p className="mt-4 text-sm italic text-[#8E8887]">
          The reviews below are samples — real customer reviews will be added here soon.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {REVIEWS.map((review, i) => (
          <Reveal key={i} delay={i * 120}>
            <article
              data-testid={`review-card-${i}`}
              className="relative flex h-full flex-col rounded-3xl border border-[#EBE3D8] bg-white p-7 shadow-card"
            >
              <Quote aria-hidden="true" className="absolute right-6 top-6 h-8 w-8 text-rosegold-soft" />
              <div className="flex items-center gap-1" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: review.rating }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[#635D5C]">{review.text}</p>
              <footer className="mt-5 flex items-center justify-between border-t border-[#EBE3D8] pt-4">
                <span className="text-sm font-semibold text-charcoal">{review.name}</span>
                <span className="rounded-full bg-champagne px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-rosegold-deep">
                  Sample
                </span>
              </footer>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 text-center">
        <a
          href={SITE.googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="reviews-google-btn"
          className="inline-flex items-center gap-2 rounded-full border border-rosegold/40 bg-white px-6 py-3 text-sm font-semibold text-rosegold-deep transition-colors hover:bg-rosegold-soft/40"
        >
          <ExternalLink className="h-4 w-4" />
          See More Reviews on Google
        </a>
      </Reveal>
    </div>
  </section>
);
