import { Newsreader, Schibsted_Grotesk } from "next/font/google";

export const grotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-grotesk",
  display: "swap",
});

export const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  variable: "--font-newsreader",
  display: "swap",
});

export const fontClassName = `${grotesk.variable} ${newsreader.variable} ${grotesk.className}`;
