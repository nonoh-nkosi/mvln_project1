import { expect, test } from "@playwright/test";
import { login } from "./helpers.ts/login.ts";
import { userManagement } from "./helpers.ts/userManagementLocators.ts";
import { newUserDetails } from "./testdata/newUserDetails.data.ts";

test.describe('New User', () => {
    
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

// This test will not create new user because delete functionality is not working
//and when automating new user created was suppose to be deleted
test('Verify creation of a new user account and verify new users uniqueness', async ({ page }) => {

await page.locator(userManagement.addUserButton).click();

await page.locator(userManagement.nameField).fill(newUserDetails.name);
const nameField = await page.locator(userManagement.nameField);
await expect(nameField).toHaveValue(newUserDetails.name);

await page.locator(userManagement.surnameField).fill(newUserDetails.surname);
const surname = await page.locator(userManagement.surnameField);
await expect(surname).toHaveValue(newUserDetails.surname);

await page.locator(userManagement.emailField).fill(newUserDetails.email);
const email = await page.locator(userManagement.emailField);
await expect(email).toHaveValue(newUserDetails.email);

await page.locator(userManagement.phoneField).fill(newUserDetails.phone);
const phone = await page.locator(userManagement.phoneField);
await expect(phone).toHaveValue(newUserDetails.phone);

await page.locator(userManagement.editDepartment).fill(newUserDetails.department);
const department = await page.locator(userManagement.editDepartment);
await expect(department).toHaveValue(newUserDetails.department);

await page.locator(userManagement.role).click();
const dropdown = page.locator(userManagement.role);
await dropdown.selectOption({ value: 'Visitor' });

await page.locator(userManagement.submitBtn).click();

const userAlreadyExist = await page.getByText('Name and surname already exist in the database');
await expect(userAlreadyExist).toBeVisible();
await expect(userAlreadyExist).toHaveCSS('color', 'rgb(255, 0, 0)');

});

test('Verify assignment of specific role to users', async ({ page }) => {

await page.locator(userManagement.mainPageRole).click();
const dropdown = page.locator('[id="optionRoleSelect646"]');
await dropdown.click();
await dropdown.selectOption({ value: 'Sales Representative' });

const confirm = await page.locator('[id="confirmRoleBtn"]');
await confirm.click();

const signout = await page.locator(userManagement.signOut);
await expect(signout).toBeVisible();
await expect(signout).toHaveText('Sign Out');
await signout.click({ force: true });

await login(page);

const menu = await page.locator(userManagement.menu);
await menu.click();

const reportsLink = page.locator(userManagement.report);
await reportsLink.click();
    
await menu.click();

const userManagementLink = await page.getByText('User Management');
await userManagementLink.click();
await expect(page).toHaveURL('http://10.10.10.118/Reports/reports.php#');
}); 

test('Error handling for email field', async ({ page }) => {

await page.locator(userManagement.addUserButton).click();

await page.locator(userManagement.nameField).fill(newUserDetails.name);
const nameField = await page.locator(userManagement.nameField);
await expect(nameField).toHaveValue(newUserDetails.name);

await page.locator(userManagement.surnameField).fill(newUserDetails.surname);
const surname = await page.locator(userManagement.surnameField);
await expect(surname).toHaveValue(newUserDetails.surname);

await page.locator(userManagement.emailField).fill(newUserDetails.name);
const email = await page.locator(userManagement.emailField);
await expect(email).toHaveValue(newUserDetails.name);

await page.locator(userManagement.phoneField).fill(newUserDetails.phone);
const phone = await page.locator(userManagement.phoneField);
await expect(phone).toHaveValue(newUserDetails.phone);

await page.locator(userManagement.editDepartment).fill(newUserDetails.department);
const department = await page.locator(userManagement.editDepartment);
await expect(department).toHaveValue(newUserDetails.department);

//Error message unrecognized and cannot be located
await page.locator(userManagement.submitBtn).click();
const errorMessage2 = await page.getByText('Please fill out this field.');
await expect(errorMessage2).toHaveText('Please fill out this field.');

}); 

});
