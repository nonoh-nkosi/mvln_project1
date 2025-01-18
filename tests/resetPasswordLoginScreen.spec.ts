import { expect, test } from "@playwright/test";
import { config } from "./helpers.ts/config";
import { landingPage } from "./helpers.ts/landingPageLocators";
import { forgotPassword } from "./helpers.ts/forgotPasswordLocators";

test.beforeEach( async ({ page }) => {

    await page.goto(config.urls.login);
});

test('Password Reset Option Availability on Login Screen', async ({ page }) => {

    const passwordReset = await page.locator(landingPage.loginPage.forgotPassword);
    await expect(passwordReset).toBeVisible();
    await expect(passwordReset).toBeEnabled();
    await expect(passwordReset).toHaveText('Forgot Password?');

    await page.click(landingPage.loginPage.forgotPassword);

});

test('Initiation of Password Reset Process via "Forgot Password" Link', async ({ page }) => {

    await page.locator(landingPage.loginPage.forgotPassword).click();

    const { email } = config.credentials;
    await page.fill(forgotPassword.emailField, email);
    await page.click(forgotPassword.getLink);

});

test('Password Reset Notification on Login Screen', async ({ page }) => {

    await page.click(landingPage.loginPage.forgotPassword);

    const { email } = config.credentials;
    await page.fill(forgotPassword.emailField, email);
    await page.click(forgotPassword.getLink);

    const resetNotification = await page.locator(forgotPassword.notification);
    await expect(resetNotification).toBeVisible();
    await expect(resetNotification).toHaveText(forgotPassword.confirmationMessage);
    await expect(resetNotification).toHaveCSS('color', 'rgb(0, 128, 0)');

});

test.afterEach( async ({ page }) => {

    await page.close();
});

