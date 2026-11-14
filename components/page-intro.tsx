import type { ReactNode } from "react";

export function PageIntro({
  catalog,
  eyebrow,
  title,
  lede,
  children,
}: {
  catalog?: string;
  eyebrow: string;
  title: string;
  lede: string;
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden pb-12 pt-14 md:pb-20 md:pt-20">
      {catalog ? (
        <p aria-hidden="true" className="catalog-num pointer-events-none absolute right-0 top-8 hidden text-[8rem] md:block md:text-[10rem]">
          {catalog}
        </p>
      ) : null}
      <p className="kicker relative">{eyebrow}</p>
      <h1 className="h1-page relative mt-4 max-w-[16ch]">{title}</h1>
      <p className="lede relative mt-7">{lede}</p>
      {children}
    </header>
  );
}

export function ProseSections({ sections }: { sections: { title: string; paragraphs: string[] }[] }) {
  return (
    <div>
      {sections.map((section, index) => (
        <section key={section.title} className="grid gap-5 border-t border-line py-12 md:grid-cols-12 md:py-16">
          <p className="text-sm tabular-nums tracking-[0.12em] text-pine md:col-span-1">{String(index + 1).padStart(2, "0")}</p>
          <h2 className="font-serif text-[2rem] leading-tight font-normal tracking-tight md:col-span-4 md:text-4xl">{section.title}</h2>
          <div className="space-y-4 text-[1.05rem] leading-relaxed md:col-span-6 md:col-start-7">
            {section.paragraphs.map((paragraph) => (
              <RichText key={paragraph} text={paragraph} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[TODO:[^\]]+\])/g);
  return (
    <p>
      {parts.map((part, index) =>
        part.startsWith("[TODO:") ? (
          <span key={index} className="todo">
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </p>
  );
}

export function Figure({
  label,
  title,
  intro,
  items,
}: {
  label: string;
  title: string;
  intro: string;
  items: { title: string; text: string }[];
}) {
  return (
    <figure className="border-t border-line py-12 md:py-16">
      <figcaption className="grid gap-3 md:grid-cols-12">
        <p className="kicker md:col-span-3">{label}</p>
        <div className="md:col-span-8">
          <p className="font-serif text-3xl leading-tight font-normal tracking-tight md:text-4xl">{title}</p>
          <p className="mt-3 max-w-2xl text-muted">{intro}</p>
        </div>
      </figcaption>
      <ol className="plate mt-8">
        {items.map((item, index) => (
          <li key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </figure>
  );
}
