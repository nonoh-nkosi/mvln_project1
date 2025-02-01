import { expect, test } from "playwright/test";
import { login } from "../helpers.ts/login";
import { audit } from "../helpers.ts/auditTrailLocators";
import { dashBoardPage } from "../helpers.ts/dashboardpageLocators";

test.beforeEach(async ({ page }) => {

    await login(page);

    await page.click(dashBoardPage.menuButton);
    await page.locator(dashBoardPage.chartOfAccountText).click();
    await page.click(dashBoardPage.menuButton);
    await page.locator(dashBoardPage.settings).click();
});

test('View Audit Trail for Created User Accounts', async ({ page }) => {

    //Checks if the User has landed on the Company Details Page
    const detailsPage = await page.locator('a', { hasText:audit.companyDetailsTab })
    await expect(detailsPage).toBeVisible();
    await expect(detailsPage).toBeEnabled();
   
    await page.waitForLoadState('domcontentloaded');

    //Click on the Audit Trail Tab
    await page.locator('a', { hasText: audit.auditTrailTab }).click();

    //Checks if the Audit Trail Page contents are visible
    const table = await page.locator(audit.auditTrailPage);
    await expect(table).toBeVisible();
});

test.afterEach(async ({ page }) => {

       await page.waitForLoadState('domcontentloaded');
        //Button is sometimes unclickable and requires the User to click on it multiple times
        await page.getByRole('link', { name: audit.dashBoardPage }).click();
    
        await page.click(dashBoardPage.signOut);
        await page.close();
});
