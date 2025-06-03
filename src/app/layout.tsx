import type { Metadata } from "next";
import { Cormorant_Garamond, Work_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackgroundGrid } from "@/components/BackgroundGrid";

const cormorantGaramond = Cormorant_Garamond({
  weight: ["600", "700"],
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Squircle Portal — Everything Squircles",
  description:
    "The Squircle Portal is your ultimate resource for everything squircles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorantGaramond.variable} ${workSans.variable} antialiased`}
      >
        <Providers>
          <BackgroundGrid />
          <Navbar />
          <div className="mt-16">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
