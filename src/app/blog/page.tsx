import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/blog";
import { CTASection } from "@/components/CTASection";
import { ArrowRightIcon, ClockIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Blog — Araç Arıza Rehberi",
  description:
    "Motor arıza lambası, oto beyin tamiri, marş sorunları ve bilgisayarlı arıza tespiti hakkında uzman rehber yazıları. Ankara Can Oto Servis.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <section className="container-x py-14 md:py-20">
        <span className="chip">Arıza Rehberi</span>
        <h1 className="mt-5 text-balance text-4xl font-extrabold text-[var(--color-heading)] md:text-5xl">
          Araç Arıza Rehberi
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[var(--color-muted)]">
          Aracınızdaki belirtileri anlamanız için hazırladığımız uzman yazılar. Her arızanın
          arkasındaki gerçek nedeni ve doğru çözüm yolunu açıklıyoruz.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card card-hover flex flex-col p-6">
              <div className="flex items-center justify-between gap-2">
                <span className="chip">{p.category}</span>
                <span className="inline-flex items-center gap-1 text-xs text-[var(--color-muted)]">
                  <ClockIcon width={14} height={14} /> {p.readMins} dk
                </span>
              </div>
              <h2 className="mt-4 text-lg font-bold leading-snug text-[var(--color-heading)]">{p.title}</h2>
              <p className="mt-2 flex-1 text-sm text-[var(--color-muted)]">{p.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)]">
                Devamını oku <ArrowRightIcon width={16} height={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
