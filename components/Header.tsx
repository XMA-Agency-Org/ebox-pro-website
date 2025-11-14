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
  home: { name: "Home", href: "/" },
  services: [
    { name: "Warehousing & Fulfillment", href: "#services" },
    { name: "Multi-Platform Integration", href: "#services" },
    { name: "UAE Market Entry Support", href: "#services" },
  ],
  about: { name: "About Us", href: "/about" },
  contact: { name: "Contact Us", href: "#contact" },
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-30 bg-transparent">
        <div className="bg-transparent flex justify-center items-center py-8">
          <div className="flex justify-between items-center w-full container-wide gap-8">
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
              <NavigationMenu className="hidden lg:block" viewport={false}>
                <NavigationMenuList>
                  {/* Home Link */}
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href={navigationLinks.home.href}
                        className={cn(
                          "block select-none rounded-md px-4 py-2 text-white hover:bg-white/10 hover:text-white transition-colors",
                          "flex items-center justify-center text-sm font-medium"
                        )}
                      >
                        {navigationLinks.home.name}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  {/* Services Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="rounded-full bg-transparent text-white px-4 py-3 text-sm leading-6 transition-colors duration-300 hover:bg-white/10 hover:backdrop-blur-sm data-[state=open]:bg-white/10 data-[state=open]:backdrop-blur-sm data-[state=open]:text-white">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white/95 backdrop-blur-xl border border-white/20">
                      <ul className="grid gap-1 w-max">
                        {navigationLinks.services.map((link) => (
                          <li key={link.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={link.href}
                                className={cn(
                                  "block select-none rounded-md px-3 py-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                )}
                              >
                                <span className="text-sm font-medium leading-none">
                                  {link.name}
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* About Us Link */}
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href={navigationLinks.about.href}
                        className={cn(
                          "block select-none rounded-md px-4 py-2 text-white hover:bg-white/10 hover:text-white transition-colors",
                          "flex items-center justify-center text-sm font-medium"
                        )}
                      >
                        {navigationLinks.about.name}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  {/* Contact Us Link */}
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href={navigationLinks.contact.href}
                        className={cn(
                          "block select-none rounded-md px-4 py-2 text-white hover:bg-white/10 hover:text-white transition-colors",
                          "flex items-center justify-center text-sm font-medium"
                        )}
                      >
                        {navigationLinks.contact.name}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* CTA and Mobile Menu Right */}
            <div className="flex items-center gap-2">
              <div className="hidden lg:flex items-center gap-2">
                <Link
                  href="#contact"
                  className="btn-primary rounded-full text-white text-center px-4 py-3 text-sm font-medium leading-6 no-underline transition-all duration-300 hover:bg-primary-hover"
                >
                  Get Free Assessment
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="btn-accent lg:hidden rounded-full bg-transparent transition-colors duration-300 hover:bg-white/8 hover:backdrop-blur-8 flex justify-center items-center p-3"
              >
                <div className="relative flex flex-col justify-center items-center w-6 h-6">
                  {isMobileMenuOpen ? (
                    <>
                      <div className="absolute w-5 h-0.5 bg-white rounded-full transform rotate-45"></div>
                      <div className="absolute w-5 h-0.5 bg-white rounded-full transform -rotate-45"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-5 h-0.5 bg-white rounded-full mb-1"></div>
                      <div className="w-5 h-0.5 bg-white rounded-full mb-1"></div>
                      <div className="w-5 h-0.5 bg-white rounded-full"></div>
                    </>
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden rounded-b-3xl bg-white/[0.95] backdrop-blur-xl border border-white/20 flex flex-col pb-8 overflow-hidden max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col">
              {/* Home Section */}
              <div className="border-b border-base-200">
                <div className="px-4 py-4">
                  <Link
                    href={navigationLinks.home.href}
                    className="flex items-center text-base-700 hover:text-base-900 hover:bg-base-50 rounded-md px-2 py-3 text-sm font-medium transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>{navigationLinks.home.name}</span>
                  </Link>
                </div>
              </div>

              {/* Services Section */}
              <div className="border-b border-base-200">
                <div className="text-base-900 px-4 py-4 text-xs font-medium uppercase tracking-wide">
                  Services
                </div>
                <div className="px-4 pb-4">
                  {navigationLinks.services.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="flex items-center justify-between text-base-700 hover:text-base-900 hover:bg-base-50 rounded-md px-2 py-3 text-sm transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* About Us Section */}
              <div className="border-b border-base-200">
                <div className="px-4 py-4">
                  <Link
                    href={navigationLinks.about.href}
                    className="flex items-center text-base-700 hover:text-base-900 hover:bg-base-50 rounded-md px-2 py-3 text-sm font-medium transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>{navigationLinks.about.name}</span>
                  </Link>
                </div>
              </div>

              {/* Contact Us Section */}
              <div className="border-b border-base-200">
                <div className="px-4 py-4">
                  <Link
                    href={navigationLinks.contact.href}
                    className="flex items-center text-base-700 hover:text-base-900 hover:bg-base-50 rounded-md px-2 py-3 text-sm font-medium transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>{navigationLinks.contact.name}</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-stretch justify-center mt-6 px-4 gap-2">
              <Link
                href="#contact"
                className="btn-primary rounded-full text-white text-center px-4 py-3 text-sm font-medium leading-6 no-underline w-full"
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
