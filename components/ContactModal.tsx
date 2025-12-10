"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "./ContactForm";

interface ContactModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | null>(null);

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error("useContactModal must be used within ContactModalProvider");
  }
  return context;
}

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <ContactModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <ContactModal />
    </ContactModalContext.Provider>
  );
}

function ContactModal() {
  const { isOpen, closeModal } = useContactModal();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={closeModal}
          />
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-0 sm:p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full h-full sm:h-auto sm:max-w-xl pointer-events-auto"
            >
              <div className="relative bg-navy-900 sm:rounded-2xl shadow-2xl border-0 sm:border border-white/10 overflow-hidden h-full sm:h-auto overflow-y-auto">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="p-6 pt-14">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Get Your Free Assessment
                    </h2>
                    <p className="text-white/60 text-sm">
                      Tell us about your business and we&apos;ll create a custom logistics plan for you.
                    </p>
                  </div>

                  <ContactForm variant="assessment" />
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

interface ContactTriggerProps {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

export function ContactTrigger({ children, className, asChild }: ContactTriggerProps) {
  const { openModal } = useContactModal();

  if (asChild) {
    return (
      <span onClick={openModal} className={className}>
        {children}
      </span>
    );
  }

  return (
    <button onClick={openModal} className={className}>
      {children}
    </button>
  );
}
