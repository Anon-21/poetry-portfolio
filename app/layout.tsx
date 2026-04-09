import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Fraunces } from "next/font/google"
import { Analytics } from '@vercel/analytics/next';

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400","600","700"]
})

import Navbar from "@/components/Navbar"
import Footer from "@/components/Foofighter"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sonal's Poetry Portfolio",
    template: "%s | Sonal"
  },
  description: "Poetry, Blog."
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fraunces.className}>

        <Navbar />

        {children}
<Footer />
        <Analytics />
      </body>
    </html>
  );
}