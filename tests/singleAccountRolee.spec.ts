import { expect, test } from "@playwright/test";
import { login } from "./helpers.ts/login.ts";
import { landingPage } from "./helpers.ts/landingPageLocators.ts";
import { singleRole } from "./testdata/singleAccountRole.data.ts";
import { userManagement} from "./helpers.ts/userManagementLocators.ts";

test.beforeEach(async ({ page }) => {
    await login(page);

    await page.getByRole('link', { name: 'Menu' }).click();
    await page.getByText("Chart of Accounts").click()

    await page.click("text='Menu'");
    await page.getByText("User Management").click();
}),

  test.only('Assign a Single Account Role to users', async ({ page }) => {

    await page.getByLabel(userManagement.checkBox2).click();
    // await page.getByLabel(userManagement.checkBox2).nth(1).click();
    await page.click(userManagement.bulkAction);
    
    const bulkDropDown = page.locator(userManagement.bulkActionSelect);
    await bulkDropDown.selectOption(singleRole.bulkRole1);

    await page.getByText(userManagement.bulkConfirm1).click();
    
  });

  
  test('Assign a Single Account Role to users- User Interface', async ({ page }) => {
   

    const dropDown = page.locator(userManagement.userSelectRole);
    await dropDown.selectOption(singleRole.dropDownRole)

    await page.locator(userManagement.confirmRole).click();
 
  });

  
  test('Confirm Account Role Assignment', async ({ page }) => {

    await page.getByLabel(userManagement.checkBox1).click();
    await page.click(userManagement.bulkAction);
    
    const bulkDropDown = page.locator(userManagement.bulkActionSelect);
    await bulkDropDown.selectOption(singleRole.bulkRole2);

    await page.getByText(userManagement.bulkConfirm1).click();

    await expect(bulkDropDown).toHaveValue(singleRole.bulkRole2);
    
  });

  test('Confirm Account Role Assignment Updates User Roles', async ({ page }) => {

    const dropDown = page.locator(userManagement.userSelectRole);
    await dropDown.selectOption(singleRole.dropDownRole)

    await page.locator(userManagement.confirmRole).click();

    await expect(dropDown).toHaveValue(singleRole.dropDownRole);
  });

  test('Handle Assignment Errors Gracefully', async ({ page }) => {

    await page.getByLabel(userManagement.checkBox1).click();
    await page.click(userManagement.bulkAction);
    
    const bulkDropDown = page.locator(userManagement.bulkActionSelect);
    await bulkDropDown.selectOption(singleRole.bulkRole2);

    await page.getByText(userManagement.bulkConfirm1).click();

    await expect(bulkDropDown).toBeDisabled();

  });

  test.afterEach(async ({ page }) => {

    await page.locator(landingPage.dashBoardPage.signOut).click();
 
    await page.close(); 

  })
  