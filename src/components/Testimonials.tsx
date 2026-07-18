import { reviews, aggregate } from "@/lib/reviews";

const featured = reviews.filter((r) => r.featured);

function Stars({ value }: { value: number }) {
  return (
    <span aria-label={`${value} / 5 yıldız`} className="inline-flex gap-0.5 text-[var(--color-cta)]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" aria-hidden>
          <path
            fill={i < value ? "currentColor" : "rgba(0,0,0,0.12)"}
            d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      ))}
    </span>
  );
}

export function Testimonials() {
  return (
    <section className="container-x py-14" aria-labelledby="reviews-title">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 id="reviews-title" className="text-3xl font-bold text-[var(--color-heading)]">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="mt-2 text-[var(--color-muted)]">
            Gerçek müşteri deneyimleri — güveniniz bizim için kıymetli.
          </p>
        </div>
        <div className="card flex items-center gap-3 px-4 py-3">
          <span className="text-3xl font-extrabold text-[var(--color-heading)]">{aggregate.rating}</span>
          <span>
            <Stars value={Math.round(aggregate.rating)} />
            <span className="block text-xs text-[var(--color-muted)]">
              {aggregate.count}+ {aggregate.source} yorumu
            </span>
          </span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((r, i) => (
          <article key={i} className="card card-hover flex flex-col p-6">
            <div className="flex items-center justify-between">
              <Stars value={r.rating} />
              <span className="text-xs text-[var(--color-muted)]">{r.date}</span>
            </div>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-text)]">“{r.text}”</p>
            <div className="mt-5 flex items-center gap-3 border-t border-[var(--color-line)] pt-4">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--color-accent)]/15 text-sm font-bold text-[var(--color-accent)]">
                {r.name.charAt(0)}
              </span>
              <span>
                <span className="block text-sm font-semibold text-[var(--color-heading)]">{r.name}</span>
                {r.source && (
                  <span className="text-xs text-[var(--color-muted)]">{r.source} üzerinden</span>
                )}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
