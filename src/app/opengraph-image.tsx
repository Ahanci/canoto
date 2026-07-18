import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

// Next.js convention: 1200×630 OG image for social previews + Google snippet
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Can Oto Mekanik & Elektrik Özel Servisi — Ankara";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "linear-gradient(135deg, #0a2540 0%, #0d2d4d 55%, #1d4ed8 100%)",
          color: "white",
          padding: 72,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 64,
            right: 72,
            background: "#f59e0b",
            color: "#1a1205",
            padding: "10px 20px",
            borderRadius: 999,
            fontSize: 22,
            fontWeight: 700,
            display: "flex",
          }}
        >
          Ankara · Yenimahalle
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontSize: 30,
            fontWeight: 700,
            opacity: 0.92,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#2563eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 900,
            }}
          >
            C
          </div>
          Can Oto Servis
        </div>

        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Tüm Mekanik ve Oto Elektrik</span>
            <span>İşleriniz İçin Doğru Adres</span>
          </div>
          <div
            style={{
              marginTop: 26,
              fontSize: 28,
              color: "#e5e7eb",
              maxWidth: 880,
              lineHeight: 1.4,
              display: "flex",
            }}
          >
            Bilgisayarlı arıza tespiti · Oto elektrik · Oto beyin (ECU) tamiri
          </div>

          <div
            style={{
              marginTop: 36,
              display: "flex",
              alignItems: "center",
              gap: 18,
              fontSize: 26,
              fontWeight: 600,
            }}
          >
            <div
              style={{
                background: "#f59e0b",
                color: "#1a1205",
                padding: "14px 28px",
                borderRadius: 14,
                display: "flex",
              }}
            >
              📞 {site.phoneDisplay}
            </div>
            <div style={{ opacity: 0.8, display: "flex" }}>{site.addressLine}</div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
