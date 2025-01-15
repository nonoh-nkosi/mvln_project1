import { expect, test } from "@playwright/test";
import { login } from "./helpers.ts/login";
import { userManagement } from "./helpers.ts/userManagementLocators";
import { newUserDetails } from "./testdata/newUserDetails.data";
test.beforeEach(async ({ page }) => {
  
await login(page); 

const menu = await page.locator(userManagement.menu);
await menu.click();

const reportsLink = page.locator(userManagement.report);
await reportsLink.click();
    
await menu.click();

const userManagementLink = await page.locator(userManagement.userManagement);
await userManagementLink.click();

});

test('Verify edit functionality', async ({ page }) => {


//Locate the user element and wait for it to be visible
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

    test('Verify validation rules for user account edits', async ({ page }) => {

        // // Locate the user element and wait for it to be visible
        const user = page.locator(userManagement.userElement);
        await expect(user).toHaveText('Will parker');
        
        await page.locator(userManagement.userElement).click();

        await page.getByLabel(userManagement.userInformation).getByText(userManagement.editButton).click();
        
        await page.locator(userManagement.nameField).click();
        await page.locator(userManagement.nameField).fill("");
        
        await page.locator(userManagement.surnameField).click();
        await page.locator(userManagement.name).fill("");

        await page.locator(userManagement.emailField).click();
        await page.locator(userManagement.emailField).fill(newUserDetails.name);

        await page.locator(userManagement.phoneField).click();
        await page.locator(userManagement.phoneField).fill("");

        await page.locator(userManagement.departmentField).click();
        await page.locator(userManagement.departmentField).fill(newUserDetails.name);
    
        await page.locator(userManagement.saveButton).click();
        await page.locator("button.btn.btn-secondary.userEditField.editConfirmation").click();
    
        const errorMessageName = page.locator('.errorDiv').first();
        await expect(errorMessageName).toBeVisible();
        await expect(errorMessageName).toHaveText('Invalid or missing name. Name must contain only letters and be between 1 and 100 characters long.');
        
        const errorMessageSurname = page.locator('.errorDiv').first();
        await expect(errorMessageSurname).toBeVisible();
        await expect(errorMessageSurname).toHaveText('Invalid or missing name. Name must contain only letters and be between 1 and 100 characters long.');

        const errorMessageEmail = page.locator('.errorDiv').first();
        await expect(errorMessageEmail).toBeVisible();
        await expect(errorMessageEmail).toHaveText('Invalid email address!');

        const errorMessageDepartment = page.locator('.errorDiv').first();
        await expect(errorMessageDepartment).toBeVisible();
        await expect(errorMessageDepartment).toHaveText('Invalid or missing department. Department must be a numeric value with a length between 1 and 10.');

        const errorMessagePhone = page.locator('.errorDiv').first();
        await expect(errorMessagePhone).toBeVisible();
        await expect(errorMessagePhone).toHaveText('Invalid or missing phone number. Phone number must be between 8 and 10 characters.');

        

        
        });

