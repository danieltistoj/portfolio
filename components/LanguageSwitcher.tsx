"use client";

import * as React from "react";
import { useLocale } from "next-intl";

import { localeLabels, locales } from "../i18n/config";
import { usePathname, useRouter } from "../i18n/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = React.useCallback(
    (nextLocale: string) => {
      const localePrefixPattern = new RegExp(`^/(${locales.join("|")})(/|$)`);
      const normalizedPathname = pathname.replace(localePrefixPattern, "/");
      router.replace(normalizedPathname, { locale: nextLocale });
    },
    [pathname, router]
  );

  return (
    <Select value={locale} onValueChange={handleChange}>
      <SelectTrigger aria-label="Language">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {locales.map((option) => (
          <SelectItem key={option} value={option}>
            {localeLabels[option]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
