import { expect, test } from "@playwright/test";
import { login } from "../helpers.ts/login.ts";
import { dashBoardPage } from "../helpers.ts/dashboardpageLocators.ts";
import { singleRole } from "../testdata/accountRole.data.ts";
import { userManagement } from "../helpers.ts/userManagementLocators.ts";

test.describe('Account Roles', () => {

    test.beforeEach(async ({ page }) => {
    
    await login(page);
    
    await login(page); 
    
    const menu = await page.locator(userManagement.menu);
    await menu.click();
    
    const reportsLink = page.locator(userManagement.report);
    await reportsLink.click();
        
    await menu.click();
    
    const userManagementLink = await page.locator(userManagement.userManagement);
    await userManagementLink.click();

})

})

  test('Edit account roles', async ({ page }) => {

    await page.locator(userManagement.cBox1).click();
    await page.locator(userManagement.cBox2).click();
    await page.click(userManagement.bulkAction);
    
    await page.locator(userManagement.bulkDropdown).getByText(userManagement.updateUserRole).click();

    const bulkDropdown = page.locator(userManagement.bulkActionSelect);
    await bulkDropdown.selectOption(singleRole.role1);

    await page.locator(userManagement.bulkConfirm2).click();
    
  });
  
  test('Preview account role changes before applying', async ({ page }) => {
   
    await page.locator(userManagement.cBox2).click();
    await page.click(userManagement.bulkAction);
    
    await page.locator(userManagement.bulkDropdown).getByText(userManagement.updateUserRole2).click();

    const bulkDropdown = page.locator(userManagement.bulkActionSelect2);
    await bulkDropdown.selectOption(singleRole.role1);
    await page.locator(userManagement.bulkConfirm2).click();

  })

  test.afterEach(async ({ page }) => {

    //await page.locator(landingPage.dashBoardPage.signOut).click();
 
    await page.close(); 

  })
  