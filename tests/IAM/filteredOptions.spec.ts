import { expect, test } from "playwright/test";
import { login } from "../helpers.ts/login";
import { dashBoardPage } from "../helpers.ts/dashboardpageLocators";
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

    const roleDropdown = await page.locator(userManagement.roleDropdown);
    await expect(roleDropdown).toBeVisible();

    await expect(roleDropdown).toBeEmpty();

    await roleDropdown.selectOption(filter.role[4]);

    page.waitForLoadState();

    const role = await page.locator(userManagement.changeRoleDropdown).allTextContents();
    await expect(role).toBe(filter.role[4]);
});

test('Real-Time Updating of User List on User Management Page with Filters', async ({ page }) => {

    const userDropdown = await page.locator(userManagement.userDropdown);
    await expect(userDropdown).toBeVisible();

    await expect(userDropdown).toBeEmpty();

    await userDropdown.selectOption(filter.user[2]);

    const user = await page.locator(userManagement.changeRoleDropdown).allTextContents();
    await expect(user).toBe(filter.user[2]);
});

test('Simultaneous Application of Multiple Filters on User Management Page', async ({ page }) => {

    //Filtering Users
    const userDropdown = await page.locator(userManagement.userDropdown);
    await expect(userDropdown).toBeVisible();

    await expect(userDropdown).toBeEmpty();

    await userDropdown.selectOption(filter.user[3]);

    //Visual Feedback for Active Filters on User Management Page
    //There is no option to remove filters
    const user = await page.locator(userManagement.changeRoleDropdown).allTextContents();
    await expect(user).toBe(filter.user[3]);

    //Filtering Roles
    const roleDropdown = await page.locator(userManagement.roleDropdown);
    await expect(roleDropdown).toBeVisible();

    await expect(roleDropdown).toBeEmpty();

    await roleDropdown.selectOption(filter.role[2]);

    //Visual Feedback for Active Filters on User Management Page
    // //There is no option to remove filters
    const role = await page.locator(userManagement.changeRoleDropdown).allTextContents();
    await expect(role).toBe(filter.role[2]);

    //Resetting Filters on User Management Page
    await roleDropdown.selectOption(filter.role[1]);
});

test.afterEach(async ({ page }) => {

    await page.click(userManagement.signOut);
    await page.close();
});

