"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutHighlights() {
  return (
    <section className="pt-28 pb-16 bg-surface-subtle">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-6"
        >
          <h1 className="text-display-lg text-foreground">
            Empowering E-commerce Success Across the GCC
          </h1>
          <p className="text-body-lg text-muted-foreground">
            Ebox Pro Logistics isn't just another fulfillment center—we're your
            strategic growth partner in the Gulf region. We understand that
            managing warehousing, inventory, and last-mile delivery shouldn't
            distract you from what matters most: scaling your brand and
            delighting your customers.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="tel:+971501234567" className="btn-primary">
              Discover More Via A Free Call
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
