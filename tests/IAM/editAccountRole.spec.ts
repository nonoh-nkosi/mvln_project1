import { expect, test } from "@playwright/test";
import { login } from "../helpers.ts/login.ts";
import { dashBoardPage } from "../helpers.ts/dashboardpageLocators.ts";
import { singleRole } from "../testdata/accountRole.data.ts";
import { userManagement} from "../helpers.ts/userManagementLocators.ts";

test.beforeEach(async ({ page }) => {

    await login(page);

    const menu = await page.locator(userManagement.menu);
    await menu.click();

    const reportsLink = page.locator(userManagement.report);
    await reportsLink.click();
    
    await menu.click();

    const userManagementLink = await page.locator(userManagement.userManagement);
    await userManagementLink.click();
}),

  test('Verify Edit Account Roles', async ({ page }) => {

    await page.locator(userManagement.fillCheckbox).click();
    await page.click(userManagement.bulkAction);
    
    await page.locator(userManagement.bulkDropdown).getByText(userManagement.updateUserRole).click();

    const bulkDropdown = page.locator(userManagement.bulkActionSelect);
    await bulkDropdown.selectOption(singleRole.bulkRole1);

    await page.locator(userManagement.bulkConfirm).click();
  });

  test('Verify Edit Account Role and role permission', async ({ page }) => {
   
    const dropDown = page.locator(userManagement.userSelectRole);
    await dropDown.selectOption(singleRole.dropDownRole2)

    await page.locator(userManagement.confirmRole).click();

    const menu = await page.locator(userManagement.menu);
    await menu.click();

    const userManagementLink = await page.locator(userManagement.userManagement);
    await userManagementLink.click();

    
    const isDisabled = await userManagementLink.isDisabled();
    expect(isDisabled).toBe(true);
  });

  test('Verify Edit Account Role and Confirm Account Role Assignment', async ({ page }) => {

    await page.locator(userManagement.fillCheckbox).click();
    await page.click(userManagement.bulkAction);

    await page.locator(userManagement.bulkDropdown).getByText(userManagement.updateUserRole).click();
    
    const bulkDropDown = page.locator(userManagement.bulkActionSelect);
    await bulkDropDown.selectOption(singleRole.bulkRole2);

    await page.locator(userManagement.bulkConfirm).click();
    
    const resetConfirmation = await page.getByText(userManagement.resetConfirm);
    await expect(resetConfirmation).toBeVisible();
    await expect(resetConfirmation).toHaveText(userManagement.resetConfirm);
  });

  test('Verify Preview and Apply Changes of the User Role', async ({ page }) => {

    const dropDown = page.locator(userManagement.userSelectRole);
    await dropDown.selectOption(singleRole.dropDownRole)

    await page.locator(userManagement.confirmRole).click();

    //Confirmation message not appearing - related to bug DN-147

    await expect(dropDown).toHaveValue(singleRole.dropDownRole);
  });

  test('Verify Handling Assignment Errors Gracefully', async ({ page }) => {

    await page.locator(userManagement.fillCheckbox).click();
    await page.click(userManagement.bulkAction);
    
    await page.locator(userManagement.bulkDropdown).getByText(userManagement.updateUserRole).click();

    const bulkDropdown = await page.locator(userManagement.bulkActionSelect);
    await bulkDropdown.selectOption(singleRole.bulkRole1);

    //Button does not work, this is related to DN-79.
    await page.locator(userManagement.cancel).click();
  });

  test.afterEach(async ({ page }) => {

    await page.locator(dashBoardPage.signOut).click();
    await page.close(); 
  });
  