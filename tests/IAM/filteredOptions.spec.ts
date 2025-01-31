import { expect, test } from "playwright/test";
import { login } from "../helpers.ts/login";
import { userManagement } from "../helpers.ts/userManagementLocators";
import { filter } from "../testdata/filterOptions.data";

test.beforeEach(async ({ page }) => {

    await login(page);

    await page.click(userManagement.menu);
    await page.getByText("Chart of Accounts").click()

    await page.click(userManagement.menu);
    await page.getByText("User Management").click();

    const userAccess = await page.getByText(userManagement.heading)
    await expect(userAccess).toBeVisible();
});

test('Filtering User Management Page for Company Administrators', async ({ page }) => {

    //Checking if Role filter is visible
    const roleDropdown = await page.locator(userManagement.roleDropdown);
    await expect(roleDropdown).toBeVisible();

    //Checking if no filter has been applied
    await expect(roleDropdown).toHaveValue('');

    //Selecting Executive/Company Administrator as Role
    await page.locator(userManagement.roleDropdown).selectOption(filter.role[4]);

     //Visual Feedback for Active Filters on User Management Page
     //Checking if filter has been applied
     await expect(roleDropdown).toHaveValue(filter.role[4]);

 //Cannot locate the values of the role dropdowns
    // const role = await page.locator(userManagement.changeRoleDropdown).all()
    // await expect(role.values).toBe(filter.role[4]);

    //Alternative, checking test account role
    const firstOption = await page.locator(userManagement.testRole1Dropdown);
    await expect(firstOption).toHaveValue(filter.role[4]);
});

test('Real-Time Updating of User List on User Management Page with Filters', async ({ page }) => {

    //Checking if User Filter is visible
    const userDropdown = await page.locator(userManagement.userDropdown);
    await expect(userDropdown).toBeVisible();

    //Checking if no filters have been applied
    await expect(userDropdown).toHaveValue('');

    //Selecting Bandile Personal 
    await page.locator(userManagement.userDropdown).selectOption(filter.user[2]);

     //Visual Feedback for Active Filters on User Management Page
     //Checking if filter has been applied
    await expect(userDropdown).toHaveValue(filter.user[2]);

    //Checking if the right user appears
    const userName = await page.locator(userManagement.userFilter1);
    await expect(userName).toHaveText(filter.user[2]);
});

test('Simultaneous Application of Multiple Filters on User Management Page', async ({ page }) => {

    //Filtering Users

    //Checking if the User Filter is visible
    const userDropdown = await page.locator(userManagement.userDropdown);
    await expect(userDropdown).toBeVisible();

    //Checking if no filter has been applied
    await expect(userDropdown).toHaveValue('');

    //Selecting Fill Bugg
    await page.locator(userManagement.userDropdown).selectOption(filter.user[4]);

    //Checking if the right User appears
    const userName = await page.locator(userManagement.userFilter2);
    await expect(userName).toHaveText(filter.user[4]);

    //There is no option to remove filters
    //Selecting show all to see all users
    await page.locator(userManagement.userDropdown).selectOption(filter.user[1]);

    //Filtering Roles

    //Checking Role Dropdown appears
    const roleDropdown = await page.locator(userManagement.roleDropdown);
    await expect(roleDropdown).toBeVisible();

    //Checking if no filter has been applied
    await expect(roleDropdown).toHaveValue('');

    //Selecting Visitor
    await page.locator(userManagement.roleDropdown).selectOption(filter.role[3]);

//Cannot locate the values of the role dropdowns
    // const role = await page.locator(userManagement.changeRoleDropdown).allTextContents();
    // await expect(role).toBe(filter.role[2]);

    //Alternative, checking test account role
    const firstOption = await page.locator(userManagement.testRole2Dropdown);
    await expect(firstOption).toHaveValue(filter.role[3]);

    // //There is no option to remove filters.
    //  Selecting show all roles to see all user roles
    await page.locator(userManagement.roleDropdown).selectOption(filter.user[1]);
});

test.afterEach(async ({ page }) => {

    await page.click(userManagement.signOut);
    await page.close();
});

