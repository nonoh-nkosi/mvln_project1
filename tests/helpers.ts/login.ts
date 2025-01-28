//This file contains the Login function

import { Page } from '@playwright/test';
import { config } from './config';
import { signInPage } from './signInPageLocators';

export async function login(page: Page): Promise<void> {
    const { email, password } = config.credentials;
  
    await page.goto(config.urls.login);
    await page.fill(signInPage.emailField, email);
    await page.fill(signInPage.passwordField, password);
    await page.click(signInPage.loginButton);
}

  