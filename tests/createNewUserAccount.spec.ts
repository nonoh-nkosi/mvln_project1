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

// Fill in the user details
await page.locator(userManagement.nameField).fill(newUserDetails.name);
await page.locator(userManagement.sunameField).fill(newUserDetails.surname);
await page.locator(userManagement.emailField).fill(newUserDetails.email);
await page.locator(userManagement.phoneField).fill(newUserDetails.phone);
await page.locator(userManagement.departmentField).fill(newUserDetails.department);

//Don't want to create another
//await page.locator(userManagement.submitBtn).click();

// Assertions to verify user details have been entered correctly
const nameField = await page.locator(userManagement.nameField);
await expect(nameField).toHaveValue(newUserDetails.name);

const surname = await page.locator(userManagement.sunameField);
await expect(surname).toHaveValue(newUserDetails.surname);

const email = await page.locator(userManagement.emailField);
await expect(email).toHaveValue(newUserDetails.email);

const phone = await page.locator(userManagement.phoneField);
await expect(phone).toHaveValue(newUserDetails.phone);

const department = await page.locator(userManagement.departmentField);
await expect(department).toHaveValue(newUserDetails.department);

// Assert that the role dropdown was successfully selected
await page.locator(userManagement.role).click();
const dropdown = page.locator(userManagement.role);
await dropdown.selectOption({ value: 'Visitor' });

//const closeButton = await page.locator(userManagement.closeButton).click();

/*//
const submitButton = await page.locator(userManagement.submitBtn).click();
const successMessage = await page.getByText('New user is successfully created');
await expect(successMessage).toBeVisible(); */

});


// Open the modal for adding a new user 2
test('Verify uniqueness of newly created user', async ({ page }) => {

// Open the modal for adding a new user
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
await page.locator(landingPage.userManagementPage.signOut).click();
await page.close(); 
});
*/

});
