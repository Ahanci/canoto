import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { posts } from "@/lib/blog";
import { brands } from "@/lib/brands";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.baseUrl;
  const now = new Date();

  const staticRoutes = ["", "/hizmetler", "/markalar", "/blog", "/iletisim"].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const blogRoutes = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const brandRoutes = brands.map((b) => ({
    url: `${base}/markalar/${b.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes, ...brandRoutes];
}
