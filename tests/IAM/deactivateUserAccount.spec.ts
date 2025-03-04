import { expect, test } from "@playwright/test";
import { login } from "../helpers.ts/login.ts";
import { userManagement } from "../helpers.ts/userManagementLocators.ts";
import { dashBoardPage } from "../helpers.ts/dashboardpageLocators.ts";
import { signInPage } from "../helpers.ts/signInPageLocators.ts";
import { adminLogin } from "../helpers.ts/adminLogin.ts";
import { config } from "../helpers.ts/config.ts";
import { url } from "inspector";

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

    await confirmButton.click(); 

    const confirmDeactivation = page.locator(userManagement.confirmDeactivationMessage);
    await expect(confirmDeactivation).toHaveText('Are you sure you want to deactivate this user?');

    const deactivateStatus = page.locator(userManagement.deactivateStatus);
    await expect(deactivateStatus).toHaveText('Inactive'); 

    await page.locator(userManagement.signOut).click();

    await login(page);

    await expect(page).toHaveURL(config.urls.login);

    //Error message for locked account
    const lockedAccountError = await page.locator(signInPage.lockedAccountError);
    await expect(lockedAccountError).toContainText(signInPage.lockedAccountMessage);
    await expect(lockedAccountError).toBeVisible();
});

test.afterEach(async ({ page }) => {

    await adminLogin(page);

    const menu = await page.locator(userManagement.menu);
    await menu.click();
  
    const reportsLink = page.locator(userManagement.report);
    await reportsLink.click();

    await menu.click();

    const userManagementLink = await page.locator(userManagement.userManagement);
    await userManagementLink.click();

    const selectButton = page.locator(userManagement.bandileAccount).nth(7);
    await selectButton.click();

    await page.click(userManagement.deactivateButtonAdmin);

    await page.click(userManagement.confirmDeactivationAdmin);

    await page.locator(dashBoardPage.signOut).click();
    await page.close(); 
  });
});

