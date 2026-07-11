import { Reveal, TextReveal } from "./motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  index,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  index?: string;
}) {
  const alignClass = align === "center" ? "mx-auto text-center items-center" : "text-left";

  const heading = (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignClass}`}>
      {eyebrow ? (
        <span
          className={`inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <span aria-hidden="true" className="h-px w-6 bg-accent/60" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold text-foreground md:text-4xl">
        <TextReveal delay={0.05}>{title}</TextReveal>
      </h2>
      {description ? (
        <p className="text-balance text-base text-muted-foreground md:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );

  if (index && align === "left") {
    return (
      <div className="flex items-start gap-6 md:gap-10">
        <span
          aria-hidden="true"
          className="hidden select-none font-display text-7xl italic leading-none text-primary/15 md:block md:text-8xl"
        >
          {index}
        </span>
        {heading}
      </div>
    );
  }

  return heading;
}
