import { expect, test } from "@playwright/test";
import { login } from "../helpers.ts/login.ts";
import { userManagement } from "../helpers.ts/userManagementLocators.ts";
import { dashBoardPage } from "../helpers.ts/dashboardpageLocators.ts";
import { signInPage } from "../helpers.ts/signInPageLocators.ts";

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
await confirmButton.click(); 

const confirmDeactivation = page.locator('p:has-text("Are you sure you want to deactivate this user?")');
await expect(confirmDeactivation).toHaveText('Are you sure you want to deactivate this user?');

const deactivateStatus = page.locator(userManagement.deactivateStatus);
await expect(deactivateStatus).toHaveText('Inactive'); 

await page.locator(userManagement.signOut).click();

await login(page);

await expect(page).toHaveURL('http://10.10.10.118/Login%20Pages/sign-in.php');

//Error message for locked account
const lockedAccountError = await page.locator(signInPage.lockedAccountError);
await expect(lockedAccountError).toContainText(signInPage.lockedAccountMessage);
await expect(lockedAccountError).toBeVisible();

await page.goto('http://10.10.10.118/Login%20Pages/sign-in.php');
await page.fill('[id="email"]', 'bandile@whakindatec.com'); 
await page.fill('[id="password"]', 'DocuNation@135'); 
await page.click(signInPage.loginButton);

const menu = await page.locator(userManagement.menu);
await menu.click();

const reportsLink = page.locator(userManagement.report);
await reportsLink.click();

await menu.click();

const userManagementLink = await page.locator(userManagement.userManagement);
await userManagementLink.click();

await selectButton.click();

await page.click('a[data-id="646"][class="actionButton"]');

await page.click('#confirmActivation');

});
});

