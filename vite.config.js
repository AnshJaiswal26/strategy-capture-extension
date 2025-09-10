import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, "src/extension"),
    emptyOutDir: true,
    cssCodeSplit: true,
    rollupOptions: {
      input: [path.resolve(__dirname, "src/content.jsx")],
      output: {
        entryFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@store": path.resolve(__dirname, "src/stores/useExtensionStore"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@data": path.resolve(__dirname, "src/data"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
    },
  },
});
