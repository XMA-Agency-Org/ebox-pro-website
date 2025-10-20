"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Ebox - Final Logo/ebox - final logo -11.svg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navigationLinks = {
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
  ],
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-30 bg-transparent">
        <div className="bg-transparent flex justify-center items-center py-8 px-4">
          <div className="flex justify-between items-center w-full container-wide px-4 gap-8">
            {/* Logo Left */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src={Logo}
                alt="Ebox Pro"
                width={120}
                height={40}
                className="h-16 w-auto"
              />
            </Link>

            {/* Navigation Center */}
            <div className="flex-1 flex justify-center items-center">
              <NavigationMenu className="hidden md:block">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="rounded-full bg-transparent text-white px-4 py-3 text-sm leading-6 transition-colors duration-300 hover:bg-white/10 hover:backdrop-blur-[8px] data-[state=open]:bg-white/10 data-[state=open]:backdrop-blur-[8px] data-[state=open]:text-white">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white/95 backdrop-blur-xl border border-white/20">
                      <ul className="grid gap-1 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                        {navigationLinks.services.map((link) => (
                          <li key={link.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={link.href}
                                className={cn(
                                  "block select-none rounded-md px-3 py-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                  "flex items-start justify-between",
                                )}
                              >
                                <span className="text-sm font-medium leading-none">
                                  {link.name}
                                </span>
                                {link.new && (
                                  <span className="flex items-center gap-1 text-xs">
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
                                      <circle
                                        cx="8"
                                        cy="8"
                                        r="2"
                                        fill="#F74B45"
                                      />
                                    </svg>
                                    <span>New</span>
                                  </span>
                                )}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="rounded-full bg-transparent text-white px-4 py-3 text-sm leading-6 transition-colors duration-300 hover:bg-white/10 hover:backdrop-blur-[8px] data-[state=open]:bg-white/10 data-[state=open]:backdrop-blur-[8px] data-[state=open]:text-white">
                      Solutions
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white/95 backdrop-blur-xl border border-white/20">
                      <ul className="grid gap-1 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                        {navigationLinks.solutions.map((link) => (
                          <li key={link.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={link.href}
                                className={cn(
                                  "block select-none rounded-md px-3 py-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                  "flex items-start justify-between",
                                )}
                              >
                                <span className="text-sm font-medium leading-none">
                                  {link.name}
                                </span>
                                {link.new && (
                                  <span className="flex items-center gap-1 text-xs">
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
                                      <circle
                                        cx="8"
                                        cy="8"
                                        r="2"
                                        fill="#F74B45"
                                      />
                                    </svg>
                                    <span>New</span>
                                  </span>
                                )}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="rounded-full bg-transparent text-white px-4 py-3 text-sm leading-6 transition-colors duration-300 hover:bg-white/10 hover:backdrop-blur-[8px] data-[state=open]:bg-white/10 data-[state=open]:backdrop-blur-[8px] data-[state=open]:text-white">
                      Company
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white/95 backdrop-blur-xl border border-white/20">
                      <ul className="grid gap-1 p-4 md:w-[300px]">
                        {navigationLinks.company.map((link) => (
                          <li key={link.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={link.href}
                                className={cn(
                                  "block select-none rounded-md px-3 py-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                  "flex items-start justify-between",
                                )}
                              >
                                <span className="text-sm font-medium leading-none">
                                  {link.name}
                                </span>
                                {link.new && (
                                  <span className="flex items-center gap-1 text-xs">
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
                                      <circle
                                        cx="8"
                                        cy="8"
                                        r="2"
                                        fill="#F74B45"
                                      />
                                    </svg>
                                    <span>New</span>
                                  </span>
                                )}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* CTA and Mobile Menu Right */}
            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center gap-2">
                <Link
                  href="#contact"
                  className="btn-secondary rounded-full text-white text-center px-4 py-3 text-sm font-medium leading-6 no-underline transition-all duration-300 hover:bg-primary-hover"
                >
                  Get Free Assessment
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="btn-secondary md:hidden rounded-full bg-transparent transition-colors duration-300 hover:bg-white/[0.08] hover:backdrop-blur-[8px] flex justify-center items-center p-3 min-h-[44px] min-w-[44px]"
              >
                <div className="flex flex-col justify-center items-center w-6 h-6 gap-1 p-0">
                  {isMobileMenuOpen ? (
                    <>
                      <div className="w-4 h-0.5 bg-white rounded-full transform rotate-45 translate-y-0.5"></div>
                      <div className="w-4 h-0.5 bg-white rounded-full transform -rotate-45 -translate-y-0.5"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-4 h-0.5 bg-white rounded-full"></div>
                      <div className="w-4 h-0.5 bg-white rounded-full"></div>
                      <div className="w-4 h-0.5 bg-white rounded-full"></div>
                    </>
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden rounded-b-3xl bg-black/[0.1] backdrop-blur-[10px] flex flex-col pb-8 overflow-hidden max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col">
              {/* Services Section */}
              <div className="border-b border-black/[0.08]">
                <div className="text-black px-4 py-4 text-xs font-medium uppercase tracking-wide">
                  Services
                </div>
                <div className="px-4 pb-4">
                  {navigationLinks.services.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="flex items-center justify-between text-black/80 hover:text-black px-2 py-3 text-sm transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>{link.name}</span>
                      {link.new && (
                        <span className="flex items-center gap-1 text-xs">
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
                          <span>New</span>
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Solutions Section */}
              <div className="border-b border-black/[0.08]">
                <div className="text-black px-4 py-4 text-xs font-medium uppercase tracking-wide">
                  Solutions
                </div>
                <div className="px-4 pb-4">
                  {navigationLinks.solutions.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="flex items-center justify-between text-black/80 hover:text-black px-2 py-3 text-sm transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>{link.name}</span>
                      {link.new && (
                        <span className="flex items-center gap-1 text-xs">
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
                          <span>New</span>
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Company Section */}
              <div className="border-b border-black/[0.08]">
                <div className="text-black px-4 py-4 text-xs font-medium uppercase tracking-wide">
                  Company
                </div>
                <div className="px-4 pb-4">
                  {navigationLinks.company.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="flex items-center justify-between text-black/80 hover:text-black px-2 py-3 text-sm transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>{link.name}</span>
                      {link.new && (
                        <span className="flex items-center gap-1 text-xs">
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
                          <span>New</span>
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-stretch justify-center mt-6 px-4 gap-2">
              <Link
                href="#contact"
                className="btn-secondary rounded-full text-white text-center px-4 py-3 text-sm font-medium leading-6 no-underline w-full transition-all duration-300 hover:bg-primary-hover"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Free Assessment
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
