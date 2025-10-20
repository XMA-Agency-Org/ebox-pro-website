"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  services: [
    { name: "E-commerce Fulfillment", href: "#services" },
    { name: "Amazon & Noon Integration", href: "#services" },
    { name: "Same-Day Delivery", href: "#transport", new: true },
    { name: "Product Registration", href: "#capabilities" },
    { name: "B2B Distribution", href: "#services" },
    { name: "Returns Management", href: "#process" },
  ],
  solutions: [
    { name: "Multi-Channel Integration", href: "#capabilities" },
    { name: "WMS & OXM Platform", href: "#services", new: true },
    { name: "Inventory Management", href: "#services" },
    { name: "Custom Packaging", href: "#services" },
    { name: "Kitting & Bundling", href: "#services" },
    { name: "COD Processing", href: "#transport" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "How It Works", href: "#process" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact", new: true },
    { name: "Get Assessment", href: "#contact" },
  ],
};

const socialLinks = [
  {
    name: "Twitter",
    href: "https://www.x.com",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.4466 9.37414C20.89 9.62038 20.2996 9.78211 19.6952 9.85398C20.332 9.47278 20.8085 8.87309 21.036 8.16664C20.4376 8.52215 19.7827 8.77237 19.0996 8.90642C18.5231 8.29134 17.7173 7.94277 16.8742 7.94373C15.1904 7.94373 13.8248 9.30892 13.8248 10.9935C13.8248 11.2324 13.8522 11.4642 13.9035 11.6878C11.3681 11.5602 9.12193 10.3468 7.61745 8.50159C7.34657 8.96699 7.20421 9.49601 7.20493 10.0345C7.20493 11.0925 7.74346 12.0263 8.56151 12.573C8.07725 12.5576 7.60367 12.4269 7.18024 12.1914C7.17977 12.2042 7.17977 12.217 7.17977 12.2291C7.17977 13.7071 8.23098 14.94 9.62645 15.2199C9.36455 15.2908 9.0944 15.3266 8.82308 15.3264C8.62602 15.3264 8.43479 15.3082 8.24891 15.2726C8.63721 16.4838 9.76271 17.3657 11.0976 17.3899C10.0174 18.2377 8.68342 18.6977 7.31021 18.6957C7.06717 18.6959 6.82434 18.6816 6.58301 18.6528C7.97712 19.549 9.59986 20.0247 11.2572 20.0229C16.8668 20.0229 19.934 15.3762 19.934 11.3466C19.934 11.2147 19.9308 11.0824 19.9249 10.952C20.5219 10.5207 21.0372 9.98636 21.4466 9.37414Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.7506 6.70898C15.5712 6.71034 15.987 6.71468 16.3464 6.72538L16.4879 6.73001C16.6514 6.73582 16.8127 6.74311 17.0071 6.75222C17.783 6.78807 18.3123 6.91082 18.7772 7.09129C19.2578 7.27661 19.6637 7.52696 20.069 7.93226C20.4737 8.33755 20.724 8.74467 20.91 9.2241C21.0898 9.68833 21.2126 10.2182 21.249 10.9942C21.2577 11.1886 21.2647 11.3499 21.2705 11.5134L21.2751 11.6549C21.2857 12.0142 21.2906 12.4301 21.2921 13.2507L21.2927 13.7945C21.2928 13.8609 21.2928 13.9294 21.2928 14.0002L21.2927 14.2059L21.2923 14.7496C21.2909 15.5702 21.2866 15.986 21.2759 16.3454L21.2712 16.4869C21.2655 16.6504 21.2582 16.8117 21.249 17.0061C21.2132 17.7821 21.0898 18.3114 20.91 18.7762C20.7246 19.2568 20.4737 19.6627 20.069 20.068C19.6637 20.4727 19.2559 20.7231 18.7772 20.909C18.3123 21.0888 17.783 21.2116 17.0071 21.2481C16.8127 21.2567 16.6514 21.2637 16.4879 21.2695L16.3464 21.2741C15.987 21.2847 15.5712 21.2896 14.7506 21.2912L14.2068 21.2917C14.1404 21.2918 14.0719 21.2918 14.0011 21.2918L13.7954 21.2917L13.2517 21.2913C12.4311 21.2899 12.0152 21.2856 11.6559 21.2749L11.5144 21.2702C11.3509 21.2645 11.1896 21.2572 10.9951 21.2481C10.2192 21.2122 9.69052 21.0888 9.22508 20.909C8.74504 20.7237 8.33853 20.4727 7.93323 20.068C7.52794 19.6627 7.2782 19.255 7.09226 18.7762C6.91179 18.3114 6.78966 17.7821 6.7532 17.0061C6.74454 16.8117 6.73747 16.6504 6.73175 16.4869L6.72716 16.3454C6.71649 15.986 6.71163 15.5702 6.71006 14.7496L6.70996 13.2507C6.71132 12.4301 6.71566 12.0142 6.72635 11.6549L6.73098 11.5134C6.73679 11.3499 6.74409 11.1886 6.7532 10.9942C6.78905 10.2176 6.91179 9.68894 7.09226 9.2241C7.27759 8.74406 7.52794 8.33755 7.93323 7.93226C8.33853 7.52696 8.74565 7.27722 9.22508 7.09129C9.68992 6.91082 10.2186 6.78868 10.9951 6.75222C11.1896 6.74356 11.3509 6.7365 11.5144 6.73077L11.6559 6.72619C12.0152 6.71552 12.4311 6.71065 13.2517 6.70908L14.7506 6.70898ZM14.0011 10.3543C11.9865 10.3543 10.3553 11.9873 10.3553 14.0002C10.3553 16.0148 11.9883 17.646 14.0011 17.646C16.0157 17.646 17.647 16.0129 17.647 14.0002C17.647 11.9855 16.0139 10.3543 14.0011 10.3543ZM14.0011 11.8126C15.2093 11.8126 16.1886 12.7916 16.1886 14.0002C16.1886 15.2083 15.2096 16.1877 14.0011 16.1877C12.793 16.1877 11.8136 15.2086 11.8136 14.0002C11.8136 12.792 12.7926 11.8126 14.0011 11.8126ZM17.8293 9.26056C17.3266 9.26056 16.9178 9.66882 16.9178 10.1714C16.9178 10.674 17.3261 11.0829 17.8293 11.0829C18.3318 11.0829 18.7407 10.6746 18.7407 10.1714C18.7407 9.66882 18.3311 9.25992 17.8293 9.26056Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com",
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
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.1785 8.16626C14.5679 8.1684 15.5423 8.17782 16.5776 8.21929L16.9447 8.2353C17.987 8.28465 19.0285 8.36895 19.545 8.51298C20.234 8.70654 20.7756 9.27131 20.9586 9.98722C21.25 11.1241 21.2865 13.3429 21.291 13.8799L21.2917 13.9911V13.9989C21.2917 13.9989 21.2917 14.0016 21.2917 14.0068L21.291 14.1181C21.2865 14.655 21.25 16.8739 20.9586 18.0107C20.773 18.7293 20.2315 19.2941 19.545 19.485C19.0285 19.629 17.987 19.7133 16.9447 19.7626L16.5776 19.7786C15.5423 19.8201 14.5679 19.8295 14.1785 19.8317L14.0076 19.8323H14C14 19.8323 13.9974 19.8323 13.9924 19.8323L13.8216 19.8317C12.9974 19.8272 9.55107 19.7899 8.45498 19.485C7.76598 19.2914 7.22445 18.7266 7.04139 18.0107C6.74996 16.8739 6.71353 14.655 6.70898 14.1181V13.8799C6.71353 13.3429 6.74996 11.1241 7.04139 9.98722C7.22698 9.26866 7.76852 8.70389 8.45498 8.51298C9.55107 8.20799 12.9974 8.1708 13.8216 8.16626H14.1785ZM12.5417 11.4469V16.551L16.9167 13.9989L12.5417 11.4469Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("Newsletter signup:", email);
      setIsSubmitted(true);
      setHasError(false);
      setEmail("");
    } catch (error) {
      setHasError(true);
      setIsSubmitted(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-20 relative overflow-hidden"
    >
      {/* CTA Block */}
      <div
        className="z-[2] gap-10 rounded-3xl bg-secondary text-white text-center flex flex-col justify-center items-center w-full container-wide -mb-[158px] mx-auto p-12 relative"
        style={{
          backgroundImage:
            "url(https://cdn.prod.website-files.com/6684af61b1cc1eae182f04b5/6684af61b1cc1eae182f04d1_CTA%20BG.png)",
          backgroundPosition: "50% 0",
          backgroundRepeat: "no-repeat",
          backgroundSize: "988px",
        }}
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h3 className="text-3xl lg:text-6xl font-medium font-space-grotesk leading-tight tracking-tighter text-white">
              Launch in UAE in 2 Weeks
            </h3>
            <p className="text-base leading-6 text-primary-100">
              From consultation to your first order shipped. Join 100+ brands
              scaling with our tech-driven 3PL solutions.
            </p>
          </div>
          <div className="flex flex-row items-center justify-center font-space-grotesk flex-wrap gap-4">
            <div className="text-2xl font-medium text-white">99%+ Accuracy</div>
            <div className="bg-primary-50 w-1 h-1 mx-1 my-1 rounded-full"></div>
            <div className="text-2xl font-medium text-white">Same-Day UAE</div>
            <div className="bg-primary-50 w-1 h-1 mx-1 my-1 rounded-full"></div>
            <div className="text-2xl font-medium text-white">No MOQ</div>
          </div>
        </div>
        <Link
          href="/contact"
          className="bg-white text-neutral-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-surface-hover transition-colors inline-flex w-fit"
        >
          Get Free Assessment &nbsp;
          <span className="text-neutral-500">~ &nbsp;Ebox Pro</span>
        </Link>
      </div>

      {/* Footer Block */}
      <div className="bg-white/5 text-white flex flex-col justify-center w-full max-w-[1524px] mx-auto pt-[245px] pb-10 px-[4%] relative overflow-hidden">
        <div className="relative z-10">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12">
            {/* Main Column */}
            <div className="flex flex-col gap-6">
              <Link href="/" className="inline-block">
                <Image
                  src="/Ebox - Final Logo/ebox - final logo -11.svg"
                  alt="Ebox Pro Footer Logo"
                  width={500}
                  height={100}
                  className="h-24 w-auto"
                />
              </Link>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                <p className="text-sm leading-5 text-neutral-400">
                  Tech-driven 3PL solutions for UAE e-commerce. Same-day
                  delivery, 99%+ accuracy, no MOQ.
                </p>
              </div>
            </div>

            {/* Services Column */}
            <div className="flex flex-col gap-6">
              <div className="text-xs font-medium leading-5 tracking-wide text-white uppercase">
                Services
              </div>
              <div className="flex flex-col gap-6">
                {footerLinks.services.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-neutral-300 hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    <div>{link.name}</div>
                    {link.new && (
                      <div className="flex items-center gap-1 text-xs">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="8.00016"
                            cy="8.00016"
                            r="6.66667"
                            fill="#F74B45"
                            fillOpacity="0.16"
                          />
                          <circle cx="8" cy="8" r="2" fill="#F74B45" />
                        </svg>
                        <div>New</div>
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Solutions Column */}
            <div className="flex flex-col gap-6">
              <div className="text-xs font-medium leading-5 tracking-wide text-white uppercase">
                Solutions
              </div>
              <div className="flex flex-col gap-6">
                {footerLinks.solutions.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-neutral-300 hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    <div>{link.name}</div>
                    {link.new && (
                      <div className="flex items-center gap-1 text-xs">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="8.00016"
                            cy="8.00016"
                            r="6.66667"
                            fill="#F74B45"
                            fillOpacity="0.16"
                          />
                          <circle cx="8" cy="8" r="2" fill="#F74B45" />
                        </svg>
                        <div>New</div>
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Company Column */}
            <div className="flex flex-col gap-6">
              <div className="text-xs font-medium leading-5 tracking-wide text-white uppercase">
                Company
              </div>
              <div className="flex flex-col gap-6">
                {footerLinks.company.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-neutral-300 hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    <div>{link.name}</div>
                    {link.new && (
                      <div className="flex items-center gap-1 text-xs">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="8.00016"
                            cy="8.00016"
                            r="6.66667"
                            fill="#F74B45"
                            fillOpacity="0.16"
                          />
                          <circle cx="8" cy="8" r="2" fill="#F74B45" />
                        </svg>
                        <div>New</div>
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Legal */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-sm leading-6 text-neutral-400">
              © {new Date().getFullYear()} Ebox Pro. All rights reserved | Built
              by{" "}
              <Link
                href="https://xma.ae"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                XMA
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
