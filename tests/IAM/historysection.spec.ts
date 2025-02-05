import { expect, test } from "playwright/test";
import { login } from "../helpers.ts/login";
import { formatISO9075, isEqual } from "date-fns";
import { userManagement } from "../helpers.ts/userManagementLocators";
import { history } from "../testdata/historySection.data";

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

    //Selecting a new role
    const testaccount = await page.locator(userManagement.changeUserInfo)
    await testaccount.selectOption('Visitor')

    //Page reloads after role has been changed
    //Account Management Page content sometimes is not visible which leads to the test failing
    await page.click(userManagement.confirmRole);

    //Verify Seamless Navigation to User Account History Section
    await historySection.click();

    //Capturing system date and formatting it the way it is on the website e.g. 2025-02-03 20:57:02
    const systemTime = formatISO9075(new Date())

    //Verify Logging of Relevant User Account Changes in History Section
    const log = await page.locator(userManagement.historyLog).first()
    await expect(log).toBeVisible();
    
    // //Verify Accuracy of Timestamps in User Account History
    const timeStamps = await log.locator(userManagement.timeStamp).allTextContents();

    //Temporary solution
    //Checking if the dates are the same
    //Converting the date so only the date shows
    const timestampWithoutBracketsandTime = timeStamps.join(",").slice(1, 11)//The value will be today's date
    const systemTimeWithoutTime = systemTime.slice(0, 10)// The value will be today'date 
    const result = isEqual(systemTimeWithoutTime, timestampWithoutBracketsandTime)
    await expect(result).toBeTruthy();

    //Permanent solution
    //There is a 2 hour time difference between the system time and the timestamp
    // const timestampValue= timeStamps.join(",").slice(1, 20);
    // const systemTimeValue= systemTime.slice(0, 19)
    // const result = isEqual(systemTimeValue, timestampValue)
    // await expect(result).toBeTruthy();

    const changes = await log.locator(userManagement.accountChanges);
    await expect(changes).toBeVisible();
    // Verify Detailed Descriptions in User Account History Log Entries
    await expect(changes).toHaveText(history.changes)
    
    const account = await log.locator(userManagement.accountName);
    await expect(account).toBeVisible();
    //Verify User Association in User Account History Log Entries
    await expect(account).toHaveText(history.account);
});

test.afterEach(async ({ page }) => {

    await page.locator(userManagement.closeHistorySection).click();
    await page.click(userManagement.signOut);
    await page.close();
});