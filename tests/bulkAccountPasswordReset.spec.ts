import { expect, test } from "playwright/test";
import { login } from "./helpers.ts/login";
import { landingPage } from "./helpers.ts/landingPageLocators";
import { userManagement } from "./helpers.ts/userManagementLocators";

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

// test('Password Complexity Enforcement', async ({ page }) => {
// });

test('Successful Reset', async ({ page }) => {

        await page.getByText("User Management").click();
    
        const heading = await page.getByText(userManagement.heading);
        await expect(heading).toBeVisible();
    
        await page.click(userManagement.checkBox1);//Click on the first user's checkBox
        await page.click(userManagement.checkBox2);//Click on the second user's checkbox
        await page.click(userManagement.checkBox3);//Click on the third user's checkbox

        await page.click(userManagement.bulkAction);//Click on the Bulk Action button

        
    await page.locator(userManagement.passwordResetBtn).getByText(userManagement.resetPassword1).click();

    //The button is sometimes unclickable and user should click on it multiple times
    await page.getByLabel(userManagement.userPasswordReset).getByText(userManagement.confirmReset1).click();

    //Confirmation Prompt
    const resetPasswordMessage = await page.getByText(userManagement.bulkResetPassword);
    await expect(resetPasswordMessage).toBeVisible();
    await expect(resetPasswordMessage).toHaveCSS( 'color', 'rgb(0, 128, 0)');
    await expect(resetPasswordMessage).toHaveText('User Password Update is sent successfully');
});

// test('Generation of Temporary Passwords', async ({ page }) => {
//Requires access to an email that the link will be sent to
// });

// test('Password Expiry and Reset Prompt', async ({ page }) => {
//Requires access to an email that the link will be sent to
// });

// test('Error Handling', async ({ page }) => {
//Requires access to an email that the link will be sent to
// });

test.afterEach( async ({ page }) => {

  await page.click(landingPage.dashBoardPage.signOut);
  await page.close();
});