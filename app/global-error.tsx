"use client";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="nl-BE">
      <body
        style={{
          margin: 0,
          background: "#05060a",
          color: "#f6f3ec",
          fontFamily: "Georgia, 'Times New Roman', serif",
          padding: "12vh 8vw",
        }}
      >
        <h1 style={{ fontWeight: 450, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "-0.03em" }}>Er ging iets mis.</h1>
        <p style={{ fontFamily: "system-ui, sans-serif", maxWidth: "36rem", fontSize: "1.15rem" }}>Something went wrong. Probeer opnieuw.</p>
        <button
          type="button"
          onClick={() => reset()}
          style={{
            marginTop: "1.5rem",
            background: "#8eebff",
            color: "#061018",
            border: 0,
            minHeight: "2.75rem",
            padding: "0.7rem 1.1rem",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Opnieuw proberen
        </button>
      </body>
    </html>
  );
}
