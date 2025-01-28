import { expect, test } from "@playwright/test";
import { login } from "../helpers.ts/login.ts";
import { dashBoardPage } from "../helpers.ts/dashboardpageLocators.ts";
import { singleRole } from "../testdata/accountRole.data.ts";
import { userManagement} from "../helpers.ts/userManagementLocators.ts";

test.beforeEach(async ({ page }) => {
    await login(page);

    await page.getByRole('link', { name: 'Menu' }).click();
    await page.getByText("Chart of Accounts").click()

    await page.click("text='Menu'");
    await page.getByText("User Management").click();

    const heading = await page.getByText(userManagement.heading);
    await expect(heading).toBeVisible();
}),

  test('Assign a Single Account Role to users', async ({ page }) => {

    await page.locator(userManagement.fillCheckbox).click();
    await page.click(userManagement.bulkAction);
    
    await page.locator(userManagement.bulkDropdown).getByText(userManagement.updateUserRole).click();

    const bulkDropdown = page.locator(userManagement.bulkActionSelect);
    await bulkDropdown.selectOption(singleRole.bulkRole1);

    await page.locator(userManagement.bulkConfirm).click();
  });

  
  test('Assign a Single Account Role to users- User Interface', async ({ page }) => {
   
    const dropDown = page.locator(userManagement.userSelectRole);
    await dropDown.selectOption(singleRole.dropDownRole)

    await page.locator(userManagement.confirmRole).click();
  });

  
  test('Confirm Account Role Assignment', async ({ page }) => {

    await page.locator(userManagement.fillCheckbox).click();
    await page.click(userManagement.bulkAction);

    await page.locator(userManagement.bulkDropdown).getByText(userManagement.updateUserRole).click();
    
    const bulkDropDown = page.locator(userManagement.bulkActionSelect);
    await bulkDropDown.selectOption(singleRole.bulkRole2);

    await page.locator(userManagement.bulkConfirm).click();
    
    const resetConfirmation = await page.getByText(userManagement.resetConfirm);
    await expect(resetConfirmation).toBeVisible();
    await expect(resetConfirmation).toHaveText(userManagement.resetConfirm);
    await expect(resetConfirmation).toHaveCSS('color', 'rgb(0, 128, 0)');
  });

  test('Confirm Account Role Assignment Updates User Roles', async ({ page }) => {

    const dropDown = page.locator(userManagement.userSelectRole);
    await dropDown.selectOption(singleRole.dropDownRole)

    await page.locator(userManagement.confirmRole).click();

    await expect(dropDown).toHaveValue(singleRole.dropDownRole);

    //A confirmation message is supposed to appear when the role is changed, this is related to DN-147.
  });

  test('Handle Assignment Errors Gracefully', async ({ page }) => {

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
  