import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Northern Studio",
    short_name: "Northern Studio",
    description: "Intelligent software, AI-powered systems and technology.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#e8e6e0",
    theme_color: "#e8e6e0",
    lang: "nl-BE",
    icons: [{ src: "/mark.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
