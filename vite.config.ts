import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  define: {
    "process.env.SSO_CLIENT_URL": JSON.stringify("https://app-dev.2x22.com"),
    "process.env.SSO_SERVER_URL": JSON.stringify(
      "https://api-gw-dev.2x22.com/sso/api/v1",
    ),
  },
});
