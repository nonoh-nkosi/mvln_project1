import { expect, test } from "playwright/test";
import { login } from "../helpers.ts/login";
import { userManagement } from "../helpers.ts/userManagementLocators";
import { dashBoardPage } from "../helpers.ts/dashboardpageLocators";
import { editBulk } from "../testdata/bulkEdit.data";

test.beforeEach(async ({ page }) => {

    await login(page);

    await page.click(dashBoardPage.menuButton);
    await page.locator(dashBoardPage.chartOfAccountText).click();
    await page.click(dashBoardPage.menuButton);
});

test('Bulk Edit User Roles', async({ page }) => {

     //Successful Edit
     const userManagementLink = await page.getByText("User Management");
     await expect(userManagementLink).toBeVisible();
     await expect(userManagementLink).toBeEnabled(); 

     await userManagementLink.click();

     const heading = await page.getByText(userManagement.heading);
     await expect(heading).toBeVisible();
 
     //Bulk Edit User Roles - Selection
     await page.click(userManagement.checkBox1);//Click on the first user's checkBox
     await page.click(userManagement.checkBox2);//Click on the second user's checkbox

     await page.click(userManagement.bulkAction);//Click on the Bulk Action button

     //Click on Update User Role
     const updateButton = await page.locator(userManagement.editUserRole);
     await expect(updateButton).toBeVisible();
     await expect(updateButton).toHaveText(userManagement.updateUserRole)

     await updateButton.click();

     //Bulk Edit User Roles - Assign New Role
     const bulkRoleUpdate = await page.locator(userManagement.bulkActionSelect);
     await bulkRoleUpdate.selectOption(editBulk.role);

     await expect(bulkRoleUpdate).toHaveValue(editBulk.role)

     //Bulk Edit User Roles - Confirmation Prompt
     const confirmationButton = await page.locator(userManagement.bulkConfirm);

     const confirmationHeading = await page.locator(userManagement.confirmRoleHeading);
     await expect(confirmationHeading).toHaveText('Confirm Bulk Role Change');
     await expect(confirmationHeading).toBeVisible();

     await confirmationButton.getByText('Confirm').click();

     const successNotification = await page.locator(userManagement.successNotification);
     await expect(successNotification).toBeVisible();
     await expect(successNotification).toHaveText(userManagement.resetConfirm);

     await successNotification.waitFor({ state: 'hidden'});

     const roleValue1 = await page.locator(userManagement.aliceRoleDropdown);
     await expect(roleValue1).toHaveValue(editBulk.role);

     const roleValue2 = await page.locator(userManagement.testingRoleDropdown);
     await expect(roleValue1).toHaveValue(editBulk.role);
     
     //Bulk Edit User Roles - Handling Errors
     
     await page.click(userManagement.checkBox1);//Click on the first user's checkBox
     await page.click(userManagement.checkBox2);//Click on the second user's checkbox

     await page.click(userManagement.bulkAction);//Click on the Bulk Action button

     //Click on Update User Role
     await expect(updateButton).toBeVisible();
     await expect(updateButton).toHaveText(userManagement.updateUserRole);

     await updateButton.click();

     await bulkRoleUpdate.selectOption(editBulk.role);

     await confirmationButton.getByText('Confirm').click();

     //A 'Bulk Role has already been selected' error messaage should appear at this point.
    //  const alreadySelected = await page.locator(userManagement.successNotification);
    //  await expect(alreadySelected).toHaveText('Bulk Role has already been selected');
});

test.afterEach(async ({ page }) => {

    await page.click(dashBoardPage.signOut);
    await page.close();
});