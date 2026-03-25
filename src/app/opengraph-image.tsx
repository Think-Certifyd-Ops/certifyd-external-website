import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Certifyd — Identity Verification for Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0052FF",
          padding: "60px",
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 140,
            height: 140,
            backgroundColor: "white",
            borderRadius: 24,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 100,
              height: 100,
              backgroundColor: "#0052FF",
              borderRadius: 12,
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                position: "absolute",
                top: 20,
                left: 20,
                right: 20,
                bottom: 20,
                backgroundColor: "white",
                borderRadius: 4,
              }}
            />
            <div
              style={{
                display: "flex",
                position: "absolute",
                top: 35,
                right: 20,
                width: 30,
                height: 30,
                backgroundColor: "#0052FF",
              }}
            />
          </div>
        </div>

        {/* Company name */}
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            color: "white",
            letterSpacing: "-2px",
            marginBottom: 16,
            fontFamily: "sans-serif",
          }}
        >
          Certifyd
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "rgba(255, 255, 255, 0.85)",
            textAlign: "center",
            maxWidth: 800,
            fontFamily: "sans-serif",
          }}
        >
          Identity Verification for Businesses
        </div>

        {/* URL */}
        <div
          style={{
            display: "flex",
            fontSize: 20,
            color: "rgba(255, 255, 255, 0.5)",
            marginTop: 32,
            fontFamily: "sans-serif",
          }}
        >
          www.certifyd.io
        </div>
      </div>
    ),
    { ...size }
  );
}
