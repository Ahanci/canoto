import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <span className="text-6xl font-extrabold text-[var(--color-accent)]">404</span>
      <h1 className="mt-4 text-2xl font-bold text-[var(--color-heading)]">Sayfa Bulunamadı</h1>
      <p className="mt-2 max-w-md text-[var(--color-muted)]">
        Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Ana sayfaya dönüp arıza
        rehberimize göz atabilirsiniz.
      </p>
      <div className="mt-6 flex gap-3">
        <Link href="/" className="btn btn-accent">Ana Sayfa</Link>
        <Link href="/blog" className="btn btn-ghost">Arıza Rehberi</Link>
      </div>
    </section>
  );
}
