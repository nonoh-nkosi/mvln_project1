// This file contains the locators for the Company Details Page under Settings

export const businessDetails ={

    //Tabs
    companyDetailsTab: 'Company Details',
    dashBoardPage: 'Dashboard',

    //Company Details 
    phone: '[id="company_phone"]',
    email: '[id="email"]',

    //CompanyType 
    vATStatus: '[id="vatStatus"]',
    sACAAshipping: '[id="exemptionShipping"]',

    //Primary Contact Details
    firstName: '[id="primaryName"]',
    lastName: '[id="primarySurname"]',
    phoneNumber: '[id="primaryPhone"]',
    emailAddress: '[id="primaryEmail"]',

    //Billing Address 
    billingStreet: '[id="billingStreet"]',
    billingCity: '[id="billingCity"]',
    billingState: '[id="billingState"]',
    billingCountry: '[id="billingCountry"]',
    billingPostal: '[id="billingPostal"]',

    //Shipping Address 
    sameBillingCheckbox: '[id="sameAsBilling"]',
    shippingStreet: '[id="shippingStreet"]',
    shippingCity: '[id="shippingCity"]',
    shippingProvince: '[id="shippingState"]',
    shippingCountry: '[id="shippingCountry"]',
    shippingPostalCode: '[id="shippingPostal"]',

    //Billing Additional 
    billingATT: '[id="billingATT"]',
    billingEmail: '[id="billingEmail"]',

    //Banking Details 
    bank: '[id="bank"]',
    bankAccountHolder: '[id="account_name"]',
    accountNumber: '[id="account_no"]',
    branch: '[id="branch_code"]',
    
    //Save Button
    saveChanges: '[id="fixed-button"]', 
    
    //Success Message
    updateSucess: 'div.message',
    sucessMessage: 'Update successful.',
}