import { expect, test } from "@playwright/test";
import { login } from "../helpers.ts/login";
import { userManagement } from "../helpers.ts/userManagementLocators";
import { newUserDetails } from "../testdata/newUserDetails.data";
import { dashBoardPage } from "../helpers.ts/dashboardpageLocators";

test.beforeEach(async ({ page }) => {
  
await login(page); 

const menu = await page.locator(userManagement.menu);
await menu.click();

const reportsLink = page.locator(userManagement.report);
await reportsLink.click();
    
await menu.click();

const settingsLink = await page.locator(userManagement.settingLink);
await settingsLink.click();
});

test('Company profile section accessibility', async ({ page }) => {

    const expensesLink = await page.locator(userManagement.expenseLink);
    await page.locator(userManagement.expenseLink).waitFor({ state: 'hidden' });

    const companyDetailsLink = await page.locator(userManagement.companyDetailsLink);
    await companyDetailsLink.scrollIntoViewIfNeeded();
    await page.locator(userManagement.companyDetailsActive).waitFor
    await companyDetailsLink.click({ force: true });

    const companyName = await page.locator(userManagement.companyName).first();
    await companyName.fill('');  
    await companyName.fill('Essential Fuels (PTY) (LTD)40');

    const value = await companyName.inputValue();
    expect(value).toBe('Essential Fuels (PTY) (LTD)40');

    //const saveButton = await page.locator('button', { hasText: 'Save changes' });
    const saveButton = await page.getByRole('button', { name: 'Save changes' })
    await expect(saveButton).toBeVisible();
    await saveButton.click();

    //const successMessage = await page.locator('p');
    //await expect(successMessage).toBeVisible();

    await companyName.fill('');  
    await companyName.fill('Essential Fuels (PTY) (LTD)20');
    await saveButton.click();
    });

