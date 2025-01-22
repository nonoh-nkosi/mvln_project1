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

const user = await page.locator(userManagement.userElement);
await expect(user).toHaveText('Will parker');

await page.locator(userManagement.userElement).click();

//DN-29 "Verify User Account editing functionality"
await page.getByLabel(userManagement.userInformation).getByText(userManagement.editButton).click();

//DN-30"Verify security measures and confirmation prompt for user account editing"
await page.locator(userManagement.name).click();
await page.locator(userManagement.name).fill(newUserDetails.editName);
await page.locator(userManagement.saveButton).click();

const confirmButton = await page.locator(userManagement.confirmBtn);
await confirmButton.click();
await expect(confirmButton).toBeEnabled();

const successMessage = page.locator(userManagement.successMessage);
await expect(successMessage).toBeVisible();
await expect(successMessage).toHaveText('User information updated successfully');

const close = page.locator(userManagement.closeButton).last();
await close.click();

//Editing the Name back to normal from Willy to Will
const user2 = await page.locator(userManagement.userElement);
await expect(user).toHaveText('Willy parker');

await page.locator(userManagement.userElement).click();

await page.getByLabel(userManagement.userInformation).getByText(userManagement.editButton).click();


await page.locator(userManagement.name).click();
await page.locator(userManagement.name).fill(newUserDetails.name);
await page.locator(userManagement.saveButton).click();

const confirmButton2 = await page.locator(userManagement.confirmBtn);
await confirmButton2.click();
await expect(confirmButton2).toBeEnabled();

const close2 = await page.locator(userManagement.closeButton).last();
await close.click();

});

test('Verify error handling during during user account editing', async ({ page }) => {

    const user = await page.locator(userManagement.userElement);
    await expect(user).toHaveText('Will parker');
    
    await page.locator(userManagement.userElement).click();
    
    await page.getByLabel(userManagement.userInformation).getByText(userManagement.editButton).click();
    
    await page.locator(userManagement.name).click();
    await page.locator(userManagement.name).fill(newUserDetails.name);

    const email = await page.locator(userManagement.editEmail).fill(newUserDetails.name);

    const errorMessage = await page.locator(userManagement.editErrorMessage)
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Invalid email address!');
    
    });

    test('Verify validation rules for user account edits', async ({ page }) => {

        const user = await page.locator(userManagement.userElement);
        await expect(user).toHaveText('Will parker');
        
        await page.locator(userManagement.userElement).click();

        await page.getByLabel(userManagement.userInformation).getByText(userManagement.editButton).click();
        
        await page.locator(userManagement.name).click();
        await page.locator(userManagement.name).fill('');
        
        await page.locator(userManagement.surname).click();
        await page.locator(userManagement.surname).fill('');

        await page.locator(userManagement.email).click();
        await page.locator(userManagement.email).fill(newUserDetails.name);

        await page.locator(userManagement.phone).click();
        await page.locator(userManagement.phone).fill('');

        await page.locator(userManagement.department).click();
        await page.locator(userManagement.department).fill(newUserDetails.name);
    
        await page.locator(userManagement.saveButton).click();

        const confirmButton2 = await page.locator(userManagement.confirmBtn);
        await confirmButton2.click();
        await expect(confirmButton2).toBeEnabled();

        const errorMessageName = await page.locator('.errorDiv').first();
        await expect(errorMessageName).toBeVisible();
        await expect(errorMessageName).toHaveText('Invalid or missing name. Name must contain only letters and be between 1 and 100 characters long.');
        
        const errorMessageSurname = await page.locator('.errorDiv').first();
        await expect(errorMessageSurname).toBeVisible();
        await expect(errorMessageSurname).toHaveText('Invalid or missing name. Name must contain only letters and be between 1 and 100 characters long.');

        const errorMessageEmail = await page.locator('.errorDiv').first();
        await expect(errorMessageEmail).toBeVisible();

        const errorMessageDepartment = await page.locator('.errorDiv').first();
        await expect(errorMessageDepartment).toBeVisible();
        
        const errorMessagePhone = await page.locator('.errorDiv').first();
        await expect(errorMessagePhone).toBeVisible();

        const close3 = await page.locator(userManagement.closeButton).last();
        await close3.click();

        });

