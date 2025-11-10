import type { Metadata } from "next";
import { Inter, Krub } from "next/font/google";
import "./globals.css";

const fontPrimary = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-primary",
});

const fontSecondary = Krub({
  subsets: ["latin"],
  variable: "--font-secondary",
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Ebox Pro - Premium Logistics & 3PL Services",
  description: "Leading 3PL logistics provider offering warehousing, fulfillment, transportation, and supply chain solutions. Ebox Pro delivers reliable, scalable logistics services for businesses of all sizes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontPrimary.variable} ${fontSecondary.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
