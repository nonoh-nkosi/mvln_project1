import { expect, test } from "@playwright/test";
import { login } from "./helpers.ts/login.ts";
import { userManagement } from "./helpers.ts/userManagementLocators.ts";
import { landingPage } from "./helpers.ts/landingPageLocators.ts"
import { newUserDetails } from "./testData/newUserDetails.data.ts";

test.describe('User management', () => {
    // beforeEach hook to navigate to two different pages before each test
    test.beforeEach(async ({ page }) => {
    
    await login(page);
    
    });
    test('Verify deactivation of user account', async ({ page }) => {


    await page.locator(userManagement.bandilebox).first() ;
    const checkBox = await page.locator(userManagement.bandilebox);
    await expect(checkBox).toBeVisible();
    await checkBox.click();
    

   //await page.click('.t-dropdown-list');

    /*
    const bulkActionDrop = await page.locator(userManagement.bulkAction);
    //await expect(bulkActionDrop).toHaveText('Bulk Action');
    await bulkActionDrop.click();*/

    const dropdownInput = page.locator('input[placeholder="Bulk Action"]');
    //await expect(dropdownInput).toHaveValue('Bulk action text');
    await dropdownInput.waitFor({ state: 'visible' });

  
    await page.locator(userManagement.bulkAction).click();
    const bulkActionDrop = page.locator(userManagement.bulkAction).nth(4);
    await bulkActionDrop.waitFor({ state: 'visible' });
    await bulkActionDrop.selectOption({ value: 'Deactivate' });

    /*await page.locator(userManagement.deactivateButton);
    const deactivateBtn = await page.locator(userManagement.deactivateButton);
    await expect(deactivateBtn).toBeEnabled();

    await deactivateBtn.waitFor({ state: 'visible', timeout: 60000 });
    await deactivateBtn.click({ force: true });*/

    const deactivateBtn = await page.locator(userManagement.deactivateButton);
    await deactivateBtn.selectOption(userManagement.deactivateButton);
    await deactivateBtn.click({ force: true });

    await page.locator(userManagement.confirmDeactivationBtn).click();
    const deactivateMsg = await page.locator(userManagement.confirmDeactivationBtn);
    await expect(deactivateMsg).toHaveText('Yes')
    await expect(deactivateMsg).toBeEnabled();

    const inactive = await page.locator(userManagement.inactive);
    await expect(inactive).toBeVisible();
    await expect(inactive).toHaveText('Inactive');

    
    });  
});
    
    