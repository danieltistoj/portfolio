import { describe, expect, it } from "vitest";

import { cn } from "./utils";

describe("cn", () => {
  it("concatena clases simples", () => {
    expect(cn("a", "b")).toBe("a b");
  });

  it("descarta valores falsy", () => {
    expect(cn("a", false, undefined, null, "", "b")).toBe("a b");
  });

  it("aplica clases condicionales con objetos", () => {
    expect(cn("base", { active: true, hidden: false })).toBe("base active");
  });

  it("resuelve conflictos de Tailwind quedándose con la última", () => {
    expect(cn("p-2", "p-4")).toBe("p-4");
  });
});
