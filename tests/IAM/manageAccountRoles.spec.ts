import { expect, test } from "playwright/test";
import { login } from "../helpers.ts/login";
import { dashBoardPage } from "../helpers.ts/dashboardpageLocators";
import { userManagement } from "../helpers.ts/userManagementLocators";

test.beforeEach( async ({ page }) => {

    await login(page);

    await page.getByRole('link', { name: 'Menu' }).click();
    await page.getByText("Chart of Accounts").click()

    await page.click("text='Menu'");
});

test('Accessing Account Roles Page', async ({ page }) => {
//DN-117

    const userManagementLink = await page.getByText("User Management");
    await expect(userManagementLink).toBeVisible();
    await expect(userManagementLink).toBeEnabled(); 
    
    await page.getByText("User Management").click();

    const userAccess = await page.getByText(userManagement.heading)
    await expect(userAccess).toBeVisible();
});

test('Access Control for Account Roles Page', async ({ page }) => {
//DN-118

    const userManagementLink = await page.getByText("User Management");
    await expect(userManagementLink).toBeVisible();
    await expect(userManagementLink).toBeEnabled(); 
    
    await page.getByText("User Management").click();

    const userAccess = await page.getByText(userManagement.heading)
    await expect(userAccess).toBeVisible();

    await page.locator(userManagement.fillCheckbox).click();
    await page.click(userManagement.bulkAction);
        
    await page.locator(userManagement.bulkDropdown).getByText(userManagement.updateUserRole).click();

    await page.locator(userManagement.bulkConfirm).click();
});

test('View Account Roles and Permissions', async ({ page }) => {
//DN-119
//Viewing of permissions does not exist yet on website, the roles can be viewed when the user lands on the User Account Management Page.
});

test('Display Assigned Roles on Account Roles Page', async ({ page }) => {
//DN-120

    await page.getByText("User Management").click();

    const userAccess = await page.getByText(userManagement.heading)
    await expect(userAccess).toBeVisible();

    const dropDown = page.locator(userManagement.userSelectRole);
    await expect(dropDown).toBeVisible();
});

test('Access to the User Management page should be restricted to authenticated Company Administrators only, ensuring secure and authorized access.', async ({ page }) => {

    const userManagementLink = await page.getByText("User Management");
    await expect(userManagementLink).toBeVisible();
    await expect(userManagementLink).toBeEnabled(); 

    await userManagementLink.click();
});

test.afterEach( async ({ page }) => {

    await page.locator(dashBoardPage.signOut).click();
    await page.close(); 
});
