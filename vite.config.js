import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path"; // 1. Import path

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	base: "/muhtasim-zawad-portfolio",
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"), // 2. Define the @ alias pointing to your src folder
		},
	},
});
