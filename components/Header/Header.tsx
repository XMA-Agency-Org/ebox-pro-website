"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import DesktopNavigation from "./DesktopNavigation";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname()

  // Handle scroll to make header sticky
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    handleScroll()

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  function handleHeaderBackground() {
    if (pathname !== "/" ) {
      if (isScrolled) {
        return "fixed bg-black/35 backdrop-blur-sm"
      } else {
        return "fixed bg-transparent"
      }
    }


    if (isScrolled) {
      return "fixed bg-black/50 backdrop-blur-md"
    } else {
      return "relative bg-linear-to-r from-[#8A8C8C] via-[#939696] to-[#8A8C8C]"
    }
  }

  return (
    <>
      <header
        className={cn(
          "top-0 left-0 right-0 z-50 transition-all duration-300",
          handleHeaderBackground()
        )}
      >
        <div className="bg-transparent flex justify-center items-center py-4">
          <div className="flex justify-between items-center w-full container-wide gap-8">
            <Logo />
            <DesktopNavigation pathname={pathname} />

            {/* CTA and Mobile Menu Right */}
            <div className="flex items-center gap-2">
              <div className="hidden lg:flex items-center gap-2">
                <Link
                  href="#contact"
                  className="btn-primary rounded-full text-white text-center px-4 py-3 text-2xl font-medium leading-6 no-underline transition-all duration-300 hover:bg-primary-hover"
                >
                  Get Free Assessment
                </Link>
              </div>

              {!isMobileMenuOpen && (
                <MobileMenuButton
                  isOpen={isMobileMenuOpen}
                  onClick={toggleMobileMenu}
                />
              )}
            </div>
          </div>
        </div>

        <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} pathname={pathname} />
      </header>
    </>
  );
}
