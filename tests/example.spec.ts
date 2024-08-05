import { test, expect } from '@playwright/test';

test('example', async ({ page }) => {
	await page.goto('http://localhost:4200/');

	await expect(page).toHaveScreenshot('example-with-headless-true.png',);
});


