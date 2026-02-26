import type { Metadata } from "next";
import { Syne, IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Revision Tool — Case Study",
  description: "AI-augmented UX design process",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${mono.variable} ${sans.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}