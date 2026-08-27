interface ChapterHeadingProps {
  index: string;
  overline: string;
  title: string;
  align?: "center" | "left";
}

export const ChapterHeading = ({ index, overline, title, align = "center" }: ChapterHeadingProps) => (
  <div className={align === "center" ? "flex flex-col items-center text-center" : "flex flex-col items-start text-left"}>
    <span
      aria-hidden="true"
      className="select-none font-accent text-5xl leading-none text-transparent md:text-6xl"
      style={{ WebkitTextStroke: "1px rgba(163, 92, 80, 0.45)" }}
    >
      {index}
    </span>
    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-rosegold-deep">
      {overline}
    </p>
    <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl lg:text-4xl">
      {title}
    </h2>
  </div>
);
