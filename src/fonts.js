// The three faces, loaded with Next.js's Google font loader. Expose them as the CSS variables the components expect:
//   --font-cap  (Bebas Neue: headings and labels)   --font-body (Manrope: text)   --font-mono (JetBrains Mono: every number)
// In app/layout.js:  <html className={`${cap.variable} ${body.variable} ${mono.variable}`}>
// With Tailwind v4, map them in your CSS:  @theme inline { --font-cap: var(--font-cap); --font-body: var(--font-body); --font-mono: var(--font-mono); }
import { Bebas_Neue, Manrope, JetBrains_Mono } from "next/font/google";

export const cap = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-cap", display: "swap" });
export const body = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });
export const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
