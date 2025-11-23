import "./globals.css";

import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import React from "react";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Live Stream Companion • YMvwvlwjvyw",
  description:
    "Watch the livestream, follow key highlights, and explore context around the YouTube Live session YMvwvlwjvyw.",
  openGraph: {
    title: "Live Stream Companion • YMvwvlwjvyw",
    description:
      "Watch the livestream, follow key highlights, and explore context around the YouTube Live session YMvwvlwjvyw.",
    url: "https://agentic-331cdaa7.vercel.app",
    siteName: "Live Stream Companion",
    type: "website",
    images: [
      {
        url: "https://img.youtube.com/vi/YMvwvlwjvyw/hqdefault.jpg",
        width: 1200,
        height: 630,
        alt: "YouTube Live Stream Thumbnail"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Stream Companion • YMvwvlwjvyw",
    description:
      "An interactive experience built around the YouTube Live session YMvwvlwjvyw.",
    images: ["https://img.youtube.com/vi/YMvwvlwjvyw/hqdefault.jpg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
