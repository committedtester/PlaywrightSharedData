import { defineConfig } from "@playwright/test";

export default defineConfig({
	use: {
		browserName: "chromium",
		headless: true,
		viewport: { width: 1280, height: 720 },
		ignoreHTTPSErrors: true,
		video: "on-first-retry"
	},
	timeout: 30000,
	reporter: [
		["html", { open: "never", outputFolder: "./testOutput/reports/" }],
		["junit", { outputFile: "./testOutput/junit/junit.xml" }]
	],
	projects: [
		{
			name: "setup",
			testMatch: "**/*.setup.ts"
		},
		{
			name: "Default"
		}
	]
});
