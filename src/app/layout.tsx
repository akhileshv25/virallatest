import type { Metadata, Viewport } from "next";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

/* Defaults for every route; each page sets its own title and description.
   `metadataBase` makes canonical and Open Graph URLs absolute. Mona Sans is
   loaded by the pages that use it (src/viral/fonts.ts). */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Viral Digi Ventures",
  description: "Grow your brand's digital presence, effortlessly.",
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
