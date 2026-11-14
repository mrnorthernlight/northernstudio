import { Bricolage_Grotesque, Manrope } from "next/font/google";

export const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const fontClassName = `${display.variable} ${body.variable} ${body.className}`;
