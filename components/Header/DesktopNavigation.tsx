import Link from "next/link";
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

interface NavLinkItemProps {
  href: string;
  children: React.ReactNode;
}

function NavLinkItem({ href, children }: NavLinkItemProps) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none rounded-sm px-4 py-2 text-white",
            "flex items-center justify-center text-xl font-medium",
            "transition-colors duration-300",
            "hover:bg-primary-400",
          )}
        >
          {children}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

function ServicesDropdown() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className={cn(
          "rounded-sm bg-transparent text-white px-4 py-5 text-xl",
          "transition-colors duration-300",
          "hover:bg-primary-400",
          "data-[state=open]:bg-primary-400",
        )}
      >
        Services
      </NavigationMenuTrigger>
      <NavigationMenuContent className="backdrop-blur-xl border border-white/20 z-50">
        <ul className="grid gap-1 w-max">
          {navigationLinks.services.map((link) => (
            <li key={link.name}>
              <NavigationMenuLink asChild>
                <Link
                  href={link.href}
                  className={cn(
                    "block select-none rounded-sm px-4 py-2 no-underline outline-none",
                    "transition-colors",
                    "hover:text-primary-400",
                    "focus:text-primary-400",
                  )}
                >
                  <span className="text-base font-medium">{link.name}</span>
                </Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

export default function DesktopNavigation() {
  return (
    <div className="flex-1 flex justify-center items-center">
      <NavigationMenu className="hidden lg:block" viewport={false}>
        <NavigationMenuList>
          <NavLinkItem href={navigationLinks.whatWeDo.href}>
            {navigationLinks.whatWeDo.name}
          </NavLinkItem>
          <ServicesDropdown />
          <NavLinkItem href={navigationLinks.why.href}>
            {navigationLinks.why.name}
          </NavLinkItem>
          <NavLinkItem href={navigationLinks.about.href}>
            {navigationLinks.about.name}
          </NavLinkItem>
          <NavLinkItem href={navigationLinks.contact.href}>
            {navigationLinks.contact.name}
          </NavLinkItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
