import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Transparent 1×1 PNG — used as a placeholder for Figma-native figma:asset/* imports
const TRANSPARENT_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    {
      name: "figma-asset-resolver",
      resolveId(id) {
        if (id.startsWith("figma:asset/")) {
          return "\0figma-asset:" + id.slice("figma:asset/".length);
        }
      },
      load(id) {
        if (id.startsWith("\0figma-asset:")) {
          return `export default "${TRANSPARENT_PNG}"`;
        }
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        pitch: path.resolve(__dirname, "pitch.html"),
        intro: path.resolve(__dirname, "intro.html"),
      },
    },
  },
}));
