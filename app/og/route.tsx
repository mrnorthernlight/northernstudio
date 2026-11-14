import { ImageResponse } from "next/og";

export const runtime = "nodejs";

function clean(value: string | null, fallback: string, max: number) {
  const text = (value || fallback).replace(/\s+/g, " ").trim();
  return text.slice(0, max);
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = clean(searchParams.get("title"), "Northern Studio", 110);
  const eyebrow = clean(searchParams.get("eyebrow"), "Building What's Next.", 70);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#05060a",
          color: "#f6f3ec",
        }}
      >
        <div style={{ width: 18, background: "#8eebff" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "68px 76px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", fontSize: 24, letterSpacing: 3, color: "#8eebff", textTransform: "uppercase" }}>
            <div style={{ width: 12, height: 12, borderRadius: 12, background: "#f2c48a", marginRight: 14 }} />
            {eyebrow}
          </div>
          <div style={{ display: "flex", fontSize: title.length > 64 ? 60 : 76, lineHeight: 1.02, letterSpacing: -1.4, maxWidth: 960 }}>
            {title}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#c9c4d8" }}>
            <span>Northern Studio</span>
            <span>northernstudio.be</span>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
