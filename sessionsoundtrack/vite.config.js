import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  root: "sessionsoundtrack", // 👈 set the actual root
  plugins: [react()],
  build: {
    outDir: "../dist", // 👈 output dir relative to new root
    emptyOutDir: true, // clean old build files
  },
});
