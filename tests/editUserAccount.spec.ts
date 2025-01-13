import { expect, test } from "@playwright/test";
import { login } from "./helpers.ts/login";
import { userManagement } from "./helpers.ts/userManagementLocators";
import { newUserDetails } from "./testData/newUserDetails.data";
test.beforeEach(async ({ page }) => {
  
await login(page); 

});

test('Verify User Account editing functionality', async ({ page }) => {

// // Locate the user element and wait for it to be visible
const user = page.locator(userManagement.userElement);
await expect(user).toHaveText('Will parker');

await page.locator(userManagement.userElement).click();

//DN-29 "Verify User Account editing functionality"
await page.getByLabel(userManagement.userInformation).getByText(userManagement.editButton).click();

//DN-30"Verify security measures and confirmation prompt for user account editing"
await page.locator(userManagement.name).click();
await page.locator(userManagement.name).fill(newUserDetails.editName);
await page.locator(userManagement.saveButton).click();

//const confirmButton = page.locator(userManagement.confirmButton);
await page.locator("button.btn.btn-secondary.userEditField.editConfirmation").click();
//await expect(confirmButton).toBeVisible();
//await expect(confirmButton).toBeEnabled();

const successMessage = page.locator(userManagement.successMessage);
await expect(successMessage).toBeVisible();
await expect(successMessage).toHaveText('User information updated successfully');

const close = page.getByText(userManagement.closeBtn);
await page.locator(userManagement.closeBtn).click();
await expect(close).toBeVisible();
await expect(close).toBeEnabled();

});
test('Verify error handling during during user account editing', async ({ page }) => {

    // // Locate the user element and wait for it to be visible
    const user = page.locator(userManagement.userElement);
    await expect(user).toHaveText('Will parker');
    
    await page.locator(userManagement.userElement).click();
    
    //DN-29 "Verify User Account editing functionality"
    await page.getByLabel(userManagement.userInformation).getByText(userManagement.editButton).click();
    
    //DN-30"Verify security measures and confirmation prompt for user account editing"
    await page.locator(userManagement.name).click();
    await page.locator(userManagement.name).fill(newUserDetails.name);

    //Verify error handling during user account editing
    const email = page.locator(userManagement.editEmail).fill(newUserDetails.name);

    const errorMessage = page.locator(userManagement.editErrorMessage)
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Invalid email address!');
    
    });

