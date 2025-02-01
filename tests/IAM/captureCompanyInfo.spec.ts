import { expect, test } from "playwright/test";
import { login } from "../helpers.ts/login";
import { dashBoardPage } from "../helpers.ts/dashboardpageLocators";
import { businessDetails } from "../helpers.ts/companyDetailsLocators";
import { captureInformation } from "../testdata/captureDetails.data";
import { audit } from "../helpers.ts/auditTrailLocators";

test.beforeEach( async ({ page }) => {

    await login(page);

    await page.click(dashBoardPage.menuButton);
    await page.locator(dashBoardPage.chartOfAccountText).click();
    await page.click(dashBoardPage.menuButton);
    await page.locator(dashBoardPage.settings).click();
});

test('Company Profile Information Capture', async ({ page }) => {

    const detailsPage = await page.locator('a', { hasText:businessDetails.companyDetailsTab })
    await expect(detailsPage).toBeVisible();
    await expect(detailsPage).toBeEnabled();

    await page.waitForLoadState('domcontentloaded');

    //DN-161
    //DOM Content is not interactable after load is complete. The user has to wait a few minutes to interact with any of the fields
    //Company Details
    const { email, phone } = captureInformation.companyDetails;

    await page.fill(businessDetails.email, email);
    await page.fill(businessDetails.phone, phone);

    //Company Type
    const { sACAAExemptionStatus} = captureInformation.companyType;
    await page.selectOption(businessDetails.sACAAstatus, sACAAExemptionStatus);

    //Primary Contact Details
    const { firstName, lastName, phoneNumber, emailAddress} = captureInformation.primaryContactDetails;
    await page.fill(businessDetails.firstName, firstName);
    await page.fill(businessDetails.lastName, lastName);
    await page.fill(businessDetails.phoneNumber, phoneNumber);
    await page.fill(businessDetails.emailAddress, emailAddress);

    //Billing Address
    const { billingStreet, billingCity, billingCountry, billingProvince, billingPostalCode} = captureInformation.billingAddress;
    await page.fill(businessDetails.billingStreet, billingStreet);
    await page.fill(businessDetails.billingCity, billingCity);
    await page.fill(businessDetails.billingCountry, billingCountry);
    await page.fill(businessDetails.billingState, billingProvince);//Executes until this point then stops since elements are not interactable
    await page.fill(businessDetails.billingPostal, billingPostalCode);

    //Shipping Address
    const { shippingStreet, shippingCity, shippingCountry, shippingProvince, shippingPostalCode} = captureInformation.shippingAddress;
    await page.fill(businessDetails.shippingStreet, shippingStreet);
    await page.fill(businessDetails.shippingCity, shippingCity);
    await page.fill(businessDetails.shippingCountry, shippingCountry);
    await page.fill(businessDetails.shippingProvince, shippingProvince);
    await page.fill(businessDetails.shippingPostalCode, shippingPostalCode);

    //Billing Additional
    const { billingATT, billingEmail} = captureInformation.billingAdditional;
    await page.fill(businessDetails.billingATT, billingATT);
    await page.fill(businessDetails.billingEmail, billingEmail);

    //Banking Details
    const { bank, bankAccountHolder, accountNumber, branch } = captureInformation.bankingDetails;
    await page.fill(businessDetails.bank, bank);
    await page.fill(businessDetails.bankAccountHolder, bankAccountHolder);
    await page.fill(businessDetails.accountNumber, accountNumber);
    await page.fill(businessDetails.branch, branch);

    //Save changes button
    await page.locator(businessDetails.saveChanges).click();

    //Success Message
    const sucessMessage = await page.locator(businessDetails.updateSucess);
    await expect(sucessMessage).toBeVisible();
    await expect(sucessMessage).toHaveText(businessDetails.sucessMessage);
    await expect(sucessMessage).toHaveCSS('color', 'green');
});

