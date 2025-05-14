"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/useLanguage";
import { cn } from "@/lib/utils";
import { ThemeToggleWithToast } from "./ThemeToggleWithToast";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";

const navItems = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "howItWorks", href: "/how-it-works" },
  { key: "participate", href: "/participate" },
  { key: "tournaments", href: "/tournaments" },
  { key: "news", href: "/news" },
  { key: "sponsors", href: "/sponsors" },
  { key: "contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation("navbar");
  return (
    <header className="w-full border-b bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-extrabold text-primary">
          GYNT
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex gap-4">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {t(item.key)}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <Select value={language} onValueChange={changeLanguage}>
            <SelectTrigger className="w-[70px] h-8 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">EN</SelectItem>
              <SelectItem value="ge">GE</SelectItem>
            </SelectContent>
          </Select>

          <ThemeToggleWithToast />
        </div>
      </div>
    </header>
  );
}
