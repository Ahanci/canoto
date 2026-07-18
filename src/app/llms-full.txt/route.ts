import { site } from "@/lib/site";
import { posts, type Block } from "@/lib/blog";
import { brands } from "@/lib/brands";

// llms-full.txt — sitenin tüm içeriği tek Markdown dökümünde.
// AI/LLM tarayıcıları için optimize: tek fetch ile tüm bilgi.

export const dynamic = "force-static";

function blockToMarkdown(b: Block): string {
  if (b.type === "h2") return `\n## ${b.text}\n`;
  if (b.type === "h3") return `\n### ${b.text}\n`;
  if (b.type === "ul") return b.items.map((i) => `- ${i}`).join("\n");
  return b.text;
}

export function GET() {
  const url = site.baseUrl;

  const parts: string[] = [];

  parts.push(`# ${site.name}`);
  parts.push(
    `\n> Ankara Yenimahalle İvedikköy'de bilgisayarlı araç arıza tespiti, oto elektrik ve oto beyin (ECU) tamiri yapan özel servis.\n`,
  );

  parts.push(`## İşletme Bilgileri`);
  parts.push(`- Ad: ${site.name}`);
  parts.push(`- Adres: ${site.addressLine}`);
  parts.push(`- Telefon: ${site.phoneDisplay} (${site.phoneHref})`);
  parts.push(`- WhatsApp: https://wa.me/${site.whatsappHref.replace(/[^0-9]/g, "")}`);
  parts.push(`- Çalışma saatleri: ${site.hours}`);
  parts.push(`- Koordinatlar: ${site.geo.lat}, ${site.geo.lng}`);
  parts.push(`- Google Maps: ${site.mapsUrl}`);
  parts.push(`- Web: ${url}`);

  parts.push(`\n## Hizmetler\n`);
  for (const s of site.services) parts.push(`- ${s}`);

  parts.push(`\n---\n\n# Arıza Rehberi (Blog Yazıları)\n`);
  for (const p of posts) {
    parts.push(`\n## ${p.title}`);
    parts.push(`URL: ${url}/blog/${p.slug}`);
    parts.push(`Kategori: ${p.category} · Tarih: ${p.date}`);
    parts.push(`Anahtar kelimeler: ${p.keywords.join(", ")}\n`);
    for (const b of p.body) parts.push(blockToMarkdown(b));
    if (p.faqs.length) {
      parts.push(`\n### Sıkça Sorulan Sorular`);
      for (const f of p.faqs) {
        parts.push(`\n**${f.q}**\n${f.a}`);
      }
    }
    parts.push(`\n---`);
  }

  parts.push(`\n# Markaya Özel Arıza Tespiti\n`);
  for (const b of brands) {
    parts.push(`\n## ${b.name} Arıza Tespiti ve Tamiri`);
    parts.push(`URL: ${url}/markalar/${b.slug}`);
    parts.push(
      `\n${b.name} araçlarda motor arıza lambası, gösterge paneli işaretleri ve elektronik sistem arızalarında bilgisayarlı arıza tespiti ile kalıcı çözüm. Ankara'da ${b.name} modellerinde uzman servis.`,
    );
    parts.push(`\n### ${b.name} için sık aranan arıza konuları`);
    for (const kw of b.keywords.slice(0, 16)) parts.push(`- ${kw}`);
    parts.push(`\n---`);
  }

  const md = parts.join("\n");

  return new Response(md, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
