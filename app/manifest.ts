import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dr. Tank – Water Tank Cleaning Services Kerala",
    short_name: "Dr. Tank",
    description:
      "Professional water tank cleaning services for homes, businesses and industries across Kerala.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#22C4F2",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
