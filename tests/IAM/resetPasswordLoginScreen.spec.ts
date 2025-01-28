import { expect, test } from "@playwright/test";
import { config } from "../helpers.ts/config";
import { signInPage } from "../helpers.ts/signInPageLocators";
import { forgotPassword } from "../helpers.ts/forgotPasswordLocators";

test.beforeEach( async ({ page }) => {

    await page.goto(config.urls.login);
});

test('Password Reset Option Availability on Login Screen', async ({ page }) => {

    const passwordReset = await page.locator(signInPage.forgotPassword);
    await expect(passwordReset).toBeVisible();
    await expect(passwordReset).toBeEnabled();
    await expect(passwordReset).toHaveText('Forgot Password?');

    await page.click(signInPage.forgotPassword);
});

test('Initiation of Password Reset Process via "Forgot Password" Link', async ({ page }) => {

    await page.locator(signInPage.forgotPassword).click();

    const heading = await page.getByText(forgotPassword.forgotPasswordHeading);

    const { email } = config.credentials;
    await page.fill(forgotPassword.emailField, email);
    await page.click(forgotPassword.getLink);
});

test('Password Reset Notification on Login Screen', async ({ page }) => {

    await page.click(signInPage.forgotPassword);

    const heading = await page.getByText(forgotPassword.forgotPasswordHeading);

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

