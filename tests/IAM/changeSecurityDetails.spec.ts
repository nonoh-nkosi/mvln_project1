import { expect, test } from "@playwright/test";
import { SecurityPage } from "../helpers.ts/securityPageLocators";
import { signInPage } from "../helpers.ts/signInPageLocators";
import { dashBoardPage } from "../helpers.ts/dashboardpageLocators";
import { forgotPassword } from "../helpers.ts/forgotPasswordLocators";
import { config } from "../helpers.ts/config";
import { login } from "../helpers.ts/login";
import { updatePassword } from "../testdata/updatePassword.data";

//First Round Of Change Password Tests
// DN-48
test.describe('Change Password From User Profile', () => {

  //Before Logging in using Login Function and opening Security page 
test.beforeEach(async ({ page }) => {

    await login(page);
    await page.locator(dashBoardPage.welcomeMessage);

    await page.hover(dashBoardPage.profileEntity);
    await page.locator(dashBoardPage.profileEntity).click();
    await page.getByText(dashBoardPage.userPage).click();

    await page.getByText(SecurityPage.userSubMenu).hover();

 await page.locator(SecurityPage.securityTab).click();//During execution, the security tab is sometimes not clickable
//Click on security tab again 
    await page.locator(SecurityPage.securityTab).click();

    const securityHeading = await page.locator(SecurityPage.securityHeading);
    await expect(securityHeading).toBeVisible();
  });

  //Automated Tests

  test('Reset User Password from Profile', async ({ page }) => {

    await page.locator(SecurityPage.currentPassword).fill(updatePassword.valid.currentPassword);

    await page.locator(SecurityPage.newPassword).fill(updatePassword.valid.newPassword);
    await page.locator(SecurityPage.confirmPassword).fill(updatePassword.valid.confirmPassword);

    await page.locator(SecurityPage.securitySaveButton).click();
    await page.getByRole('button', {name: 'Save' }).click();
  });

  test('Password Complexity in User Profile Password Reset', async ({ page }) => {

    await page.locator(SecurityPage.currentPassword).fill(updatePassword.weakPassword.currentPassword);

    await page.locator(SecurityPage.newPassword).fill(updatePassword.weakPassword.newPassword);
    await page.locator(SecurityPage.confirmPassword).fill(updatePassword.weakPassword.confirmPassword);

    await page.locator(SecurityPage.securitySaveButton).click();
    await page.getByRole('button', {name: 'Save' }).click();

    //The New Password and Confirm Password Field have the error message
    const newPasswordErrorMessage = page.locator(SecurityPage.newPasswordError);
    await expect(newPasswordErrorMessage).toHaveText('Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character.');
    await expect(newPasswordErrorMessage).toBeVisible();
    await expect(newPasswordErrorMessage).toHaveCSS('color', 'rgb(249, 49, 84)');

    await page.locator(SecurityPage.currentPassword).fill(updatePassword.strongPassword.currentPassword);

    await page.locator(SecurityPage.newPassword).fill(updatePassword.strongPassword.newPassword);
    await page.locator(SecurityPage.confirmPassword).fill(updatePassword.strongPassword.confirmPassword);
    await expect(newPasswordErrorMessage).toBeHidden();// the error message is supposed to disappear at this point

    await page.locator(SecurityPage.securitySaveButton).click();
    await page.getByRole('button', {name: 'Save' }).click();

    const confirmationMessage = page.locator(SecurityPage.successMessage);
    await expect(confirmationMessage).toBeVisible();
    await expect(confirmationMessage).toHaveText('User password updated successfully');
    await expect(confirmationMessage).toHaveCSS('color', 'rgb(0, 128, 0)');
  });

  test('Password Reset Guidance in User Profile', async ({ page }) => {

    await page.locator(SecurityPage.updatePasswordHeading).hover();

    await page.locator(SecurityPage.currentPassword).fill(updatePassword.noChangesPassword.currentPassword);

    await page.locator(SecurityPage.newPassword).fill(updatePassword.noChangesPassword.newPassword);
    await page.locator(SecurityPage.confirmPassword).fill(updatePassword.noChangesPassword.confirmPassword);

    await page.locator(SecurityPage.securitySaveButton).click();
    await page.getByRole('button', {name: 'Save' }).click();

    const newPasswordErrorMessage = page.locator(SecurityPage.newPasswordError);
    await expect(newPasswordErrorMessage).toHaveText('New Password can not be the same as current');
    await expect(newPasswordErrorMessage).toBeVisible();
    await expect(newPasswordErrorMessage).toHaveCSS('color', 'rgb(249, 49, 84)');
  });

  test('Password Reset Confirmation Message', async ({ page }) => {

    await page.locator(SecurityPage.currentPassword).fill(updatePassword.valid.currentPassword);

    await page.locator(SecurityPage.newPassword).fill(updatePassword.valid.newPassword);
    await page.locator(SecurityPage.confirmPassword).fill(updatePassword.valid.confirmPassword);

    await page.locator(SecurityPage.securitySaveButton).click();
    await page.locator(SecurityPage.securityConfirmButton).click();

    const confirmationMessage = page.locator(SecurityPage.successMessage);
    await expect(confirmationMessage).toBeVisible();
    await expect(confirmationMessage).toHaveText('User password updated successfully');
    await expect(confirmationMessage).toHaveCSS('color', 'rgb(0, 128, 0)');
  });

  test('Password Reset Error Handling', async ({ page }) => {

    //Invalid password for Current Password
    await page.locator(SecurityPage.currentPassword).click();
    await page.locator(SecurityPage.currentPassword).fill('');

    await page.locator(SecurityPage.securitySaveButton).click();
    await page.locator(SecurityPage.securityConfirmButton).click();
   
    //Error Message  for Current Password
    const currentPasswordErrorMessage = page.locator(SecurityPage.currentPasswordError).first();
    await expect(currentPasswordErrorMessage).toHaveText('Incorrect current passsword!');//spelling error
    await expect(currentPasswordErrorMessage).toBeVisible();
    await expect(currentPasswordErrorMessage).toHaveCSS('color', 'rgb(255, 0, 0)');
    
    //Valid Password for Current Password
    await page.locator(SecurityPage.currentPassword).click();
    await page.locator(SecurityPage.currentPassword).fill(updatePassword.valid.currentPassword);
    await expect(currentPasswordErrorMessage).toBeHidden();//error is supposed to disappear

    //Invalid New Password
    await page.locator(SecurityPage.newPassword).click();
    await page.locator(SecurityPage.newPassword).fill('');

    await page.locator(SecurityPage.securitySaveButton).click();
    await page.locator(SecurityPage.securityConfirmButton).click();

    //Invalid New Password Error Message
  ///No error message appears when new password field is left empty. When user clicks on the second save button, nothing appears.
  // New Password and Confirm Password Fields have the same error message.
    const newPasswordErrorMessage = page.locator(SecurityPage.newPasswordError);
    await expect(newPasswordErrorMessage).toHaveText('Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character.');
    await expect(newPasswordErrorMessage).toBeVisible();
    await expect(newPasswordErrorMessage).toHaveCSS('color', 'rgb(255, 0, 0)');

    //Valid New Password
    await page.locator(SecurityPage.newPassword).click();
    await page.locator(SecurityPage.newPassword).fill(updatePassword.valid.newPassword);
    await expect(newPasswordErrorMessage).toBeHidden();
   
    //Invalid Confirm Password
    await page.locator(SecurityPage.confirmPassword).click();
    await page.locator(SecurityPage.confirmPassword).fill('');

    await page.locator(SecurityPage.securitySaveButton).click();
    await page.locator(SecurityPage.securityConfirmButton).click();

    //Confirm Password Error Message
  //When the field is left empty, an error message appears but the id for the error is 'new password error message'.
    const confirmPasswordErrorMessage = page.locator(SecurityPage.newPasswordError);
    await expect(confirmPasswordErrorMessage).toHaveText('Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character.');
    await expect(confirmPasswordErrorMessage).toBeVisible();
    await expect(confirmPasswordErrorMessage).toHaveCSS('color', 'rgb(255, 0, 0)');

    //Valid Confirm Password
    await page.locator(SecurityPage.confirmPassword).click();
    await page.locator(SecurityPage.confirmPassword).fill(updatePassword.valid.confirmPassword);
    await expect(confirmPasswordErrorMessage).toBeHidden();
  });

  test.afterEach('Logout and Close page', async ({ page }) => {
  
    //This is the 1st way to logout and will be used after the bug has been resolved
    //Related to DN-86:Logout button under Profile Entity does not work
    /// await page.locator(profilePage.profileEntity).click();
    /// await page.getByText(profilePage.logoutButton).click();
    
    await page.locator(SecurityPage.dashBoardPage).click();
    await page.locator(dashBoardPage.signOut).click();
 
    await page.close(); 
});
});

//Second Round Of Change Password Tests

test.describe('Change Password Using Forgot Password', () => {

  test.beforeEach(async ({ page }) => {

    await page.goto(config.urls.login);
    await page.locator(signInPage.forgotPassword).click();
  });

  test('Password Reset Confirmation Notification', async ({ page }) => {

    const heading = await page.getByText(forgotPassword.forgotPasswordHeading);
    await expect(heading).toBeVisible();

    await page.locator(forgotPassword.emailField).fill(config.credentials.email);
    await page.click(forgotPassword.getLink);

    const confirmation = await page.locator(forgotPassword.notification);
    await expect(confirmation).toHaveText(forgotPassword.confirmationMessage);
    await expect(confirmation).toBeVisible();
  });

  test.afterEach('Close page', async ({ page }) => {
  
    await page.close(); 
});
});
