import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Residence - Smart Property Management & Secure Renting Platform";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom right, #16A34A, #0D9488)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "80px",
              height: "80px",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "12px",
              backgroundColor: "#F97316",
              marginRight: "16px",
            }}
          >
            <span
              style={{
                fontSize: "48px",
                color: "white",
                fontWeight: "bold",
              }}
            >
              R
            </span>
          </div>
          <span
            style={{
              fontSize: "64px",
              fontWeight: "bold",
              background: "white",
              backgroundClip: "text",
              color: "white",
            }}
          >
            residence
          </span>
        </div>
        <div
          style={{
            fontSize: "32px",
            color: "white",
            marginTop: "24px",
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          Smart Property Management & Secure Renting Platform
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
