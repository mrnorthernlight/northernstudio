import localFont from "next/font/local";

/**
 * Self-hosted variable fonts (latin). SIL Open Font License 1.1:
 * assets/fonts/OFL-BricolageGrotesque.txt
 * assets/fonts/OFL-Manrope.txt
 * No next/font/google, so the production build does not download fonts.
 */
export const display = localFont({
  src: "../assets/fonts/bricolage-grotesque-latin.woff2",
  weight: "500 800",
  style: "normal",
  variable: "--font-display",
  display: "swap",
  adjustFontFallback: "Arial",
  fallback: ["Arial", "sans-serif"],
});

export const body = localFont({
  src: "../assets/fonts/manrope-latin.woff2",
  weight: "400 700",
  style: "normal",
  variable: "--font-body",
  display: "swap",
  adjustFontFallback: "Arial",
  fallback: ["Arial", "sans-serif"],
});

export const fontClassName = `${display.variable} ${body.variable} ${body.className}`;
