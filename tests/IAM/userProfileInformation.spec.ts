import { expect, test } from "@playwright/test";
import { profilePage } from "../helpers.ts/profilePageLocators";
import { dashBoardPage } from "../helpers.ts/dashboardpageLocators";
import { notificationsPage } from "../helpers.ts/notificationsPageLocators";
import { login } from "../helpers.ts/login";
import { userAccount } from "../testdata/userProfile.data";

test.beforeEach(async ({ page }) => {
    await login(page);
    
    const welcomeMessage = await page.getByText(dashBoardPage.welcomeMessage);
    await expect(welcomeMessage).toBeVisible();

    await page.hover(dashBoardPage.profileEntity);
    await page.locator(dashBoardPage.profileEntity).click();
    await page.getByText(dashBoardPage.userPage).click();

    const heading = await page.locator(profilePage.userSetting);
    await expect(heading).toBeVisible();

    await page.locator(profilePage.editProfile).click();
  });

test('Update User Account Information', async ({ page }) => {
    
    await page.locator(profilePage.phoneNumber).fill(userAccount.profile.phone);
    await page.locator(profilePage.department).fill(userAccount.profile.department);
    await page.locator(profilePage.profileSaveButton).click();
    await page.getByRole('button', { name: 'Save' }).click();
});

test('Customise Notification Preferences', async ({ page }) => {
    //Feature is incomplete. Test will be completed when it is fully developed
    
    await page.getByText(notificationsPage.preferencesTab).click();
    await page.locator(notificationsPage.notificationsTab).click();
});

test('Mandatory Field Validation', async ({ page }) => {
       
       await page.locator(profilePage.email).fill('');

       const errorMessage = page.locator('.errorDiv');
       // Assert that the error message is visible
       await expect(errorMessage).toBeVisible();
   });

   test('Information Update Confirmation Message', async ({ page }) => {
       
       const roleDropdown = page.locator('select#role');
       await roleDropdown.selectOption(userAccount.profile.role);

       await page.locator(profilePage.profileSaveButton).click();
       await page.getByRole('button', { name: 'Save' }).click();

       const confirmationMessage = page.locator(profilePage.userUpdateConfirmation);
       await expect(confirmationMessage).toHaveText('User data changed succesfully.');
       await expect(confirmationMessage).toHaveCSS('color', 'rgb(0, 128, 0)');
       await expect(confirmationMessage).toBeVisible();
   });

   test('Real-time Update of User Account Information', async ({ page }) => {
    
    await page.locator(profilePage.nameField).fill(userAccount.profile.name);
    await page.locator(profilePage.surnameField).fill(userAccount.profile.surname);
    await page.locator(profilePage.profileSaveButton).click();
    await page.getByRole('button', { name: 'Save' }).click();

    const confirmationMessage = page.locator(profilePage.userUpdateConfirmation);
    await expect(confirmationMessage).toHaveText('User data changed succesfully.');
    await expect(confirmationMessage).toHaveCSS('color', 'rgb(0, 128, 0)');
    await expect(confirmationMessage).toBeVisible();

    const nameFieldValue = page.locator('[id="name"]');
    await expect(nameFieldValue).toHaveValue('Bandilee');

    const surnameFieldValue = page.locator('[id="surname"]');
    await expect(surnameFieldValue).toHaveValue('Persona');
});

   test('User Account Update Error Handling', async ({ page }) => {
       
       await page.locator(profilePage.email).click();
       await page.locator(profilePage.email).fill('');

       const emailErrorMessage = page.locator('.errorDiv').first();

       await expect(emailErrorMessage).toHaveText('Invalid email address!'); 

       await page.locator(profilePage.email).click();
       await page.locator(profilePage.email).fill(userAccount.profile.email);

       await expect(emailErrorMessage).toBeHidden();
       
       await page.locator(profilePage.phoneNumber).click();
       await page.locator(profilePage.phoneNumber).fill('');

       const phoneNumberErrorMessage = page.locator('#phone + .errorDiv');

       await expect(phoneNumberErrorMessage).toHaveText('Invalid phone number!');
       await expect(phoneNumberErrorMessage).toBeVisible();
       await expect(phoneNumberErrorMessage).toHaveCSS('color', 'rgb(255, 0, 0)');

       await page.locator(profilePage.phoneNumber).click();
       await page.locator(profilePage.phoneNumber).fill(userAccount.profile.phone);

       await expect(phoneNumberErrorMessage).toBeHidden();
   });

   test.afterEach('Logout and Close page', async ({ page }) => {

    //This is the 1st way to logout and will be used after the bug has been resolved
    //Related to DN-86:Logout button under Profile Entity does not work
    /// await page.locator(profilePage.profileEntity).click();
    /// await page.getByText(profilePage.logoutButton).click();
  
    //Alternative
    await page.locator(profilePage.dashBoardPage).click();
    await page.locator(dashBoardPage.signOut).click();
 
    await page.close(); 
});