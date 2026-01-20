export const locales = ["en", "es", "pt"] as const;
export const defaultLocale = "en";

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  es: "Español",
  pt: "Português",
};

export const routing = {
  locales,
  defaultLocale,
  localePrefix: "as-needed" as const,
} as const;
