import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description:
      "Ankara'da bilgisayarlı araç arıza tespiti, oto elektrik ve oto beyin tamiri.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f8fb",
    theme_color: "#2563eb",
    lang: "tr-TR",
    categories: ["business", "automotive", "lifestyle"],
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
