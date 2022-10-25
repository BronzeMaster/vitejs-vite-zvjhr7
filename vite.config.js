import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    rollupOptions: {
      external: ["vue"],
      output: {
        format: "iife",
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});