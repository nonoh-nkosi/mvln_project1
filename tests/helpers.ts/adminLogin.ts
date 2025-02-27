//This file contains the Admin Login function

import { Page } from '@playwright/test';
import { config } from './config';
import { signInPage } from './signInPageLocators';

export async function adminLogin(page: Page): Promise<void> {
    const { adminEmail, adminPassword } = config.credentials;
  
    await page.goto(config.urls.login);
    await page.fill(signInPage.emailField, adminEmail);
    await page.fill(signInPage.passwordField, adminPassword);
    await page.click(signInPage.loginButton);
}

  