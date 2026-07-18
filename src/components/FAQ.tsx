import type { FAQ as FAQItem } from "@/lib/blog";

export function FAQList({ items, title = "Sıkça Sorulan Sorular" }: { items: FAQItem[]; title?: string }) {
  if (!items.length) return null;
  return (
    <section className="container-x my-16" aria-labelledby="faq-title">
      <h2 id="faq-title" className="text-2xl font-bold text-[var(--color-heading)] md:text-3xl">
        {title}
      </h2>
      <div className="mt-6 grid gap-3">
        {items.map((f, i) => (
          <details key={i} className="card card-hover group p-0">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold text-[var(--color-heading)]">
              {f.q}
              <span
                aria-hidden
                className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[var(--color-line)] text-[var(--color-cta)] transition group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="px-5 pb-5 text-[var(--color-muted)]">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
