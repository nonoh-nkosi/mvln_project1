import { expect, test } from "playwright/test";
import { login } from "../helpers.ts/login";
import { userManagement } from "../helpers.ts/userManagementLocators";
import { history } from "../testdata/historySection.data";
import { getCurrentTimestamp } from "../helpers.ts/timestamp";
import { time } from "console";

test.beforeEach(async ({ page }) => {
    await login(page);

    await page.getByRole('link', { name: 'Menu' }).click();
    await page.getByText("Chart of Accounts").click()

    await page.click("text='Menu'");
    await page.getByText("User Management").click();

    const heading = await page.getByText(userManagement.heading);
    await expect(heading).toBeVisible();
});

test('Verify the Existence and Accessibility of User Account History Section', async ({ page }) => {

    const historySection = await page.locator('i').filter({ hasText: userManagement.historyButton });
    await expect(historySection).toBeVisible();
    await expect(historySection).toBeEnabled();

    const testaccount = await page.locator(userManagement.changeUserInfo)
    await testaccount.selectOption('Visitor')

    //Page reloads after role has been changed
    //Account Management Page content sometimes is not visible which leads to the test failing
    await page.click(userManagement.confirmRole);

    //Verify Seamless Navigation to User Account History Section
    await historySection.click();

    //Retrieves the current time on your machine
    const systemTimestamp = getCurrentTimestamp();
    console.log(`Extracted System Timestamp: ${systemTimestamp}`);

    //Verify Logging of Relevant User Account Changes in History Section
    const log = await page.locator(userManagement.historyLog).first()
    await expect(log).toBeVisible();
    
    // //Verify Accuracy of Timestamps in User Account History
    const timeStamps = await log.locator(userManagement.timeStamp).allTextContents();

    // await expect(timeStamps).toHaveValue(getCurrentTimestamp);
    // //or
    const webTime = timeStamps?.trim().split(' ')[1];
    await expect(timeStamps).toBe('2025-02-01'+ new time());

    // Assert that the extracted timestamp matches the current time
    expect(webTime).toBe(timeStamps); 

    const changes = await log.locator(userManagement.accountChanges);
    await expect(changes).toBeVisible();
    // Verify Detailed Descriptions in User Account History Log Entries
    await expect(changes).toHaveText(history.changes)
    
    const account = await log.locator(userManagement.accountName);
    //Verify User Association in User Account History Log Entries
    await expect(changes).toHaveText(history.account);
});

test.afterEach(async ({ page }) => {

    await page.locator(userManagement.closeHistorySection).click();
    await page.click(userManagement.signOut);
    await page.close();
});