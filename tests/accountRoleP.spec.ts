
import { expect, test } from "@playwright/test";
import { login } from "./helpers.ts/login.ts";
import { userManagement } from "./helpers.ts/userManagementLocators.ts";
import { newUserDetails } from "./testdata/newUserDetails.data.ts";

test.describe('New User', () => {

test.beforeEach(async ({ page }) => {

await login(page);

const menu = await page.locator(userManagement.menu);
await menu.click();

const reportsLink = page.locator(userManagement.report);
await reportsLink.click();
    
await menu.click();

const userManagementLink = await page.locator(userManagement.userManagement);
await userManagementLink.click();


});

test('Navigating to roles and viewing them', async ({ page }) => {

    const roles = await page.locator('[id="role-dropdown"]');
    await expect(roles).toBeVisible();
    await roles.click();


});})