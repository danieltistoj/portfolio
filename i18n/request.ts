import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

import { type Locale, routing } from "./config";

export default getRequestConfig(async ({ locale }) => {
  const resolvedLocale: Locale =
    locale && routing.locales.includes(locale as Locale)
      ? (locale as Locale)
      : routing.defaultLocale;

  if (!routing.locales.includes(resolvedLocale)) {
    notFound();
  }

  return {
    locale: resolvedLocale,
    messages: (await import(`../messages/${resolvedLocale}.json`)).default,
  };
});
