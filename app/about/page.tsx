import Header from "@/components/Header";
import AboutHighlights from "@/components/AboutHighlights";
import StoryCards from "@/components/StoryCards";
import AboutUs from "@/components/AboutUs";
import ContactFormWrapper from "@/components/ContactFormWrapper";
import Footer from "@/components/Footer";
import SecondaryCallToAction from "@/components/SecondaryCallToAction";
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll";
import SectionBadge from "@/components/SectionBadge";

export const metadata = {
  title: "About Ebox Pro Logistics | Built by Sellers, for Sellers",
  description:
    "Learn how Ebox Pro Logistics delivers world-class fulfillment, technology, and support for ambitious e-commerce brands across the GCC.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AboutHighlights />
      <section className="bg-white section-padding mx-auto container-wide">
        <div className="max-w-4xl mx-auto">
          <div className="mx-auto w-fit">
            <SectionBadge>Our Mission</SectionBadge>
          </div>
          <TextGradientScroll
            text="To be the most trusted and innovative fulfillment partner for e-commerce businesses expanding across the Middle East."
            className="text-display-md lg:text-display-lg font-normal! leading-relaxed text-center"
          ></TextGradientScroll>
        </div>
      </section>
      <StoryCards />
      <AboutUs />
      {/* <SecondaryCallToAction text="Join hundreds of successful e-commerce brands who trust Ebox Pro Logistics to power their growth in the GCC market." /> */}
      <ContactFormWrapper />
      <Footer />
    </div>
  );
}
