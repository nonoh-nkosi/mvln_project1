import { expect, test } from "playwright/test";
import { login } from "../helpers.ts/login";
import { userManagement } from "../helpers.ts/userManagementLocators";
import { dashBoardPage } from "../helpers.ts/dashboardpageLocators";

test.beforeEach(async ({ page }) => {

    await login(page);
    await page.getByRole('link', { name: 'Menu' }).click();
    await page.getByText("Chart of Accounts").click()

    await page.click("text='Menu'");
});

test('Bulk Reactivation of User Accounts - User Selection', async({ page }) => {
    
    const userManagementLink = await page.getByText("User Management");
    await expect(userManagementLink).toBeVisible();
    await expect(userManagementLink).toBeEnabled();

    // Access Control for Bulk User Account Reactivation
    
    await userManagementLink.click();
    
    const heading = await page.getByText(userManagement.heading);
    await expect(heading).toBeVisible();
    
    await page.click(userManagement.checkBox1);//Click on the first user's checkBox
    await page.click(userManagement.checkBox2);//Click on the second user's checkbox
    await page.click(userManagement.checkBox3);//Click on the third user's checkbox
    
    await page.click(userManagement.bulkAction);//Click on the Bulk Action button
    
    // Access Control for Bulk User Account Reactivation
    const activateButton = await page.locator(userManagement.activateAccount2);
    await expect(activateButton).toBeVisible();
    await expect(activateButton).toHaveText(userManagement.activateAccount1);
    
    await activateButton.click();//Click on  the Activate Button
    
    //Bulk Reactivation Confirmation Prompt
    //User Reactivate Heading
    const confirmationPrompt = await page.locator(userManagement.confirmationPrompt);
    await expect(confirmationPrompt).toBeVisible();
    
    //Desciption Text with number of users selected
    const description = page.locator(userManagement.bulkReactivateDescription);
    await expect(description).toBeVisible();
    await expect(description).toHaveText(userManagement.bulkReactivateDescriptionText);
    
    await page.locator(userManagement.confirmActivation).click();
    
    //Bulk Reactivation Progress and Completion Notification
    const completionNotification = await page.getByText(userManagement.bulkReactivateNotification);
    await expect(completionNotification).toBeVisible();
    await expect(completionNotification).toHaveText(userManagement.bulkReactivateNotification);

    //Wait for the notification to disappear
    await completionNotification.waitFor({state: 'hidden'});
    
    //Graceful Handling of Errors during Bulk User Account Reactivation
    
    await page.click(userManagement.checkBox1);//Click on the first user's checkBox
    await page.click(userManagement.bulkAction);//Click on the Bulk Action button
    
    //Checking if the button is visible and clicking on it
    await expect(activateButton).toBeVisible();
    await expect(activateButton).toHaveText(userManagement.activateAccount1);
    await activateButton.click();//Click on  the Activate Button
    
    const alreadyActiveNotification = await page.getByText(userManagement.alreadyActive);
    await expect(alreadyActiveNotification).toHaveText(userManagement.alreadyActive);

    await alreadyActiveNotification.waitFor({state: 'hidden'});
});

test.afterEach(async ({ page }) => {

    //Deactivate accounts to allow test to run in a loop
    await page.click(userManagement.checkBox1);//Click on the first user's checkBox
    await page.click(userManagement.checkBox2);//Click on the second user's checkbox
    await page.click(userManagement.checkBox3);//Click on the third user's checkbox
    
    await page.click(userManagement.bulkAction);//Click on the Bulk Action button

    const deactivateButton = await page.locator(userManagement.bulkDeactivateButton);
    await deactivateButton.click();//Click on  the Deactivate Button
    await page.locator(userManagement.confirmDeactivation).click();

    await page.click(dashBoardPage.signOut);
    await page.close();
});