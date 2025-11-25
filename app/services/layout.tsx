import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import { GetStartedCTA } from "@/components/services";
import ContactFormWrapper from "@/components/ContactFormWrapper";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{children}</main>
      <ContactFormWrapper />
      <Footer />
    </div>
  );
}
