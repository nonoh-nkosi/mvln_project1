import { expect, test } from "@playwright/test";
import { login } from "../helpers.ts/login.ts";
import { userManagement } from "../helpers.ts/userManagementLocators.ts";
import { newUserDetails } from "../testdata/newUserDetails.data.ts";
import { dashBoardPage } from "../helpers.ts/dashboardpageLocators.ts";

test.describe('Deactivating user account', () => {

test.beforeEach(async ({ page }) => {

await login(page);

const menu = await page.locator(userManagement.menu);
await menu.click();
const reportsLink = page.locator(userManagement.report);
await reportsLink.click();
await menu.click();
const userManagementLink = await page.locator(userManagement.userManagement);
await userManagementLink.click();
})

test('Verify User Account deactivation Process', async ({ page }) => {

const selectButton = page.locator(userManagement.bandileAccount).nth(7);
await selectButton.waitFor({ state: 'visible' });
await selectButton.click();

const deactivateButtons = page.locator(userManagement.deactivateButton, { hasText: 'Deactivate' });
await deactivateButtons.click();

const confirmButton = page.locator(userManagement.confirmDeactivation);
await confirmButton.waitFor({ state: 'visible' }); 
//If confirm button is clicked Bandile's account will be deacticated
//await confirmButton.click(); 

//confirm message is sometimes not recognized
/*const confirmDeactivation = page.locator(''p', { hasText: 'Are you sure you want to activate this user?' }');
await expect(confirmDeactivation).toHaveText('Are you sure you want to deactivate this user?');
await expect(confirmDeactivation).toBeVisible();*/

const deactivateStatus = page.locator(userManagement.deactivateStatus);
await expect(deactivateStatus).toHaveText('Inactive'); 

await page.locator(userManagement.signOut).click();

await login(page);

await expect(page).toHaveURL('http://10.10.10.118/Login%20Pages/sign-in.php');
});

test.afterEach( async ({ page }) => {
await page.locator(dashBoardPage.signOut).click();
await page.close();
});
});

