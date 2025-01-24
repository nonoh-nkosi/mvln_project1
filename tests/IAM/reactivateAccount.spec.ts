import { expect, test } from "playwright/test";
import { login } from "../helpers.ts/login";
import { userManagement } from "../helpers.ts/userManagementLocators";
import { landingPage } from "../helpers.ts/landingPageLocators";

test.beforeEach( async ({ page }) => {

    await login(page);

    await page.getByRole('link', { name: 'Menu' }).click();
    await page.getByText("Chart of Accounts").click()

    await page.click("text='Menu'");
});

test('Verify User Account Reactivation Process', async ({ page }) => {
//DN-123

//DN-127: Verify Restriction on Reactivation Feature Access
    const userManagementLink = await page.getByText("User Management");
    await expect(userManagementLink).toBeVisible();
    await expect(userManagementLink).toBeEnabled(); 

    await page.getByText("User Management").click();
    
    const heading = await page.getByText(userManagement.heading);
    await expect(heading).toBeVisible();

    await page.locator(userManagement.reactivateCheckbox).click();
    await page.click(userManagement.bulkAction);

    await page.locator(userManagement.activateAccount2).click();

    await page.getByText(userManagement.reactivateButton).click();
    // locator(userManagement.activateCode).

    // //Dn-124: Verify Confirmation Prompt for User Account Reactivation
    const confimation = await page.getByText(userManagement.activationMessage);
    await expect(confimation).toHaveText(userManagement.activationMessage);
    await expect(confimation).toBeVisible();

    await page.waitForSelector( userManagement.activationMessage, { state: 'hidden' });

    //DN-126: Verify Graceful Handling of Reactivation Errors
    await page.locator(userManagement.reactivateCheckbox).click();
    await page.click(userManagement.bulkAction);

    //During execution, the website tends to not fully load, it scrolls up and down before clicking on bulk dropdown which also does not fully load or appear.
    await page.getByText(userManagement.activateAccount1).click();

    await page.getByText(userManagement.reactivateButton).click();

    //The error message says the account is active but it appears as 'inactive' on the User Account Management page.
    const error = await page.getByText(userManagement.alreadyActive)
    await expect(error).toBeVisible();
    await expect(error).toHaveCSS('color', 'rgb(255, 0, 0)');
});

test('Verify Feedback on User Account Reactivation Process', async ({ page }) => {
//DN-125
//No feedback is provided
});

test.afterEach( async ({ page }) => {

        await page.locator(landingPage.dashBoardPage.signOut).click();
        await page.close();
});
