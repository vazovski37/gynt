"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import UnderConstructionDialog from "@/components/UnderConstructionDialog";
import "@/i18n";
import { LanguageProvider } from "@/lib/language-context"; // Import LanguageProvider

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" forcedTheme="dark">
      <LanguageProvider> {/* Wrap content with LanguageProvider */}
        {/* <UnderConstructionDialog /> */}
        <Navbar />
        <main>{children}</main>
        <Toaster />
      </LanguageProvider>
    </ThemeProvider>
  );
}
