
import { expect, test } from "@playwright/test";
import { login } from "./helpers.ts/login.ts";
import { userManagement } from "./helpers.ts/userManagementLocators.ts";
import { newUserDetails } from "./testdata/newUserDetails.data.ts";
import { landingPage } from "./helpers.ts/landingPageLocators.ts";

test.describe('System- configured', () => {

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

test('Default System-Configured Account Roles', async ({ page }) => {

    const roles = await page.locator(userManagement.systemRole);
    await expect(roles).toBeVisible();
    await roles.click();

});

test('System-Configured Account Roles Functionality', async ({ page }) => {

    //Executive / Company Administrator role
    const role = await page.locator(userManagement.systemRole2);
    await role.selectOption(userManagement.systemRole2);

    const confirmRole = await page.locator(userManagement.systemConfirm).click();

    const menu = await page.locator(userManagement.menu);
    await menu.click();

    const userManagementLink = await page.locator(userManagement.userManagement);
    await userManagementLink.click();

    const TestRole = await page.locator(userManagement.systemRole3); 
    await TestRole.selectOption('Visitor');

    //The rest won't be tested because it requires to be reset manually to executive or Company Administrator

   /* await page.click(landingPage.dashBoardPage.signOut);;
    await login(page);
    await expect(page).toHaveURL('http://10.10.10.118/Dashboards/dashboard.php');

    //External role
    await page.locator('[id="optionRoleSelect646"]');
    await role.selectOption('External');

    const confirmRole2 = await page.locator('[id="confirmRoleBtn"]').click();

    await menu.click();
    
    await userManagementLink;
    await expect(userManagementLink).toBeDisabled();

    //Accounts administrator
    await page.locator('[id="optionRoleSelect646"]');
    await role.selectOption('Visitor');

    const confirmRole3 = await page.locator('[id="confirmRoleBtn"]').click();

    await menu.click();
    
    await userManagementLink.click;
    
     //Sales representative
     await page.locator('[id="optionRoleSelect646"]');
    await role.selectOption('Sales Representative');

    const confirmRole4 = await page.locator('[id="confirmRoleBtn"]').click();

    await menu.click();
    
    await userManagementLink;
    await expect(userManagementLink).toBeDisabled();

    //Sales Manager
    await page.locator('[id="optionRoleSelect646"]');
    await role.selectOption('Visitor');

    const confirmRole5 = await page.locator('[id="confirmRoleBtn"]').click();

    await menu.click();
    
    await userManagementLink;
    await expect(userManagementLink).toBeDisabled();

    //Visitor
    await page.locator('[id="optionRoleSelect646"]');
    await role.selectOption('Visitor');

    const confirmRole6 = await page.locator('[id="confirmRoleBtn"]').click();

    await menu.click();
    
    await userManagementLink;
    await expect(userManagementLink).toBeDisabled();*/
   
});
});




