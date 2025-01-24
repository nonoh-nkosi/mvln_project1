import { expect, test } from "@playwright/test";
import { login } from "./helpers.ts/login.ts";
import { userManagement } from "./helpers.ts/userManagementLocators.ts";
import { landingPage } from "./helpers.ts/landingPageLocators.ts"
import { newUserDetails } from "./testdata/newUserDetails.data.ts";
import exp from "constants";

test.describe('Deactivate user account', () => {

test.beforeEach(async ({ page }) => {

await login(page); 

const menu = await page.locator('[id="menuText"]');
await menu.click();

const reportsLink = page.locator(userManagement.report);
await reportsLink.click();
    
await menu.click();

const userManagementLink = await page.locator(userManagement.userManagement);
await userManagementLink.click();
    
    });
    test('Verify deactivation of user account', async ({ page }) => {

    await page.locator('.t-select-btn',).nth(3);
    await page.click('.t-select-btn');
    
    const bulkDropdown = await page.locator('.t-select-btn').nth(3);
    await bulkDropdown.click();

    const deactivateButton = await page.locator('a[data-id="648"]').nth(2);
    
    await page.click('a[data-id="648"]');

    /*const confirmMsg = await page.locator('h5.modal-title:has-text("Confirm Deactivation")').nth(3);
    await page.getByText('Confirm Deactivation');
    await expect(confirmMsg).toContainText('Confirm Deactivation');

    const confirmMsg2 = await page.locator('p:has-text("Are you sure you want to deactivate this user?")');
    await page.getByText('Are you sure you want to deactivate this user?');
    await expect(confirmMsg2).toBeVisible();*/
   
    const yesBtn = await page.locator('[id="confirmDeactivation"]');

    await page.getByText('YES');
    await expect(yesBtn).toBeVisible;
    //await expect(yesBtn).toHaveText('YES');
    await yesBtn.click();

    //Code repetition to verify deactivation
    const bulkDropdown1 = await page.locator('.t-select-btn').nth(3);
    await bulkDropdown.click();

    const deactivateButton1 = await page.locator('a:has-text("Deactivate")').nth(2);
    await deactivateButton.waitFor({ state: 'visible' }); 
    await deactivateButton.click();
    await expect(bulkDropdown).toHaveText('Deactivate');
    await expect(bulkDropdown).toBeVisible();
   
    //await page.locator(userManagement.cancel).click();

    

    //const inactive = await page.locator(userManagement.inactive);
//await expect(inactive).toBeVisible();
    //await expect(inactive).toHaveText('Inactive');

    
    });  
});
    
