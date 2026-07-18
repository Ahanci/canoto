import { ImageResponse } from "next/og";

// Next.js convention: /icon → favicon (32x32 default)
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#2563eb",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 18,
          fontWeight: 800,
          letterSpacing: -0.5,
          borderRadius: 6,
        }}
      >
        C
      </div>
    ),
    { ...size },
  );
}
