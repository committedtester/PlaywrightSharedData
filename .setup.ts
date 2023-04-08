import { test as setup } from "@playwright/test";
import { stringify } from "csv-stringify";
import * as path from "path";
import * as fs from "fs";

export interface TestUser {
	user: string;
	emailAddress: string;
}

setup("Create CSV Data As Example", async ({ page }) => {
	const testData: TestUser[] = [
		{
			user: "Aaron",
			emailAddress: "aaron@test.com"
		},
		{
			user: "Bob",
			emailAddress: "bob@test.com"
		},
		{
			user: "Steve",
			emailAddress: "steve@test.com"
		},
		{
			user: "John",
			emailAddress: "john@test.com"
		},
		{
			user: "Andrew",
			emailAddress: "andrew@test.com"
		},
		{
			user: "Sarah",
			emailAddress: "sarah@test.com"
		}
	];
	const csvData = stringify(testData, { header: true });
	await fs.promises.writeFile(path.join("./tempAssets", "example.csv"), csvData);
});
