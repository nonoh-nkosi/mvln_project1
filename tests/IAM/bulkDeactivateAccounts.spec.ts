import { expect, test } from "@playwright/test";
import { login } from "../helpers.ts/login.ts";
import { userManagement } from "../helpers.ts/userManagementLocators.ts";
import { dashBoardPage } from "../helpers.ts/dashboardpageLocators.ts";

test.beforeEach(async ({ page }) => {

   await login(page);

   const menu = await page.locator(userManagement.menu);
   await menu.click();

   const reportsLink = page.locator(userManagement.report);
   await reportsLink.click();
     
   await menu.click();

   const userManagementLink = await page.locator(userManagement.userManagement);
   await userManagementLink.click();
});

test('Verify bulk deactivation to multiple accounts', async ({ page }) => {

    await page.click(userManagement.checkBox1);
    await page.click(userManagement.checkBox2);
    await page.click(userManagement.checkBox3);
 
    await page.click(userManagement.bulkAction);

    const deactivateButton = await page.locator(userManagement.bulkDeactivateButton);
    await deactivateButton.click();
    await page.locator(userManagement.confirmDeactivation).click();

    //Reactivating accounts
    await page.click(userManagement.checkBox1);
    await page.click(userManagement.checkBox2);
    await page.click(userManagement.checkBox3);
    
    await page.click(userManagement.bulkAction);
    
    const activateButton = await page.locator(userManagement.activateAccount2);
    await expect(activateButton).toBeVisible();
    await expect(activateButton).toHaveText(userManagement.activateAccount1);
    
    await activateButton.click();

    await page.click(dashBoardPage.signOut);
    await page.close();
});
