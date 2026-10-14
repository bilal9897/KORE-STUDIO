import type { SiteMeta, Theme } from "@/lib/site";

export const meta: SiteMeta = {
  name: "Kerbcode Studio",
  title: "Kerbcode Studio — Drop 07",
  description: "Concept website for a fictional streetwear drop: heavyweight hoodies, shells and basics. Concept website by Triozen Tech.",
  loaderText: "KERBCODE",
  loader: false, // the site has its own woven-label loader (site/components/Loader.tsx)
  cursor: true,
  record: { duration: 40 },
};

export const theme: Theme = {
  bg: "#E2E6EB",
  surface: "#FFFFFF",
  text: "#0E0F11",
  muted: "#4B5058",
  accent: "#EC6A2C",
  accentText: "#0E0F11",
  line: "#C4CAD2",
  fontDisplay: "'Krona One', 'Arial Black', sans-serif",
  fontBody: "'Inter Tight Variable', 'Inter Tight', system-ui, sans-serif",
  radius: 0,
  uppercaseHeadings: true,
};
