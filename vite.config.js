import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src", // Source directory
  build: {
    outDir: "../dist", // Output directory for the production build
    rollupOptions: {
      input: {
        main: "src/index.html", // Correct path to your index.html inside the src folder
      },
    },
  },
  base: "/", // Base path for deployment, adjust if deploying to a subdirectory
});
