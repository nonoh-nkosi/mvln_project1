   
import { expect, test } from "@playwright/test";
import { login } from "../helpers.ts/login.ts";
import { userManagement } from "../helpers.ts/userManagementLocators.ts";
import { newUserDetails } from "../testdata/newUserDetails.data.ts";
import { dashBoardPage } from "../helpers.ts/dashboardpageLocators.ts";

test.describe('Deactivating user account', () => {

    test.beforeEach(async ({ page }) => {
    
    await login(page);
    
    const menu = await page.locator(userManagement.menu);
    await menu.click();
    
    const reportsLink = page.locator(userManagement.report);
    await reportsLink.click();
        
    await menu.click();
    
    const userManagementLink = await page.locator(userManagement.userManagement);
    await userManagementLink.click();
    })

test('Verify User Account Reactivation Process', async ({ page }) => {
        
    await page.locator(userManagement.deactivateCheckbox).click();
    await page.click(userManagement.bulkAction);

    await page.locator(userManagement.deactivateAccount2).click();

    await page.getByText(userManagement.deactivateButton).click();

            /*const confirmation = await page.locator(userManagement.activationNotification);
            await expect(confirmation).toContainText(userManagement.activationMessage);
            await expect(confirmation).toBeVisible();
        
            await page.waitForSelector( userManagement.activationMessage, { state: 'hidden' });
        
            //DN-126: Verify Graceful Handling of Reactivation Errors
            await page.locator(userManagement.reactivateCheckbox).click();
            await page.click(userManagement.bulkAction);
        
            //During execution, the website tends to not fully load, it scrolls up and down before clicking on bulk dropdown which also does not fully load or appear.
            await page.locator(userManagement.activateAccount2).click();
        
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
        
    });

