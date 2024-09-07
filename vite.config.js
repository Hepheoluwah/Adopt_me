import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src", // Your source directory
  build: {
    outDir: "../dist", // Output directory for the build
    rollupOptions: {
      input: {
        main: "./index.html", // Main entry point
      },
    },
  },
  base: "/", // Base path for the deployment, adjust if deploying to a subdirectory
});
