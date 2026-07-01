import "@/styles/globals.css";
import { Toast } from "@heroui/react";
import { Metadata, Viewport } from "next";

import { ThemeProviders } from "@/providers/theme.provider";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { fontSans } from "@/config/fonts"; // import de fontS dans module scope
import { siteConfig } from "@/config/site";
import AuthProvider from "@/providers/auth.provider";
import QueryProvider from "@/providers/query-provider";
import { Figtree } from "next/font/google"; // font Google dans module scope

import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import DirectionProvider from "@/providers/direction-provider";
import MountedProvider from "@/providers/mounted.provider";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { getLangDir } from "rtl-detect";

// Charger Figtree dans le module scope
const figtreeFont = Figtree({ variable: "--font-figtree", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

// Pré-génère les routes de chaque langue (rendu statique / SSG pour le SEO).
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    return notFound();
  }

  // Active le rendu statique de next-intl pour ce locale.
  setRequestLocale(locale);

  const messages = await getMessages();
  const direction = getLangDir(locale);

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable,
          figtreeFont.variable
        )}
      >
        <GoogleAnalytics gaId="G-JD1Q4M38TD" />
        <GoogleTagManager gtmId="GTM-5PVHMR6J" />
        <NextIntlClientProvider messages={messages} locale={locale}>
          <QueryProvider>
            <ThemeProviders
              themeProps={{ attribute: "class", defaultTheme: "light" }}
            >
              <Toast.Provider placement="top" />
              <NuqsAdapter>
                <AuthProvider>
                  {/* <MountedProvider> */}
                    <DirectionProvider direction={direction}>
                      {children}
                    </DirectionProvider>
                  {/* </MountedProvider> */}
                </AuthProvider>
              </NuqsAdapter>
            </ThemeProviders>
          </QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
