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

    const checkbox = await page.locator(userManagement.reactivateCheckbox);
    await checkbox.click();

    await page.getByPlaceholder('Bulk Action');
    const bulkDropdown = await page.locator(userManagement.bulkAction).first();
    await bulkDropdown.click();

    const activateButton = await page.locator(userManagement.activateAccount2);
    const activate = await activateButton.getByText(userManagement.activateAccount1);
    await activate.click();

    const reactivateButton = await page.getByText(userManagement.reactivateButton);
    await reactivateButton.click();

    // //Dn-124: Verify Confirmation Prompt for User Account Reactivation
    const confirmation = await page.locator(userManagement.activationNotification);
    await expect(confirmation).toContainText(userManagement.activationMessage);
    await expect(confirmation).toBeVisible();

    await confirmation.waitFor({state: 'hidden'});

    //DN-126: Verify Graceful Handling of Reactivation Errors
    await checkbox.click();

    await bulkDropdown.click();

    //During execution, the website tends to not fully load, it scrolls up and down before clicking on bulk dropdown which also does not fully load or appear.
    await activate.click();

    //The error message says the account is active but it appears as 'inactive' on the User Account Management page.
    const error = await page.locator(userManagement.alreadyActiveNotification)
    await expect(error).toHaveText(userManagement.alreadyActive)
    await expect(error).toBeVisible();
    
    await error.waitFor({state: 'hidden'});
});

test('Verify Feedback on User Account Reactivation Process', async ({ page }) => {
//DN-125
//No feedback is provided
});

test.afterEach( async ({ page }) => {

        //Deactivate accounts to allow test to run in a loop
        const checkbox = await page.locator(userManagement.reactivateCheckbox);
        await checkbox.click();//Click on the first user's checkBox
    
        await page.getByPlaceholder('Bulk Action');
        const bulkDropdown = await page.locator(userManagement.bulkAction).first();
        await bulkDropdown.click();//Click on the Bulk Action button
    
        const deactivateButton = await page.locator(userManagement.bulkDeactivateButton);
        await deactivateButton.click();//Click on  the Deactivate Button
        
        await page.locator(userManagement.confirmDeactivation).click();

        await page.locator(dashBoardPage.signOut).click();
        await page.close();
});
