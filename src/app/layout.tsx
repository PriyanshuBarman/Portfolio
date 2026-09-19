import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { META_THEME_COLORS, SITE_INFO, X_USERNAME } from "@/config/site";
import { cn } from "@/lib/utils";
import Providers from "@/components/providers";

import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  alternates: {
    canonical: "/",
  },
  title: {
    template: `%s – ${SITE_INFO.name}`,
    default: `${SITE_INFO.name} – Full Stack Developer`,
  },
  description: SITE_INFO.description,
  keywords: SITE_INFO.keywords,
  authors: {
    name: "Priyanshu Barman",
    url: SITE_INFO.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_INFO.url,
    title: SITE_INFO.name,
    description: SITE_INFO.description,
    siteName: SITE_INFO.name,
    images: [
      {
        url: SITE_INFO.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_INFO.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_INFO.name,
    description: SITE_INFO.description,
    creator: X_USERNAME,
    images: [
      {
        url: SITE_INFO.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_INFO.name,
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: META_THEME_COLORS.light,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        geistMono.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="flex min-h-full flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
