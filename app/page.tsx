import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProcessSteps from "@/components/ProcessSteps";
import FulfillmentCalculator from "@/components/FulfillmentCalculator";
import KeyUSPs from "@/components/KeyUSPs";
import FAQ from "@/components/FAQ";
import ContactFormWrapper from "@/components/ContactFormWrapper";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Header />
      <Hero />
      <KeyUSPs />
      <Services />
      <ProcessSteps />
      <FulfillmentCalculator />
      <FAQ />
      <ContactFormWrapper />
      <Footer />
    </div>
  );
}
