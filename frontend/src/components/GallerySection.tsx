import { useMemo, useState, type MouseEvent } from "react";
import { GALLERY_ITEMS, GALLERY_CATEGORIES, type GalleryCategory } from "@/data/gallery";
import { Reveal } from "@/components/Reveal";
import { ChapterHeading } from "@/components/ChapterHeading";

const handleSpotlight = (e: MouseEvent<HTMLElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
};

export const GallerySection = () => {
  const [active, setActive] = useState<"All" | GalleryCategory>("All");

  const visible = useMemo(
    () => GALLERY_ITEMS.filter((g) => active === "All" || g.category === active),
    [active],
  );

  return (
    <section id="gallery" className="bg-cream py-16 md:py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <ChapterHeading index="04" overline="Our Work" title="Gallery" />
          <p className="mt-4 text-base leading-relaxed text-[#635D5C]">
            A glimpse of the looks and moments we create at our beauty salon in Zundal.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Gallery categories">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={active === cat}
                onClick={() => setActive(cat)}
                data-testid={`gallery-filter-${cat.toLowerCase()}`}
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

        <div data-testid="gallery-grid" className="mt-10 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
          {visible.map((item, i) => (
            <figure
              key={item.src}
              onMouseMove={handleSpotlight}
              className="group relative break-inside-avoid overflow-hidden rounded-3xl shadow-card"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/5]"
                }`}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.28), transparent 70%)",
                }}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/70 to-transparent px-4 pb-3 pt-10 text-xs font-semibold uppercase tracking-wider text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {item.category}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
