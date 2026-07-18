import { site } from "@/lib/site";
import { posts } from "@/lib/blog";
import { brands } from "@/lib/brands";

// llms.txt — https://llmstxt.org standardı.
// LLM'lerin siteyi tek bakışta anlaması için Markdown indeks.
// Tam içerik için /llms-full.txt kullanılabilir.

export const dynamic = "force-static";

export function GET() {
  const url = site.baseUrl;

  const md = `# ${site.name}

> Ankara Yenimahalle İvedikköy'de bilgisayarlı araç arıza tespiti, oto elektrik ve oto beyin (ECU) tamiri yapan özel servis. Motor arıza lambası, marş arızaları ve elektronik sistem sorunlarında bilgisayarlı tespitle kalıcı çözüm.

- **Adres:** ${site.addressLine}
- **Telefon:** ${site.phoneDisplay} (${site.phoneHref})
- **Çalışma saatleri:** ${site.hours}
- **Konum:** ${site.geo.lat}, ${site.geo.lng}
- **Hizmet alanı:** Ankara

## Hizmetler

${site.services.map((s) => `- ${s}`).join("\n")}

Detaylı hizmetler sayfası: ${url}/hizmetler

## Arıza Rehberi (Blog)

${posts
  .map((p) => `- [${p.title}](${url}/blog/${p.slug}): ${p.description}`)
  .join("\n")}

## Markaya Özel Arıza Tespiti

${brands
  .map(
    (b) =>
      `- [${b.name} arıza tespiti ve tamiri](${url}/markalar/${b.slug}): ${b.name} araçlarda arıza lambaları, gösterge işaretleri ve elektronik arızalar.`,
  )
  .join("\n")}

## İletişim

- Web: ${url}
- Telefon: ${site.phoneDisplay}
- WhatsApp: https://wa.me/${site.whatsappHref.replace(/[^0-9]/g, "")}
- Google Maps: ${site.mapsUrl}
- Sitemap: ${url}/sitemap.xml
- Tam içerik: ${url}/llms-full.txt
`;

  return new Response(md, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
