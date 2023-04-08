import * as fs from "fs";
import * as path from "path";
import { test } from "@playwright/test";
import { parse } from "csv-parse/sync";

const getCurrentUsers = (): string[] => {
	return parse(fs.readFileSync(path.join("./tempAssets", "example.csv")), {
		columns: true,
		skip_empty_lines: true
	});
};

const getCurrentUserDetails = (parallelIndex: number): string => {
	let currentUsers = getCurrentUsers();
	let uniqueReference = (parallelIndex + 1) % currentUsers.length;
	return currentUsers[uniqueReference];
};

test.describe("Reusing Shared Data", () => {
	test.describe.configure({ mode: "parallel" });
	test("First", async ({ page }, testInfo) => {
		await page.waitForTimeout(5000);
		console.log(
			`Parallel Index of ${testInfo.parallelIndex} ${JSON.stringify(
				getCurrentUserDetails(testInfo.parallelIndex)
			)}`
		);
	});
	test("Second", async ({ page }, testInfo) => {
		await page.waitForTimeout(5000);
		console.log(
			`Parallel Index of ${testInfo.parallelIndex} ${JSON.stringify(
				getCurrentUserDetails(testInfo.parallelIndex)
			)}`
		);
	});
	test("Third", async ({ page }, testInfo) => {
		await page.waitForTimeout(5000);
		console.log(
			`Parallel Index of ${testInfo.parallelIndex} ${JSON.stringify(
				getCurrentUserDetails(testInfo.parallelIndex)
			)}`
		);
	});
	test("Fourth", async ({ page }, testInfo) => {
		await page.waitForTimeout(5000);
		console.log(
			`Parallel Index of ${testInfo.parallelIndex} ${JSON.stringify(
				getCurrentUserDetails(testInfo.parallelIndex)
			)}`
		);
	});
});
