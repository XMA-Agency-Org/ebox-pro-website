import type { Metadata } from "next";
import { Inter, Krub } from "next/font/google";
import "./globals.css";
import JumpToTop from "@/components/JumpToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ContactModalProvider } from "@/components/ContactModal";

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
      <head>
        <link
          rel="preload"
          as="video"
          href="https://res.cloudinary.com/dw1j7izud/video/upload/v1762959035/n0ic7gcjgvtbqxydmztc.mp4"
          type="video/mp4"
        />
      </head>
      <body
        className={`${fontPrimary.variable} ${fontSecondary.variable} antialiased`}
      >
        <ContactModalProvider>
          {children}
          <JumpToTop />
          <WhatsAppButton />
        </ContactModalProvider>
      </body>
    </html>
  );
}
