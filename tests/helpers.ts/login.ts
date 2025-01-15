import { Page } from '@playwright/test';
import { config } from './config';
import { landingPage } from './landingPageLocators';

export async function login(page: Page): Promise<void> {
    const { email, password } = config.credentials;
  
    await page.goto(config.urls.login);
    await page.fill(landingPage.loginPage.emailField, email);
    await page.fill(landingPage.loginPage.passwordField, password);
    await page.click(landingPage.loginPage.loginButton);
}

  