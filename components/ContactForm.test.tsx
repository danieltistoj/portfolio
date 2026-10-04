import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key,
}));

import { ContactForm } from "./ContactForm";

describe("ContactForm", () => {
  it("muestra errores de validación al enviar vacío", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByRole("button", { name: "actions.submit" }));

    expect(await screen.findByText("errors.name")).toBeInTheDocument();
    expect(screen.getByText("errors.email")).toBeInTheDocument();
    expect(screen.getByText("errors.message")).toBeInTheDocument();
  });

  it("envía y muestra el mensaje de éxito con datos válidos", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText("fields.name"), "Jose Daniel");
    await user.type(screen.getByLabelText("fields.email"), "jose@example.com");
    await user.type(
      screen.getByLabelText("fields.message"),
      "Hola, quiero contactarte."
    );
    await user.click(screen.getByRole("button", { name: "actions.submit" }));

    expect(await screen.findByText("success")).toBeInTheDocument();
    expect(screen.getByLabelText("fields.name")).toHaveValue("");
  });

  it("no muestra errores de validación mientras no se envía", () => {
    render(<ContactForm />);

    expect(screen.queryByText("errors.name")).not.toBeInTheDocument();
    expect(screen.queryByText("errors.email")).not.toBeInTheDocument();
    expect(screen.queryByText("errors.message")).not.toBeInTheDocument();
  });

  it("espera a que termine el envío antes de limpiar el formulario", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText("fields.name"), "Jose Daniel");
    await user.type(screen.getByLabelText("fields.email"), "jose@example.com");
    await user.type(
      screen.getByLabelText("fields.message"),
      "Hola, quiero contactarte."
    );
    await user.click(screen.getByRole("button", { name: "actions.submit" }));

    await waitFor(() =>
      expect(screen.getByRole("button", { name: "actions.submit" })).not.toBeDisabled()
    );
  });
});
