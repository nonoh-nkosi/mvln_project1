import { expect, test } from "@playwright/test";
import { login } from "./helpers.ts/login";
import { landingPage } from "./helpers.ts/landingPageLocators";
import { userManagement } from "./helpers.ts/userManagementLocators";

test.beforeEach( async ({ page }) => {

    await login(page);
    await page.getByRole('link', { name: 'Menu' }).click();
    await page.getByText("Chart of Accounts").click()

    await page.click("text='Menu'");
});

test('Verify Password Reset Functionality for User Accounts', async ({ page }) => {

    await page.getByText("User Management").click();

    const heading = await page.getByText(userManagement.heading);
    await expect(heading).toBeVisible();

    await page.click(userManagement.userElement);
    await page.getByLabel(userManagement.userInformation).getByText(userManagement.resetPassword1).click();

    await page.getByLabel(userManagement.userPasswordReset).getByText(userManagement.confirmReset1).click();
});

test('Notify User After Password Reset Initiation', async ({ page }) => {

    await page.getByText("User Management").click();

    await page.click(userManagement.userElement);
    await page.getByLabel(userManagement.userInformation).getByText(userManagement.resetPassword1).click();

    await page.getByLabel(userManagement.userPasswordReset).getByText(userManagement.confirmReset1).click();

    const resetPasswordMessage = await page.locator(userManagement.resetPasswordMessage);
    await expect(resetPasswordMessage).toBeVisible();
    await expect(resetPasswordMessage).toHaveCSS( 'color', 'rgb(0, 128, 0)');
    await expect(resetPasswordMessage).toHaveText('User Password reset is successfully sent');
});

test('Authenticate Company Administrator Before Password Reset', async ({ page }) => {

    const userManagementLink = await page.getByText("User Management");
    await expect(userManagementLink).toBeVisible();
    await expect(userManagementLink).toBeEnabled();  
});

test.afterEach( async ({ page }) => {

    await page.click(landingPage.dashBoardPage.signOut);
    await page.close();

});
