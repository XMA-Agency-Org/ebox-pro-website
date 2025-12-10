"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "@/components/Logo";
import { useContactModal } from "@/components/ContactModal";

const navigationLinks = {
  services: [
    { name: "Warehousing & Storage", href: "/services/warehousing" },
    { name: "Order Fulfillment", href: "/services/order-fulfillment" },
    { name: "Marketplace Fulfillment", href: "/services/marketplace-fulfillment" },
    { name: "Distribution & Market Entry", href: "/services/distribution" },
    { name: "Customization & Branding", href: "/services/customization" },
  ],
  company: [
    { name: "What We Do", href: "/what-we-do" },
    { name: "Why Ebox Pro", href: "/why-ebox-pro" },
    { name: "About Us", href: "/about" },
  ],
};

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/ebox-pro-logistics-llc/",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.84 10.25H6.17V21.25H8.84V10.25ZM7.5 6.5C6.67 6.5 6 7.17 6 8C6 8.83 6.67 9.5 7.5 9.5C8.33 9.5 9 8.83 9 8C9 7.17 8.33 6.5 7.5 6.5ZM15.5 10.25C14.05 10.25 13.02 10.95 12.5 11.75V10.25H9.83V21.25H12.5V15.25C12.5 13.87 13.38 13 14.5 13C15.62 13 16.33 13.67 16.33 15.08V21.25H19V14.5C19 11.75 17.25 10.25 15.5 10.25Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/16uacA2JB3/",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.0016 6.70813C9.97455 6.70813 6.70996 9.97272 6.70996 13.9998C6.70996 17.6393 9.37642 20.6558 12.8623 21.2029V16.1075H11.0109V13.9998H12.8623V12.3934C12.8623 10.5659 13.9509 9.55644 15.6165 9.55644C16.4142 9.55644 17.2487 9.69885 17.2487 9.69885V11.4933H16.3292C15.4234 11.4933 15.141 12.0554 15.141 12.632V13.9998H17.1632L16.84 16.1075H15.141V21.2029C18.6268 20.6558 21.2933 17.6393 21.2933 13.9998C21.2933 9.97272 18.0287 6.70813 14.0016 6.70813Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  const { openModal } = useContactModal();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden footer-bg"
    >
      {/* Footer Block */}
      <div className="flex flex-col justify-center w-full container-wide pt-16 pb-10 relative overflow-hidden">
        <div className="relative z-10">
          {/* Footer Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
            {/* Brand Column */}
            <div className="">
              <div className="mb-2">
                <Logo variant="dark" size="lg" />
              </div>
              <p className="text-sm leading-relaxed footer-text max-w-xs mb-6">
                Tech-driven 3PL warehousing and fulfillment at the speed of now. Your strategic partner for <span className="whitespace-nowrap">e-commerce</span> growth in the UAE.
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:opacity-80 footer-text"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Services Column */}
            <div className="flex flex-col gap-3">
              <div className="text-xs font-bold leading-5 tracking-wide uppercase footer-heading">
                Services
              </div>
              <div className="flex flex-col gap-3">
                {navigationLinks.services.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="transition-colors text-sm hover:opacity-80 footer-text"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Company Column */}
            <div className="flex flex-col gap-3">
              <div className="text-xs font-bold leading-5 tracking-wide uppercase footer-heading">
                Company
              </div>
              <div className="flex flex-col gap-3">
                {navigationLinks.company.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="transition-colors text-sm hover:opacity-80 footer-text"
                  >
                    {link.name}
                  </Link>
                ))}
                <button
                  onClick={openModal}
                  className="transition-colors text-sm hover:opacity-80 footer-text text-left"
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Contact Column */}
            <div className="flex flex-col gap-3">
              <div className="text-xs font-bold leading-5 tracking-wide uppercase footer-heading">
                Contact
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 mt-0.5 text-primary"
                  >
                    <path
                      d="M10 10C11.3807 10 12.5 8.88071 12.5 7.5C12.5 6.11929 11.3807 5 10 5C8.61929 5 7.5 6.11929 7.5 7.5C7.5 8.88071 8.61929 10 10 10Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M10 17.5C13.3333 14.1667 16.25 11.2426 16.25 8.125C16.25 4.67525 13.4518 2.5 10 2.5C6.54822 2.5 3.75 4.67525 3.75 8.125C3.75 11.2426 6.66667 14.1667 10 17.5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <div className="flex flex-col gap-1">
                    <div className="text-sm footer-text">Dubai, UAE</div>
                  </div>
                </div>
                <a
                  href="tel:+971563562153"
                  className="flex items-center gap-3 transition-colors hover:opacity-80"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 text-primary"
                  >
                    <path
                      d="M3.75 5C3.75 4.30964 4.30964 3.75 5 3.75H6.87868C7.24114 3.75 7.56613 3.98439 7.68075 4.32848L8.79543 7.55812C8.88834 7.83776 8.81607 8.14693 8.60658 8.35642L7.14645 9.81655C7.63228 10.8789 8.62107 11.8677 9.68345 12.3536L11.1436 10.8934C11.3531 10.6839 11.6622 10.6117 11.9419 10.7046L15.1715 11.8192C15.5156 11.9339 15.75 12.2589 15.75 12.6213V14.5C15.75 15.1904 15.1904 15.75 14.5 15.75H13.5C7.97715 15.75 3.75 11.5228 3.75 6V5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <div className="text-sm footer-text">+971 56 356 2153</div>
                </a>
                <a
                  href="mailto:hi@eboxprologistics.com"
                  className="flex items-center gap-3 transition-colors hover:opacity-80"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 text-primary"
                  >
                    <path
                      d="M2.5 6.25L9.42462 10.7131C9.78486 10.9291 10.2151 10.9291 10.5754 10.7131L17.5 6.25M4.16667 15H15.8333C16.7538 15 17.5 14.2538 17.5 13.3333V6.66667C17.5 5.74619 16.7538 5 15.8333 5H4.16667C3.24619 5 2.5 5.74619 2.5 6.66667V13.3333C2.5 14.2538 3.24619 15 4.16667 15Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <div className="text-sm footer-text">hi@eboxprologistics.com</div>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Legal */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8 border-t footer-border">
            <div className="text-sm leading-6 footer-text">
              <span className="opacity-50">
                © {new Date().getFullYear()} Ebox Pro. All rights reserved | Built
                by{" "}
              </span>
              <Link
                href="https://xma.ae"
                target="_blank"
                className="text-sm footer-text opacity-50 hover:opacity-100 transition-opacity"
              >
                XMA
              </Link>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className="text-sm footer-text opacity-50 hover:opacity-80 transition-opacity"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm footer-text opacity-50 hover:opacity-80 transition-opacity"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookie-policy"
                className="text-sm footer-text opacity-50 hover:opacity-80 transition-opacity"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
