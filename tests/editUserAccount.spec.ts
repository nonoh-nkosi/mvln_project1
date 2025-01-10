import { expect, test } from "@playwright/test";
import { login } from "./helpers.ts/login";
import { userManagement } from "./helpers.ts/userManagementLocators";
import { newUserDetails } from "./testData/newUserDetails.data";
  
  test.beforeEach(async ({ page }) => {
   
    await login(page);  

    // Second navigation
    await page.goto("http://10.10.10.118/User%20Accounts/userManagement.php#");

  });


test('Verify User Account editing functionality', async ({ page }) => {

//  // Locate the user element and wait for it to be visible
 const user = page.locator(userManagement.userElement);
  await expect(user).toHaveText('Will parker');

await page.locator(userManagement.userElement).click();
 
 /*// Verify user account editing functionality
 const edit = page.locator(userManagement.editButton);
 await expect(edit).toHaveText("Edit");
 await expect(edit).toBeVisible();*/

 await page.getByLabel(userManagement.userInformation).getByText(userManagement.editButton).click();

 //Verify security measures and confirmation prompt for user account editing
 await page.locator(userManagement.name).click();
 await page.locator(userManagement.name).fill(newUserDetails.editName);
 await page.locator(userManagement.saveButton).click();

 /*/Confirmation btton stopped working today
 //await page.locator(userManagement.confirmButton).click();
 
 const editUserConfirmMessage = page.locator(userManagement.confirmMessage);
 await expect(editUserConfirmMessage).toHaveText('Please Confirm Changes');
 await expect(editUserConfirmMessage).toBeVisible();*/

 
 const editUserSaveButton = page.locator(userManagement.saveButton)
 await expect(editUserSaveButton).toHaveText('Save');
 await expect(editUserSaveButton).toBeEnabled();


 //Verify error handling during user account editing
 const email = page.locator(userManagement.editEmail).fill(newUserDetails.email)
 //await page.locator(userManagement.editEmail).fill('Will');
 //await expect(userManagement.emailField).toBe('will@Docunation.co.za');

 const errorMessage = page.locator(userManagement.editErrorMessage)
 //await expect(errorMessage).toBeVisible();
 //await expect(errorMessage).toHaveText('Invalid email address!');

 //Verify user account information update
 const department = await page.locator(userManagement.editDepartment);
 await page.locator(userManagement.editDepartment).fill('Client');
 await expect(department).toBeVisible();
 //await expect(department).toHaveText('will@Docunation.co.za');

 const saveButton2 = page.getByText(userManagement.saveButton);
 await page.locator(userManagement.saveButton).click();
 await expect(saveButton2).toBeVisible();
 await expect(saveButton2).toBeEnabled();

 const editUserConfirmMessage = page.locator(userManagement.editErrorMessage)
 await page.locator(userManagement.confirmMessage);
 await expect(editUserConfirmMessage).toHaveText('Please Confirm Changes');
 await expect(editUserConfirmMessage).toBeVisible();
/* 
 const confirmButton = page.locator(userManagement.confirmButton);
  await page.locator(userManagement.confirmButton).click();
  await expect(confirmButton).toBeVisible();
  await expect(confirmButton).toBeEnabled();
 
  const successMessage = page.locator(userManagement.successMessage);
  await expect(successMessage).toBeVisible();
  await expect(successMessage).toHaveText('User information updated successfully');*/
});
