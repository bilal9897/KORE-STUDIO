import type { SiteMeta, Theme } from "@/lib/site";

export const meta: SiteMeta = {
  name: "KORE Studio",
  title: "KORE Studio — Drop 07 Capsule",
  description: "Exclusive concept website for KORE Studio: architectural streetwear, 480 GSM heavyweight hoodies, technical puffers, and minimal essentials.",
  loaderText: "KORE",
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
