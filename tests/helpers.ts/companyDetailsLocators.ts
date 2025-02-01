// This file contains the locators for the Company Details Page under Settings

export const businessDetails ={

    //Tabs
    dashBoardPage: 'Dashboard',
    companyDetailsTab: 'Company Details',
    salesTab: 'Sales',

    //Company Details 
    phone: '#company_phone.form-control',
    email: '#email.form-control',

    //CompanyType 
    vATStatus: '#vatStatus.form-select',
    sACAAstatus: '#exemptionStatus.form-select',

    //Primary Contact Details
    firstName: '#primaryName.form-control',
    lastName: '#primarySurname.form-control',
    phoneNumber: '#primaryPhone.form-control',
    emailAddress: '#primaryEmail.form-control',

    //Billing Address 
    billingStreet: '#billingStreet.form-control',
    billingCity: '#billingCity.form-control',
    billingState: '#billingState.form-control',
    billingCountry: '#billingCountry.form-control',
    billingPostal: '#billingPostal.form-control',

    //Shipping Address 
    sameBillingCheckbox: '#sameAsBilling.form-control',
    shippingStreet: '#shippingStreet.form-control',
    shippingCity: '#shippingCity.form-control',
    shippingProvince: '#shippingState.form-control',
    shippingCountry: '#shippingCountry.form-control',
    shippingPostalCode: '#shippingPostal.form-control',

    //Billing Additional 
    billingATT: '#billingATT.form-control',
    billingEmail: '#billingEmail.form-control',

    //Banking Details 
    bank: '#bank.form-control',
    bankAccountHolder: '#account_name.form-control',
    accountNumber: '#account_no.form-control',
    branch: '#branch_code.form-control',
    
    //Save Button
    saveChanges: '[id="fixed-button"]', 
    
    //Success Message
    updateSucess: 'div.message',
    sucessMessage: 'Update successful.',
}