import { expect, test } from "playwright/test";
import { landingPage } from "../helpers.ts/landingPageLocators";
import { config } from "../helpers.ts/config";
import { signInCredentials } from "../testdata/logincredentials.data";

test.beforeEach( async ({ page }) => {

    await page.goto(config.urls.login);
});

test.describe('Verify User Login Authentication', () => {
//DN-96

    test('User Successful Login', async ({ page }) => {
    
        const subHead = await page.locator(landingPage.loginPage.signInSubHead);
        await expect(subHead).toBeVisible();
        await expect(subHead).toHaveText(landingPage.loginPage.subHeading);
    
        const emailPlaceholder = await page.locator(landingPage.loginPage.emailFieldPlaceholder)
        await expect(emailPlaceholder).toBeVisible();
    
        const { email, password } = config.credentials;
        await page.fill(landingPage.loginPage.emailField, email);
    
        const emailField = await page.locator(landingPage.loginPage.emailField);
        await expect(emailField).toHaveValue(config.credentials.email);
    
        const passwordPlaceholder = await page.locator(landingPage.loginPage.emailFieldPlaceholder)
        await expect(passwordPlaceholder).toBeVisible();
    
        await page.fill(landingPage.loginPage.passwordField, password);
    
        const passwordField = await page.locator(landingPage.loginPage.passwordField);
        await expect(passwordField).toHaveValue(config.credentials.password);
    
        await page.click(landingPage.loginPage.loginButton);
    
        const message = await page.getByText(landingPage.dashBoardPage.welcomeMessage);
        await expect(message).toBeVisible();
    });
    
    test('Required Field Validation', async ({ page }) => {
    
        const subHead = await page.locator(landingPage.loginPage.signInSubHead);
        await expect(subHead).toBeVisible();
        await expect(subHead).toHaveText(landingPage.loginPage.subHeading);
    
        await page.click(landingPage.loginPage.loginButton);

        const requiredFields = await page.locator(landingPage.loginPage.requiredFieldError);
        await expect(requiredFields).toContainText(landingPage.loginPage.emailRequiredMessage);
        await expect(requiredFields).toContainText(landingPage.loginPage.passwordRequiredMessage);
        await expect(requiredFields).toHaveCSS('color', 'rgb(255, 0, 0)');
    });
    
    });
    
    test('Verify Secure User Login With Encryption', async ({ page }) => {
    //DN-97
    //Unable to validate that url contains https
    });
    
    test('Verify Account Locking After Multiple Unsuccessful Login Attempts', async ({ page }) => {
    //DN-98

        const subHead = await page.locator(landingPage.loginPage.signInSubHead);
        await expect(subHead).toBeVisible();
        await expect(subHead).toHaveText(landingPage.loginPage.subHeading);
    
        const emailPlaceholder = await page.locator(landingPage.loginPage.emailFieldPlaceholder)
        await expect(emailPlaceholder).toBeVisible();
    
        //First Attempt
        const { email, password } = config.credentials;
        await page.fill(landingPage.loginPage.emailField, email);
    
        const emailField = await page.locator(landingPage.loginPage.emailField);
        await expect(emailField).toHaveValue(config.credentials.email);
    
        const passwordPlaceholder = await page.locator(landingPage.loginPage.emailFieldPlaceholder)
        await expect(passwordPlaceholder).toBeVisible();
    
        await page.fill(landingPage.loginPage.passwordField, signInCredentials.invalidLoginPassword.attempt1);
    
        await page.click(landingPage.loginPage.loginButton);
    
        //First Error Message
        const firstAttemptError = await page.locator(landingPage.loginPage.wrongCredentialsError);
        await expect(firstAttemptError).toBeVisible();
        await expect(firstAttemptError).toContainText(landingPage.loginPage.wrongCredentialsMessage);
        await expect(firstAttemptError).toContainText(landingPage.loginPage.twoAttemptsLeftMessage);
        await expect(firstAttemptError).toHaveCSS('color', 'rgb(255, 0, 0)');
    
        //Second Attempt
        await page.fill(landingPage.loginPage.emailField, email);
    
        await page.fill(landingPage.loginPage.passwordField, signInCredentials.invalidLoginPassword.attempt2);
    
        await page.click(landingPage.loginPage.loginButton);
    
        //Second Error Message
        const secondAttemptError = await page.locator(landingPage.loginPage.wrongCredentialsError);
        await expect(secondAttemptError).toBeVisible();
        await expect(secondAttemptError).toContainText(landingPage.loginPage.wrongCredentialsMessage);
        await expect(secondAttemptError).toContainText(landingPage.loginPage.oneAttemptLeft);
        await expect(secondAttemptError).toHaveCSS('color', 'rgb(255, 0, 0)');
    
        //Third Attempt
        await page.fill(landingPage.loginPage.emailField, email);
    
        await page.fill(landingPage.loginPage.passwordField, signInCredentials.invalidLoginPassword.attempt3);
    
        await page.click(landingPage.loginPage.loginButton);
    
        //Last Error Message
        const thirdAttemptError = await page.locator(landingPage.loginPage.wrongCredentialsError);
        await expect(thirdAttemptError).toBeVisible();
        await expect(thirdAttemptError).toContainText(landingPage.loginPage.wrongCredentialsMessage);
        await expect(thirdAttemptError).toContainText(landingPage.loginPage.noAttemptsLeft);
        await expect(thirdAttemptError).toHaveCSS('color', 'rgb(255, 0, 0)');

    //DN-100: Verify Prevention of Login for Inactive Accounts

        //Attempting to Login After Account has been locked/deactivated
        await page.fill(landingPage.loginPage.emailField, email);
        await page.fill(landingPage.loginPage.passwordField, password);
        await page.click(landingPage.loginPage.loginButton);

    //DN-101: Verify Communication for Locked or Disabled User Account

        //Deactivated Account Error Message
        const lockedAccountError = await page.locator(landingPage.loginPage.lockedAccountError);
        await expect(lockedAccountError).toContainText(landingPage.loginPage.lockedAccountMessage);
        await expect(lockedAccountError).toBeVisible();
        await expect(lockedAccountError).toHaveCSS('color', 'rgb(255, 0, 0)');
    });
    
    test('Verify User-Friendly Feedback for Login Attempts', async ({ page }) => {
    //DN-99

        const subHead = await page.locator(landingPage.loginPage.signInSubHead);
        await expect(subHead).toBeVisible();
        await expect(subHead).toHaveText(landingPage.loginPage.subHeading);
    
        const emailPlaceholder = await page.locator(landingPage.loginPage.emailFieldPlaceholder)
        await expect(emailPlaceholder).toBeVisible();
    
        await page.locator(landingPage.loginPage.emailField).fill(signInCredentials.invalidEmail)
    
        const emailField = await page.locator(landingPage.loginPage.emailField);
        await expect(emailField).toHaveValue(signInCredentials.invalidEmail);
    
        const passwordPlaceholder = await page.locator(landingPage.loginPage.emailFieldPlaceholder)
        await expect(passwordPlaceholder).toBeVisible();
    
        await page.locator(landingPage.loginPage.passwordField).fill(config.credentials.password);
    
        const passwordField = await page.locator(landingPage.loginPage.passwordField);
        await expect(passwordField).toHaveValue(config.credentials.password);
    
        await page.click(landingPage.loginPage.loginButton);
    
        const firstAttemptError = await page.locator(landingPage.loginPage.noUserError);
        await expect(firstAttemptError).toHaveText(landingPage.loginPage.noUserMessage);
        await expect(firstAttemptError).toBeVisible();
        await expect(firstAttemptError).toHaveCSS('color', 'rgb(255, 0, 0)');
    });