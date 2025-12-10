"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { navigationLinks } from "./constants";
import { useContactModal } from "@/components/ContactModal";

interface NavLinkItemProps {
  href: string;
  children: React.ReactNode;
  pathname: string;
}

function NavLinkItem({ href, children, pathname }: NavLinkItemProps) {
  const [hash, setHash] = useState("");

  useEffect(() => {
    // Set initial hash
    setHash(window.location.hash);

    // Listen for hash changes
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // For contact link, only highlight when on home page AND hash is #contact
  // For other links, do exact match
  const isActive =
    href === "#contact"
      ? pathname === "/" && hash === "#contact"
      : href === pathname;

  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "relative block select-none rounded-sm px-4 py-2 text-white",
            "flex items-center justify-center text-base font-medium",
            "transition-all duration-300",
            "hover:bg-primary-400",
            isActive && "text-white"
          )}
        >
          {children}
          {isActive && (
            <span
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-8 bg-white rounded-full"
              aria-hidden="true"
            />
          )}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

interface ServicesDropdownProps {
  pathname: string;
}

function ServicesDropdown({ pathname }: ServicesDropdownProps) {
  const isServiceActive = navigationLinks.services.some(
    (service) => service.href === pathname
  );

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className={cn(
          "relative rounded-sm bg-transparent text-white px-4 py-5 text-base",
          "transition-all duration-300",
          "hover:bg-primary-400",
          "data-[state=open]:bg-primary-400",
          isServiceActive && "text-white"
        )}
      >
        Services
        {isServiceActive && (
          <span
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-8 bg-white rounded-full"
            aria-hidden="true"
          />
        )}
      </NavigationMenuTrigger>
      <NavigationMenuContent className="backdrop-blur-xl border border-white/20 z-50">
        <ul className="grid gap-1 w-max">
          {navigationLinks.services.map((link) => {
            const isActive = link.href === pathname;
            return (
              <li key={link.name}>
                <NavigationMenuLink asChild>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative block select-none rounded-sm px-4 py-2 no-underline outline-none",
                      "transition-all duration-300",
                      "hover:text-primary-400 hover:bg-white/5",
                      "focus:text-primary-400",
                      isActive && "text-primary-400 font-semibold bg-white/10"
                    )}
                  >
                    <span className="text-base font-medium">{link.name}</span>
                    {isActive && (
                      <span
                        className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-0.5 bg-primary-400 rounded-full"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </NavigationMenuLink>
              </li>
            );
          })}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

function ContactNavItem() {
  const { openModal } = useContactModal();

  return (
    <NavigationMenuItem>
      <button
        onClick={openModal}
        className={cn(
          "relative block select-none rounded-sm px-4 py-2 text-white",
          "flex items-center justify-center text-base font-medium",
          "transition-all duration-300",
          "hover:bg-primary-400"
        )}
      >
        {navigationLinks.contact.name}
      </button>
    </NavigationMenuItem>
  );
}

interface DesktopNavigationProps {
  pathname: string;
}

export default function DesktopNavigation({
  pathname,
}: DesktopNavigationProps) {
  return (
    <div className="flex-1 flex justify-center items-center">
      <NavigationMenu className="hidden lg:block" viewport={false}>
        <NavigationMenuList>
          <NavLinkItem href={navigationLinks.home.href} pathname={pathname}>
            {navigationLinks.home.name}
          </NavLinkItem>
          <NavLinkItem href={navigationLinks.whatWeDo.href} pathname={pathname}>
            {navigationLinks.whatWeDo.name}
          </NavLinkItem>
          <ServicesDropdown pathname={pathname} />
          <NavLinkItem href={navigationLinks.why.href} pathname={pathname}>
            {navigationLinks.why.name}
          </NavLinkItem>
          <NavLinkItem href={navigationLinks.about.href} pathname={pathname}>
            {navigationLinks.about.name}
          </NavLinkItem>
          <ContactNavItem />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
