import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PixForge Studios — Video & AI Content Studio",
  description:
    "Multilingual dubbing, short-form video editing, and AI lipsync. One studio, every language.",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${sans.variable} ${mono.variable} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
