import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ mode }) => {
  // Load .env file based on `mode` (e.g., development, production)
  const env = loadEnv(mode, process.cwd(), "");
  return {
    server: {
      port: 5000, // Port for the shell application
      cors: true, // Enable CORS for development
    },
    plugins: [
      react(),
      federation({
        name: "products_shell_mfe",
        // remotes: {
        //   products_remote_mfe: `${process.env.PRODUCTS_REMOTE_MFE}assets/remoteEntry.js`,
        //   orders_remote_mfe: `${process.env.ORDERS_REMOTE_MFE}assets/remoteEntry.js`,
        // },
        remotes: {
          products_remote_mfe: `${env.VITE_PRODUCTS_REMOTE_MFE}assets/remoteEntry.js`,
          orders_remote_mfe: `${env.VITE_ORDERS_REMOTE_MFE}assets/remoteEntry.js`,
        },
        shared: ["react", "react-dom", "react-router-dom"],
      }),
    ],
    build: {
      target: "esnext",
      minify: false,
      cssCodeSplit: true,
    },
  };
});
