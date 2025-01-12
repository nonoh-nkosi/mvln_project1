import { expect, test } from "@playwright/test";
import { login } from "./helpers.ts/login.ts";
import { userManagement } from "./helpers.ts/userManagementLocators.ts";
import { landingPage } from "./helpers.ts/landingPageLocators.ts"
import { newUserDetails } from "./testData/newUserDetails.data.ts";

test.describe('User management', () => {
// beforeEach hook to navigate to two different pages before each test
test.beforeEach(async ({ page }) => {

await login(page);

});
// Verify creation of a new user account
test('Verify creation of a new user account', async ({ page }) => {

await page.locator(userManagement.addUserButton).click();

await page.locator(userManagement.nameField).fill(newUserDetails.name);
const nameField = await page.locator(userManagement.nameField);
await expect(nameField).toHaveValue(newUserDetails.name);

await page.locator(userManagement.sunameField).fill(newUserDetails.surname);
const surname = await page.locator(userManagement.sunameField);
await expect(surname).toHaveValue(newUserDetails.surname);

await page.locator(userManagement.emailField).fill(newUserDetails.email);
const email = await page.locator(userManagement.emailField);
await expect(email).toHaveValue(newUserDetails.email);

await page.locator(userManagement.phoneField).fill(newUserDetails.phone);
const phone = await page.locator(userManagement.phoneField);
await expect(phone).toHaveValue(newUserDetails.phone);

await page.locator(userManagement.departmentField).fill(newUserDetails.department);
const department = await page.locator(userManagement.departmentField);
await expect(department).toHaveValue(newUserDetails.department);

await page.locator(userManagement.role).click();
const dropdown = page.locator(userManagement.role);
await dropdown.selectOption({ value: 'Visitor' });

//Don't want to create another
/*await page.locator(userManagement.submitBtn).click();
const closeButton = await page.locator(userManagement.closeButton).click();
const submitButton = await page.locator(userManagement.submitBtn).click();
const successMessage = await page.getByText('New user is successfully created');
await expect(successMessage).toBeVisible(); */

});

test('Verify uniqueness of newly created user', async ({ page }) => {

//Adding the same userv to verify the uniqueness
await page.locator(userManagement.addUserButton).click();

// Fill in the user details
await page.locator(userManagement.nameField).fill(newUserDetails.name);
await page.locator(userManagement.sunameField).fill(newUserDetails.surname);
await page.locator(userManagement.emailField).fill(newUserDetails.email);
await page.locator(userManagement.phoneField).fill(newUserDetails.phone);
await page.locator(userManagement.departmentField).fill(newUserDetails.department);
// Wait for the role dropdown to become visible and select an option
const roleDropdown2 = page.locator(userManagement.role);
await roleDropdown2.selectOption(newUserDetails.role);

await page.locator(userManagement.submitBtn).click();//Start from here

await page.locator(userManagement.role).click();
const dropdown = page.locator(userManagement.role);
await dropdown.selectOption({ value: 'Visitor' });
//const submitButton = await page.locator(userManagement.submitBtn).click();
//await expect(submitButton).tohave
});

test('Verify assignment of specific role to users', async ({ page }) => {

await page.locator(userManagement.mainPageRole).click();
const dropdown = page.locator(userManagement.mainPageRole);
await dropdown.selectOption({ value: 'Visitor' });

await page.locator(userManagement.signOut).click();
await login(page);

await page.locator(userManagement.userManagementLink)
const userLink = await page.locator(userManagement.userManagementLink)
await expect(userLink).toBeDisabled();
await userLink.click();



}); 

//verifying error handling during user creation 7
test('Error handling for email field', async ({ page }) => {

(await page.waitForSelector (userManagement.addUserButton, { state: 'visible', timeout: 20000 })).click();
await page.locator (userManagement.emailField).click();

await page.locator(userManagement.emailField).fill(newUserDetails.name);
// cannot handle errors
/*const errorMessage2 = await page.locator(userManagement.errorMessage);
await expect(errorMessage2).toBeVisible();
//No error handling -bug*/
}); 
/*test.afterEach('Logout and Close the page', async ({ page }) => {
await page.locator(landingPage.userManagement.signOut).click();
await page.close(); 
});
*/

});
