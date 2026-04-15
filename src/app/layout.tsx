import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CoolNameGen — Free Name Generator for Every Occasion",
  description:
    "35+ free name generators. Viking names, rap names, elf names, pet names, business names and more. Instant results, no signup required.",
  keywords: [
    "name generator",
    "random name generator",
    "viking name generator",
    "rap name generator",
    "elf name generator",
    "cat name generator",
    "business name generator",
  ],
  openGraph: {
    title: "CoolNameGen — Free Name Generator",
    description:
      "35+ free name generators. Pick a category, hit generate, get inspired.",
    url: "https://coolnamegen.com",
    siteName: "CoolNameGen",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
