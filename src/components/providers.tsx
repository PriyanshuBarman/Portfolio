"use client";

import { GoogleAnalytics } from "@next/third-parties/google";

import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { ReactLenis } from "lenis/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ReactLenis root />
      <TooltipProvider>{children}</TooltipProvider>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
    </ThemeProvider>
  );
}
