//This file contains locators for the User Account Management page

export const userManagement = {

      //Headings
      userInformation: 'User Information',
       heading: 'User Account Management',
    
    //Buttons
    addUserButton: '[id="openModalBtn"]',
     submitBtn:'button[text()="Submit"]',
     closeButton: 'span[aria-hidden="true"]',
    
     editButton: 'Edit',
     saveButton: 'button:has-text("Save")',
    confirmButton: 'button.editConfirmation',

       //singleAccount Role Buttons
       checkBox1: 'customCheckbox1',
       checkBox2: 'styledCheckBox',

       bulkAction: '.t-select-btn',

       updateUserRole1: '[id="newRoleButton"]',
       //or
       updateUserRole2: 'Update User Roles',

       bulkActionSelect: '[id="BulkOptionRoleSelect"]',

       bulkConfirm1: 'Confirm',
       //or
       bulkConfirm2: 'bulkRoleSave',

       userSelectRole: '[id="optionRoleSelect648"]',
       //Buttons
       confirmRole: '[id="confirmRoleBtn"]',


    
    //Fields 
    nameField: '[id="name"]',
    sunameField: '[id="surname"]',
    emailField: '[id="email"]',
    phoneField: '[id="phone"]',
    departmentField: '[id="department"]',
    role:  '[id="role"]',

    //Edit User Fields
    editEmail: '[id="email_647"]',
    editDepartment: '[id="department_647"]',
    name: '[id="name_647"]',
    
    //Error messages
    errorMessage: 'Invalid email address!',
    editErrorMessage: '.errorDiv',
    
    //Success Messages
    confirmMessage: 'h5:has-text("Please Confirm Changes:")',
    successMessage: 'text=User information updated successfully',
    
    //Links
    // userElement: 'span:has-text("will parker")',
    // userElement: 'Will parker',
    userElement: '#fullNameTable_647',


}