import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    coverage: {
      // Limitado a nuestro código fuente: sin esto, el provider v8 también
      // intenta instrumentar los chunks del build de Next en .next/ y falla.
      include: ["app/**", "components/**", "i18n/**", "lib/**", "middleware.ts"],
      // Composición de página y wrappers finos sin lógica propia: ver el
      // detalle en sonar.coverage.exclusions (sonar-project.properties).
      exclude: [
        "app/**",
        "components/ui/**",
        "i18n/navigation.ts",
        "i18n/request.ts",
        "middleware.ts",
        "**/*.test.{ts,tsx}",
      ],
    },
  },
});
