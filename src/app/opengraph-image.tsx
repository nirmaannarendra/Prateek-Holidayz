import { ImageResponse } from "next/og";
import { companyInfo } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#100e0c",
          color: "#f5f1e8",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 56,
            height: 4,
            background: "#c9754a",
            marginBottom: 32,
          }}
        />
        <div style={{ display: "flex", fontSize: 32, letterSpacing: 4, opacity: 0.75 }}>
          {companyInfo.name.toUpperCase()}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            marginTop: 24,
            maxWidth: 900,
            lineHeight: 1.15,
          }}
        >
          {companyInfo.tagline}
        </div>
        <div style={{ display: "flex", fontSize: 28, marginTop: 40, opacity: 0.7 }}>
          Ahmedabad, Gujarat &middot; Domestic, International &amp; Corporate Travel
        </div>
      </div>
    ),
    { ...size }
  );
}
