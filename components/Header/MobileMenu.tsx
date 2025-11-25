"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import { navigationLinks } from "./constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
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
            className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-white z-40 lg:hidden flex flex-col"
          >
            {/* Menu Header with Logo and Close */}
            <div className="flex justify-between items-center p-6 border-b border-base-200">
              <Logo variant="dark" onClick={onClose} />
              <button
                onClick={onClose}
                className="rounded-full bg-base-100 transition-colors duration-300 hover:bg-base-200 flex justify-center items-center p-3"
              >
                <div className="relative flex flex-col justify-center items-center w-6 h-6">
                  <div className="absolute w-5 h-0.5 bg-base-900 rounded-full transform rotate-45" />
                  <div className="absolute w-5 h-0.5 bg-base-900 rounded-full transform -rotate-45" />
                </div>
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex-1 overflow-y-auto">
              <nav className="flex flex-col p-6">
                {/* What We Do Link */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    href={navigationLinks.whatWeDo.href}
                    className="flex items-center text-base-900 hover:text-primary-600 rounded-lg px-4 py-4 text-lg font-medium transition-colors border-b border-base-200"
                    onClick={onClose}
                  >
                    {navigationLinks.whatWeDo.name}
                  </Link>
                </motion.div>

                {/* Services Section */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                  className="border-b border-base-200"
                >
                  <div className="text-base-500 px-4 pt-6 pb-2 text-xs font-semibold uppercase tracking-wider">
                    Services
                  </div>
                  {navigationLinks.services.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="flex items-center text-base-700 hover:text-primary-600 hover:bg-base-50 rounded-lg px-4 py-3 text-base transition-colors"
                      onClick={onClose}
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.div>

                {/* Why Ebox Pro Link */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link
                    href={navigationLinks.why.href}
                    className="flex items-center text-base-900 hover:text-primary-600 rounded-lg px-4 py-4 text-lg font-medium transition-colors border-b border-base-200"
                    onClick={onClose}
                  >
                    {navigationLinks.why.name}
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
                    className="flex items-center text-base-900 hover:text-primary-600 rounded-lg px-4 py-4 text-lg font-medium transition-colors border-b border-base-200"
                    onClick={onClose}
                  >
                    {navigationLinks.about.name}
                  </Link>
                </motion.div>

                {/* Contact Us Link */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link
                    href={navigationLinks.contact.href}
                    className="flex items-center text-base-900 hover:text-primary-600 rounded-lg px-4 py-4 text-lg font-medium transition-colors border-b border-base-200"
                    onClick={onClose}
                  >
                    {navigationLinks.contact.name}
                  </Link>
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
              <Link
                href="#contact"
                className="btn-primary rounded-full text-white text-center px-6 py-4 text-2xl font-medium leading-6 no-underline w-full block transition-all duration-300 hover:bg-primary-hover"
                onClick={onClose}
              >
                Get Free Assessment
              </Link>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