test('Dynamic Update of System Fields and Templates', async ({ page }) => {

    const detailsPage = await page.locator('a', { hasText:businessDetails.companyDetailsTab })
    await expect(detailsPage).toBeVisible();
    await expect(detailsPage).toBeEnabled();

    await page.waitForLoadState('domcontentloaded');

    //DN-161
    //DOM Content is not interactable after load is complete. The user has to wait a few minutes to interact with any of the fields

    //Company Details
    const { email, phone } = captureInformation.companyDetails;

    const emailField = await page.locator(businessDetails.email);
    await expect(emailField).toHaveValue(email);

    const phoneField = await page.locator(businessDetails.phone);
    await expect(phoneField).toHaveValue(phone);

    //Company Type
    const { sACAAExemptionStatus} = captureInformation.companyType;
    
    const sACAAExemptionStatusField = await page.locator(businessDetails.sACAAstatus);
    await expect(sACAAExemptionStatusField).toHaveValue(sACAAExemptionStatus);

    //Primary Contact Details
    const { firstName, lastName, phoneNumber, emailAddress} = captureInformation.primaryContactDetails;

    const firstNameField = await page.locator(businessDetails.firstName);
    await expect(firstNameField).toHaveValue(firstName);

    const lastNameField = await page.locator(businessDetails.lastName);
    await expect(lastNameField).toHaveValue(lastName);

    const phoneNumeberField = await page.locator(businessDetails.phoneNumber);
    await expect(phoneNumeberField).toHaveValue(phoneNumber);

    const emailAddressField = await page.locator(businessDetails.emailAddress);
    await expect(emailAddressField).toHaveValue(emailAddress);

    //Billing Address 
    const { billingStreet, billingCity, billingCountry, billingProvince, billingPostalCode} = captureInformation.billingAddress;
    
    const billingStreetField = await page.locator(businessDetails.billingStreet);
    await expect(billingStreetField).toHaveValue(billingStreet);

    const billingCityField = await page.locator(businessDetails.billingCity);
    await expect(billingCityField).toHaveValue(billingCity);

    const billingCountryField = await page.locator(businessDetails.billingCountry);
    await expect(billingCountryField).toHaveValue(billingCountry);

    const billingProvinceField = await page.locator(businessDetails.billingState);
    await expect(billingProvinceField).toHaveValue(billingProvince);

    const billingPostalField = await page.locator(businessDetails.billingPostal);
    await expect(billingPostalField).toHaveValue(billingPostalCode);

    //Shipping Address
    const { shippingStreet, shippingCity, shippingCountry, shippingProvince, shippingPostalCode} = captureInformation.shippingAddress;
    
    const shippingStreetField = await page.locator(businessDetails.shippingStreet);
    await expect(shippingStreetField).toHaveValue(shippingStreet);

    const shippingCityField = await page.locator(businessDetails.shippingCity);
    await expect(shippingCityField).toHaveValue(shippingCity);

    const shippingCountryField = await page.locator(businessDetails.shippingCountry);
    await expect(shippingCountryField).toHaveValue(shippingCountry);

    const shippingProvinceField = await page.locator(businessDetails.shippingProvince);
    await expect(shippingProvinceField).toHaveValue(shippingProvince);

    const shippingPostalField = await page.locator(businessDetails.shippingPostalCode);
    await expect(shippingPostalField).toHaveValue(shippingPostalCode);

    //Billing Additional
    const { billingATT, billingEmail} = captureInformation.billingAdditional;
    
    const billingATTField = await page.locator(businessDetails.billingATT);
    await expect(billingATTField).toHaveValue(billingATT);

    const billingEmailField = await page.locator(businessDetails.billingEmail);
    await expect(billingEmailField).toHaveValue(billingEmail);

    //Banking Details
    const { bank, bankAccountHolder, accountNumber, branch } = captureInformation.bankingDetails;
    
    const bankField = await page.locator(businessDetails.bank);
    await expect(bankField).toHaveValue(bank);

    const bankAccountHolderField = await page.locator(businessDetails.bankAccountHolder);
    await expect(bankAccountHolderField).toHaveValue(bankAccountHolder);

    const accountNumberField = await page.locator(businessDetails.accountNumber);
    await expect(accountNumberField).toHaveValue(accountNumber);

    const branchField = await page.locator(businessDetails.branch);
    await expect(branchField).toHaveValue(branch);
});

test('Audit Trail Visibility and Accessibility', async ({ page }) => {

    const detailsPage = await page.locator('a', { hasText:businessDetails.companyDetailsTab })
    await expect(detailsPage).toBeVisible();
    await expect(detailsPage).toBeEnabled();
   
    await page.waitForLoadState('domcontentloaded');

    await page.locator('a', { hasText: audit.auditTrailTab }).click();
});

test.afterEach(async ({ page }) => {

    await page.waitForLoadState('domcontentloaded');
    //Button is sometimes unclickable and requires the User to click on it multiple times
    await page.getByRole('link', { name: businessDetails.dashBoardPage }).click();

    await page.click(dashBoardPage.signOut);
    await page.close();
});