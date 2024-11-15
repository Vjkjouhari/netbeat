import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Specify the output directory
    outDir: "dist/client", // Ensure the output is in dist/client
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"), // Ensure the correct entry point
    },
  },
});