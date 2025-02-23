import { expect, test } from "playwright/test";
import { login } from "../helpers.ts/login";
import { dashBoardPage } from "../helpers.ts/dashboardpageLocators";
import { userManagement } from "../helpers.ts/userManagementLocators";

test.beforeEach(async ({ page }) => {

    await login(page);
    await page.getByRole('link', { name: 'Menu' }).click();
    await page.getByText("Chart of Accounts").click()

    await page.click("text='Menu'");
});

test('Bulk Password Reset - User Selection', async ({ page }) => {

    //Successful Reset
      await page.getByText("User Management").click();
    
        const heading = await page.getByText(userManagement.heading);
        await expect(heading).toBeVisible();
    
        await page.click(userManagement.checkBox1);//Click on the first user's checkBox
        await page.click(userManagement.checkBox2);//Click on the second user's checkbox
        await page.click(userManagement.checkBox3);//Click on the third user's checkbox

        await page.click(userManagement.bulkAction);//Click on the Bulk Action button
});

test('Successful Reset', async ({ page }) => {

        await page.getByText("User Management").click();
    
        const heading = await page.getByText(userManagement.heading);
        await expect(heading).toBeVisible();
    
        await page.click(userManagement.checkBox1);//Click on the first user's checkBox
        await page.click(userManagement.checkBox2);//Click on the second user's checkbox
        await page.click(userManagement.checkBox3);//Click on the third user's checkbox

        await page.getByPlaceholder('Bulk Action');
        const bulkDropdown = await page.locator(userManagement.bulkAction).first();
        await bulkDropdown.click();//Click on the Bulk Action button

        const button = await page.locator(userManagement.passwordResetBtn);
        await button.getByText(userManagement.resetPassword1).click();
        
        //The button is sometimes unclickable and user should click on it multiple times
        await page.getByLabel(userManagement.userPasswordReset).getByText(userManagement.confirmReset1).click();
        
        //Confirmation Prompt
        const success = await page.locator(userManagement.successNotification).first();
        const resetPasswordMessage = await page.getByText(userManagement.bulkResetPassword)
        await expect(resetPasswordMessage).toBeVisible();
        await expect(resetPasswordMessage).toHaveCSS( 'color', 'rgb(0, 128, 0)');
        await expect(resetPasswordMessage).toHaveText(userManagement.bulkResetPassword);
});

test.afterEach( async ({ page }) => {

  await page.click(dashBoardPage.signOut);
  await page.close();
});