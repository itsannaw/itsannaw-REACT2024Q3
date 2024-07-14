import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		globals: true,
		environment: "jsdom",
		include: ["**/*.test.js", "**/*.test.tsx"],
		coverage: {
			enabled: true,
			reporter: ["html"],
		},
	},
});
