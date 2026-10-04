import type { Metadata } from "next";
import { Atkinson_Hyperlegible, IBM_Plex_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

import { locales } from "../../i18n/config";
import "../globals.css";

const fontBody = Atkinson_Hyperlegible({
  variable: "--font-body",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const fontMono = IBM_Plex_Mono({
  variable: "--font-mono-code",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jose Daniel Tistoj Reyes | Backend Developer",
  description:
    "Backend developer portfolio with experience in scalable systems, REST APIs, and microservices.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${fontBody.variable} ${fontMono.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
