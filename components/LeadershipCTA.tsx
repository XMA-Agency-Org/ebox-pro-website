"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Mail } from "lucide-react";

const benefits = [
  "Transparent pricing walkthrough",
  "Tech stack compatibility review",
  "Risk-free pilot recommendations",
];

export default function LeadershipCTA() {
  return (
    <section className="section-padding bg-linear-to-br from-secondary via-secondary to-secondary/90">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Leadership Line
          </p>
          <h2 className="text-display-lg text-white mb-6">
            Speak directly with the operators who run our network
          </h2>
          <p className="text-body-lg text-white/80 leading-relaxed">
            Skip the sales scripts. Book a 15-minute session with our founding
            team to review your current fulfillment setup, migration timeline,
            and what "day 30" looks like once you go live with Ebox Pro.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Benefits Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10"
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              What You'll Get
            </h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 text-white/90">
                  <CheckCircle className="w-5 h-5 shrink-0 text-primary mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
          >
            <div className="flex items-center gap-2 text-white/70 mb-6">
              <Clock className="w-5 h-5" />
              <p className="text-sm">
                Available Mon–Thu, 10am–4pm GST
              </p>
            </div>
            <p className="text-body-lg text-white/90 mb-8">
              We confirm every request within two business hours and get you on
              the calendar fast.
            </p>
            <div className="space-y-4">
              <Link
                href="#contact"
                className="btn-white text-secondary w-full text-center inline-block"
              >
                Request a Leadership Call
              </Link>
              <Link
                href="mailto:hello@eboxpro.com"
                className="flex items-center justify-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">Prefer email? hello@eboxpro.com</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

