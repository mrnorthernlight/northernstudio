import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#05060a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", width: 86, height: 110, position: "relative" }}>
          <div style={{ width: 6, height: 96, background: "#f6f3ec", marginTop: 14 }} />
          <div
            style={{
              width: 6,
              height: 120,
              background: "#f6f3ec",
              transform: "rotate(-32deg)",
              transformOrigin: "top left",
              marginLeft: 8,
            }}
          />
          <div style={{ width: 10, height: 10, borderRadius: 10, background: "#8eebff", position: "absolute", right: 8, top: 0 }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
