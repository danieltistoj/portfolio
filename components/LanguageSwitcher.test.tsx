import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

const replace = vi.fn();

vi.mock("next-intl", () => ({
  useLocale: () => "en",
}));

vi.mock("../i18n/navigation", () => ({
  useRouter: () => ({ replace }),
  usePathname: () => "/en/some-section",
}));

import { LanguageSwitcher } from "./LanguageSwitcher";

describe("LanguageSwitcher", () => {
  it("muestra la etiqueta del locale actual", () => {
    render(<LanguageSwitcher />);
    expect(screen.getByText("English")).toBeInTheDocument();
  });

  it("al elegir otro idioma, navega sin el prefijo de locale anterior", async () => {
    const user = userEvent.setup();
    render(<LanguageSwitcher />);

    await user.click(screen.getByRole("combobox"));
    await user.click(screen.getByRole("option", { name: "Español" }));

    expect(replace).toHaveBeenCalledWith("/some-section", { locale: "es" });
  });
});
