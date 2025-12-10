"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { navigationLinks } from "./constants";
import { useContactModal } from "@/components/ContactModal";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

export default function MobileMenu({
  isOpen,
  onClose,
  pathname,
}: MobileMenuProps) {
  const [mounted, setMounted] = useState(false);
  const { openModal } = useContactModal();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleContactClick = () => {
    onClose();
    openModal();
  };

  const menuContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-9998 lg:hidden"
            onClick={onClose}
          />

          {/* Sliding Menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 300,
            }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-white z-9999 lg:hidden flex flex-col"
          >
            {/* Menu Header with Logo and Close */}
            <div className="flex justify-between items-center p-4 border-b border-base-200">
              <Logo variant="dark" onClick={onClose} />
              <button
                onClick={onClose}
                className="rounded-full bg-base-100 transition-colors duration-300 hover:bg-base-200 flex justify-center items-center p-3"
              >
                <div className="relative flex flex-col justify-center items-center w-5 h-5">
                  <div className="absolute w-4 h-0.5 bg-base-900 rounded-full transform rotate-45" />
                  <div className="absolute w-4 h-0.5 bg-base-900 rounded-full transform -rotate-45" />
                </div>
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex-1 overflow-y-auto">
              <nav className="flex flex-col p-6">
                {/* Home Link */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 }}
                >
                  <Link
                    href={navigationLinks.home.href}
                    className={cn(
                      "relative flex items-center rounded-lg px-4 py-4 text-lg font-medium transition-all border-b border-base-200",
                      pathname === navigationLinks.home.href
                        ? "text-primary-600 bg-primary-50 font-semibold"
                        : "text-base-900 hover:text-primary-600"
                    )}
                    onClick={onClose}
                  >
                    {navigationLinks.home.name}
                    {pathname === navigationLinks.home.href && (
                      <span
                        className="absolute right-4 top-1/2 -translate-y-1/2 h-2 w-2 bg-primary-600 rounded-full"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </motion.div>

                {/* What We Do Link */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    href={navigationLinks.whatWeDo.href}
                    className={cn(
                      "relative flex items-center rounded-lg px-4 py-4 text-lg font-medium transition-all border-b border-base-200",
                      pathname === navigationLinks.whatWeDo.href
                        ? "text-primary-600 bg-primary-50 font-semibold"
                        : "text-base-900 hover:text-primary-600"
                    )}
                    onClick={onClose}
                  >
                    {navigationLinks.whatWeDo.name}
                    {pathname === navigationLinks.whatWeDo.href && (
                      <span
                        className="absolute right-4 top-1/2 -translate-y-1/2 h-2 w-2 bg-primary-600 rounded-full"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </motion.div>

                {/* Services Section */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                  className="border-b border-base-200"
                >
                  <Link
                    href="#services"
                    onClick={(e) => e.preventDefault()}
                    className="relative flex items-center rounded-lg px-4 py-4 text-lg font-medium transition-all border-b border-base-200 text-base-900 hover:text-primary-600"
                  >
                    Services
                  </Link>
                  <div className="border-l-2 border-l-primary-200 my-2 ml-4">
                    {navigationLinks.services.map((link) => {
                      const isActive = link.href === pathname;
                      return (
                        <Link
                          key={link.name}
                          href={link.href}
                          className={cn(
                            "relative flex items-center rounded-lg pl-6 pr-4 py-3 text-base transition-all",
                            isActive
                              ? "text-primary-600 bg-primary-50 font-semibold"
                              : "text-base-700 hover:text-primary-600 hover:bg-base-50"
                          )}
                          onClick={onClose}
                        >
                          {link.name}
                          {isActive && (
                            <span
                              className="absolute right-4 top-1/2 -translate-y-1/2 h-2 w-2 bg-primary-600 rounded-full"
                              aria-hidden="true"
                            />
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Why Ebox Pro Link */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link
                    href={navigationLinks.why.href}
                    className={cn(
                      "relative flex items-center rounded-lg px-4 py-4 text-lg font-medium transition-all border-b border-base-200",
                      pathname === navigationLinks.why.href
                        ? "text-primary-600 bg-primary-50 font-semibold"
                        : "text-base-900 hover:text-primary-600"
                    )}
                    onClick={onClose}
                  >
                    {navigationLinks.why.name}
                    {pathname === navigationLinks.why.href && (
                      <span
                        className="absolute right-4 top-1/2 -translate-y-1/2 h-2 w-2 bg-primary-600 rounded-full"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </motion.div>

                {/* About Us Link */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <Link
                    href={navigationLinks.about.href}
                    className={cn(
                      "relative flex items-center rounded-lg px-4 py-4 text-lg font-medium transition-all border-b border-base-200",
                      pathname === navigationLinks.about.href
                        ? "text-primary-600 bg-primary-50 font-semibold"
                        : "text-base-900 hover:text-primary-600"
                    )}
                    onClick={onClose}
                  >
                    {navigationLinks.about.name}
                    {pathname === navigationLinks.about.href && (
                      <span
                        className="absolute right-4 top-1/2 -translate-y-1/2 h-2 w-2 bg-primary-600 rounded-full"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </motion.div>

                {/* Contact Us Link */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <button
                    onClick={handleContactClick}
                    className="relative flex items-center rounded-lg px-4 py-4 text-lg font-medium transition-all border-b border-base-200 text-base-900 hover:text-primary-600 w-full text-left"
                  >
                    {navigationLinks.contact.name}
                  </button>
                </motion.div>
              </nav>
            </div>

            {/* CTA Button at Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 border-t border-base-200"
            >
              <button
                onClick={handleContactClick}
                className="btn-primary rounded-full text-white text-center px-6 py-4 text-2xl font-medium leading-6 no-underline w-full block transition-all duration-300 hover:bg-primary-hover"
              >
                Get Free Assessment
              </button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  if (!mounted) return null;

  return createPortal(menuContent, document.body);
}
