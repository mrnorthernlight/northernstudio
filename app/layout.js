import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieBanner from "../components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Northern Studio",
  description:
    "Custom PC builds, IT support, hardware consulting and premium web design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}