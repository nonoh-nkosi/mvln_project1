import { expect, test } from "playwright/test";
import { login } from "../helpers.ts/login";
import { userManagement } from "../helpers.ts/userManagementLocators";
import { dashBoardPage } from "../helpers.ts/dashboardpageLocators";

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

    const activateButton = await page.getByText(userManagement.activateAccount1)
    await activateButton.click();
    // await page.locator(userManagement.activateAccount2).click();

    await page.getByText(userManagement.reactivateButton).click();

    // //Dn-124: Verify Confirmation Prompt for User Account Reactivation
    const confirmation = await page.locator(userManagement.activationNotification);
    await expect(confirmation).toContainText(userManagement.activationMessage);
    await expect(confirmation).toBeVisible();

    await confirmation.waitFor({state: 'hidden'});

    //DN-126: Verify Graceful Handling of Reactivation Errors
    await page.locator(userManagement.reactivateCheckbox).click();
    await page.click(userManagement.bulkAction);

    //During execution, the website tends to not fully load, it scrolls up and down before clicking on bulk dropdown which also does not fully load or appear.
    await activateButton.click();
    // await page.locator(userManagement.activateAccount2).click();

    await page.getByText(userManagement.reactivateButton).click();

    //The error message says the account is active but it appears as 'inactive' on the User Account Management page.
    const error = await page.locator(userManagement.alreadyActiveNotification)
    await expect(error).toContainText(userManagement.alreadyActive)
    await expect(error).toBeVisible();
    await expect(error).toHaveCSS('color', 'rgb(255, 0, 0)');
});

test('Verify Feedback on User Account Reactivation Process', async ({ page }) => {
//DN-125
//No feedback is provided
});

test.afterEach( async ({ page }) => {

        await page.locator(dashBoardPage.signOut).click();
        await page.close();
});
