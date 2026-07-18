import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// AI tarayıcıları için açıkça izin verilenler.
// Listede olmayanlara da `*` ile zaten izin veriyoruz; bu liste niyeti belli eder
// ve opt-in bekleyen botlara güçlü sinyal verir.
const allowedAiBots = [
  "GPTBot",            // OpenAI ChatGPT
  "OAI-SearchBot",     // OpenAI Search
  "ChatGPT-User",      // ChatGPT user-initiated fetch
  "ClaudeBot",         // Anthropic Claude
  "Claude-Web",        // Anthropic Claude (eski isim)
  "Claude-SearchBot",  // Anthropic Search
  "anthropic-ai",      // Anthropic generic
  "PerplexityBot",     // Perplexity
  "Perplexity-User",   // Perplexity user fetch
  "Google-Extended",   // Gemini / Bard veri toplama
  "GoogleOther",       // Google AI ve gelecek ürünleri
  "Googlebot",         // Klasik Google arama
  "Bingbot",           // Bing + Copilot
  "CCBot",             // Common Crawl (birçok LLM bunu kullanır)
  "Applebot",          // Apple arama
  "Applebot-Extended", // Apple Intelligence
  "Amazonbot",         // Amazon / Alexa
  "DuckDuckBot",       // DuckDuckGo
  "YandexBot",         // Yandex
  "Bytespider",        // ByteDance / TikTok / Doubao
  "DiffBot",           // Diffbot
  "Meta-ExternalAgent",// Meta AI
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...allowedAiBots.map((bot) => ({ userAgent: bot, allow: "/" })),
    ],
    sitemap: `${site.baseUrl}/sitemap.xml`,
    host: site.baseUrl,
  };
}
