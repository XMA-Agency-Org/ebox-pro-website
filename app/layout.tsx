import type { Metadata } from "next";
import { Inter, Krub } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import JumpToTop from "@/components/JumpToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ContactModalProvider } from "@/components/ContactModal";
import { Analytics } from "@vercel/analytics/next";

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
  title: "Ebox Pro - Premium All-In-One E-commerce Fulfillment Services",
  description:
    "Leading 3PL logistics provider offering warehousing, fulfillment, transportation, and supply chain solutions. Ebox Pro delivers reliable, scalable logistics services for businesses of all sizes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WNVPDJ4Q');`}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17763076208"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-17763076208');`}
        </Script>
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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WNVPDJ4Q"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ContactModalProvider>
          {children}
          <JumpToTop />
          <WhatsAppButton />
        </ContactModalProvider>
        <Analytics />
      </body>
    </html>
  );
}
