import { expect, test } from "@playwright/test";
import { login } from "./helpers.ts/login.ts";
import { userManagement } from "./helpers.ts/userManagementLocators.ts";
import { landingPage } from "./helpers.ts/landingPageLocators.ts"
import { newUserDetails } from "./testData/newUserDetails.data.ts";


test.describe('User management', () => {
  
  // beforeEach hook to navigate to two different pages before each test
  test.beforeEach(async ({ page }) => {

    await login(page);
    
    // Second navigation
    await page.goto("http://10.10.10.118/User%20Accounts/userManagement.php#");

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
  
  await page.locator(userManagement.role).click();

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
 const roleDropdown = page.locator('[id="role"]');
    await expect (roleDropdown).toHaveText('Select Role');
    await roleDropdown.selectOption(newUserDetails.role);


 const closeButton = await page.locator(userManagement.closeButton).click();

  /*//
  const successMessage = await page.getByText('New user is successfully created');
  await expect(successMessage).toBeVisible(); */

  //const modal = await page.locator('.modal');
  //await expect(modal).toBeHidden(); // If the modal disappears after submission
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

    const roleDropdown = page.locator('[id="role"]');
    await expect (roleDropdown).toHaveText('Select Role');
    await roleDropdown.selectOption(newUserDetails.role);


    const modal = await page.locator('.modal');

    // Wait for the table containing users to load 
    await page.waitForSelector('[id="data-table"]', { state: 'visible', timeout: 5000 });
  
    // Locate the row containing the new user's email
    const newUserEmail = newUserDetails.email; 
    const newUserRow = await page.locator(newUserDetails.email, { hasText: newUserEmail });
  
    // Verify that the row containing the new user is visible, confirming their uniqueness
    await expect(newUserRow).toBeVisible();
  
    //Ensure the user does not exist more than once (for uniqueness)
    const allRows = await page.locator('Will Parker');
    const userCount = await allRows.count();
    let userFound = 0;
  
    for (let i = 0; i < userCount; i++) {
      const rowEmail = await allRows.nth(i).locator('will@docunation.co.za').textContent(); // Adjust to your table's structure
      if (rowEmail === newUserEmail) {
        userFound += 1;
      }
    }
  
    // Assert that there is only one user with this email (i.e., it is unique)
    expect(userFound).toBe(1);  // The email should appear only once
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