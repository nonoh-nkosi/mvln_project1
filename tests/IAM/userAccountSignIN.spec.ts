import { expect, test } from "playwright/test";
import { signInPage } from "../helpers.ts/signInPageLocators";
import { dashBoardPage } from "../helpers.ts/dashboardpageLocators";
import { config } from "../helpers.ts/config";
import { signInCredentials } from "../testdata/logincredentials.data";

test.beforeEach( async ({ page }) => {

    await page.goto(config.urls.login);

    const subHead = await page.locator(signInPage.signInSubHead);
    await expect(subHead).toBeVisible();
    await expect(subHead).toHaveText(signInPage.subHeading);
});

test.describe('Verify User Login Authentication', () => {
//DN-96

    test('User Successful Login', async ({ page }) => {
    
        const emailPlaceholder = await page.locator(signInPage.emailFieldPlaceholder);
        await expect(emailPlaceholder).toBeVisible();
    
        const { email, password } = config.credentials;
        await page.fill(signInPage.emailField, email);
    
        const emailField = await page.locator(signInPage.emailField);
        await expect(emailField).toHaveValue(config.credentials.email);
    
        const passwordPlaceholder = await page.locator(signInPage.emailFieldPlaceholder);
        await expect(passwordPlaceholder).toBeVisible();
    
        await page.fill(signInPage.passwordField, password);
    
        const passwordField = await page.locator(signInPage.passwordField);
        await expect(passwordField).toHaveValue(config.credentials.password);
    
        await page.click(signInPage.loginButton);
    
        const message = await page.getByText(dashBoardPage.welcomeMessage);
        await expect(message).toBeVisible();

        await page.locator(dashBoardPage.signOut).click();
    });
    
    test('Required Field Validation', async ({ page }) => {
    
        await page.click(signInPage.loginButton);

        const requiredFields = await page.locator(signInPage.requiredFieldError);
        await expect(requiredFields).toContainText(signInPage.emailRequiredMessage);
        await expect(requiredFields).toContainText(signInPage.passwordRequiredMessage);
        await expect(requiredFields).toHaveCSS('color', 'rgb(255, 0, 0)');
    });
    });
    
    test('Verify Secure User Login With Encryption', async ({ page }) => {
    //DN-97
    //Unable to validate that url contains https
    });
    
    test('Verify Account Locking After Multiple Unsuccessful Login Attempts', async ({ page }) => {
    //DN-98
    
        const emailPlaceholder = await page.locator(signInPage.emailFieldPlaceholder);
        await expect(emailPlaceholder).toBeVisible();
    
        //First Attempt
        const { email, password } = config.credentials;
        await page.fill(signInPage.emailField, email);
    
        const emailField = await page.locator(signInPage.emailField);
        await expect(emailField).toHaveValue(config.credentials.email);
    
        const passwordPlaceholder = await page.locator(signInPage.emailFieldPlaceholder);
        await expect(passwordPlaceholder).toBeVisible();
    
        await page.fill(signInPage.passwordField, signInCredentials.invalidLoginPassword.attempt1);
    
        await page.click(signInPage.loginButton);
    
        //First Error Message
        const firstAttemptError = await page.locator(signInPage.wrongCredentialsError);
        await expect(firstAttemptError).toBeVisible();
        await expect(firstAttemptError).toContainText(signInPage.wrongCredentialsMessage);
        await expect(firstAttemptError).toContainText(signInPage.twoAttemptsLeftMessage);
        await expect(firstAttemptError).toHaveCSS('color', 'rgb(255, 0, 0)');
    
        //Second Attempt
        await page.fill(signInPage.emailField, email);
    
        await page.fill(signInPage.passwordField, signInCredentials.invalidLoginPassword.attempt2);
    
        await page.click(signInPage.loginButton);
    
        //Second Error Message
        const secondAttemptError = await page.locator(signInPage.wrongCredentialsError);
        await expect(secondAttemptError).toBeVisible();
        await expect(secondAttemptError).toContainText(signInPage.wrongCredentialsMessage);
        await expect(secondAttemptError).toContainText(signInPage.oneAttemptLeft);
        await expect(secondAttemptError).toHaveCSS('color', 'rgb(255, 0, 0)');
    
        //Third Attempt
        await page.fill(signInPage.emailField, email);
    
        await page.fill(signInPage.passwordField, signInCredentials.invalidLoginPassword.attempt3);
    
        await page.click(signInPage.loginButton);
    
        //Last Error Message
        const thirdAttemptError = await page.locator(signInPage.wrongCredentialsError);
        await expect(thirdAttemptError).toBeVisible();
        await expect(thirdAttemptError).toContainText(signInPage.wrongCredentialsMessage);
        await expect(thirdAttemptError).toContainText(signInPage.noAttemptsLeft);
        await expect(thirdAttemptError).toHaveCSS('color', 'rgb(255, 0, 0)');

    //DN-100: Verify Prevention of Login for Inactive Accounts

        //Attempting to Login After Account has been locked/deactivated
        await page.fill(signInPage.emailField, email);
        await page.fill(signInPage.passwordField, password);
        await page.click(signInPage.loginButton);

    //DN-101: Verify Communication for Locked or Disabled User Account

        //Deactivated Account Error Message
        const lockedAccountError = await page.locator(signInPage.lockedAccountError);
        await expect(lockedAccountError).toContainText(signInPage.lockedAccountMessage);
        await expect(lockedAccountError).toBeVisible();
        await expect(lockedAccountError).toHaveCSS('color', 'rgb(255, 0, 0)');
    });
    
    test('Verify User-Friendly Feedback for Login Attempts', async ({ page }) => {
    //DN-99
    
        const emailPlaceholder = await page.locator(signInPage.emailFieldPlaceholder);
        await expect(emailPlaceholder).toBeVisible();
    
        await page.locator(signInPage.emailField).fill(signInCredentials.invalidEmail);
    
        const emailField = await page.locator(signInPage.emailField);
        await expect(emailField).toHaveValue(signInCredentials.invalidEmail);
    
        const passwordPlaceholder = await page.locator(signInPage.emailFieldPlaceholder);
        await expect(passwordPlaceholder).toBeVisible();
    
        await page.locator(signInPage.passwordField).fill(config.credentials.password);
    
        const passwordField = await page.locator(signInPage.passwordField);
        await expect(passwordField).toHaveValue(config.credentials.password);
    
        await page.click(signInPage.loginButton);
    
        const firstAttemptError = await page.locator(signInPage.noUserError);
        await expect(firstAttemptError).toHaveText(signInPage.noUserMessage);
        await expect(firstAttemptError).toBeVisible();
        await expect(firstAttemptError).toHaveCSS('color', 'rgb(255, 0, 0)');
    });

    test.afterEach(async ({ page }) => {

        await page.close(); 
      });