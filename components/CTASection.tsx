"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, Calendar } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Button } from "./ui/Button";

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-gold-rich to-gold-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main CTA Content */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Scale Your 
              <span className="block">E-commerce Business?</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join 500+ e-commerce sellers who have transformed their fulfillment operations 
              with Ebox Pro. Let's discuss how we can optimize your Amazon, Shopify, and Noon operations.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={staggerContainer}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.div variants={fadeInUp}>
              <button className="group px-8 py-4 bg-white text-gold-rich font-semibold rounded-full hover:bg-cream hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2">
                Get Your Free Assessment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <Button variant="outline">
                View Pricing
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 pt-12 border-t border-white/20"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center group cursor-pointer"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4 group-hover:bg-white/20 transition-colors">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Call Us</h3>
              <p className="text-white/80 text-sm mb-2">Speak with our e-commerce experts</p>
              <a href="tel:+971563562153" className="text-white font-medium hover:underline">
                +971 56 356 2153
              </a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="text-center group cursor-pointer"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4 group-hover:bg-white/20 transition-colors">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email Us</h3>
              <p className="text-white/80 text-sm mb-2">Get detailed information</p>
              <a href="mailto:hello@eboxprologistics.com" className="text-white font-medium hover:underline">
                hello@eboxprologistics.com
              </a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="text-center group cursor-pointer"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4 group-hover:bg-white/20 transition-colors">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Schedule Demo</h3>
              <p className="text-white/80 text-sm mb-2">See our platform in action</p>
              <span className="text-white font-medium">30-min consultation</span>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div variants={fadeInUp} className="mt-16">
            <p className="text-white/60 text-sm mb-6">
              Trusted by 500+ e-commerce sellers • Amazon FBA Certified • 99.9% Order Accuracy
            </p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-white/60 font-medium text-sm">Amazon Partner</div>
              <div className="w-1 h-1 bg-white/40 rounded-full"></div>
              <div className="text-white/60 font-medium text-sm">Shopify Plus</div>
              <div className="w-1 h-1 bg-white/40 rounded-full"></div>
              <div className="text-white/60 font-medium text-sm">Noon Certified</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
