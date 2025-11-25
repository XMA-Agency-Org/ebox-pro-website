"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SecondaryCallToActionProps {
  text: string;
  className?: string;
}

export default function SecondaryCallToAction({
  text,
  className,
}: SecondaryCallToActionProps) {
  return (
    <section className={cn("pb-24 bg-white", className)}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center py-12 px-6 rounded-2xl bg-linear-to-br from-primary/5 to-primary/10 border border-primary/20"
        >
          <p className="text-body-xl text-text-primary max-w-3xl mx-auto leading-relaxed">
            {text}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
