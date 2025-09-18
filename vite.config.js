import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Use Terser instead of esbuild to avoid native binary crashes
    minify: "terser",
    terserOptions: {
      compress: true,
      mangle: true,
    },
    target: "esnext",
  },
});
