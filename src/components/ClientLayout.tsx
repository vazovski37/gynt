"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import UnderConstructionDialog from "@/components/UnderConstructionDialog";
import "@/i18n";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {/* <UnderConstructionDialog /> */}
      <Navbar />
      <main>{children}</main>
      <Toaster />
    </ThemeProvider>
  );
}
