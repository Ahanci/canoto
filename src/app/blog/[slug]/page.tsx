import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/lib/blog";
import { site } from "@/lib/site";
import { CTASection } from "@/components/CTASection";
import { FAQList } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { ClockIcon, ArrowRightIcon } from "@/components/icons";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.baseUrl}/blog/${post.slug}`,
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={[articleLd, faqLd]} />

      <article className="container-x max-w-3xl py-12 md:py-16">
        <nav aria-label="breadcrumb" className="mb-6 text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-heading)]">Ana Sayfa</Link>
          <span className="px-1.5">/</span>
          <Link href="/blog" className="hover:text-[var(--color-heading)]">Blog</Link>
        </nav>

        <span className="chip">{post.category}</span>
        <h1 className="mt-4 text-balance text-3xl font-extrabold leading-tight text-[var(--color-heading)] md:text-4xl">
          {post.title}
        </h1>
        <div className="mt-4 flex items-center gap-3 text-sm text-[var(--color-muted)]">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}
          </time>
          <span aria-hidden>·</span>
          <span className="inline-flex items-center gap-1">
            <ClockIcon width={14} height={14} /> {post.readMins} dk okuma
          </span>
        </div>

        <div className="prose-tr mt-8">
          {post.body.map((b, i) => {
            if (b.type === "h2") return <h2 key={i}>{b.text}</h2>;
            if (b.type === "h3") return <h3 key={i}>{b.text}</h3>;
            if (b.type === "ul")
              return (
                <ul key={i}>
                  {b.items.map((it, j) => (
                    <li key={j}>{it}</li>
                  ))}
                </ul>
              );
            return <p key={i}>{b.text}</p>;
          })}
        </div>
      </article>

      <FAQList items={post.faqs} />

      <CTASection
        title="Bu Arızayı Yaşıyor musunuz?"
        text="Ankara'da bilgisayarlı arıza tespiti ile sorunu net biçimde belirleyip kalıcı çözelim. Hemen arayın ya da WhatsApp'tan yazın."
      />

      <section className="container-x my-12">
        <h2 className="text-2xl font-bold text-[var(--color-heading)]">İlgili Yazılar</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {related.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card card-hover flex flex-col p-6">
              <span className="chip self-start">{p.category}</span>
              <h3 className="mt-3 font-semibold leading-snug text-[var(--color-heading)]">{p.title}</h3>
              <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)]">
                Oku <ArrowRightIcon width={16} height={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
