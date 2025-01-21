//This file contains locators for the User Account Management page

export const userManagement = {

      //Headings
      userInformation: 'User Information',
      userPasswordReset: 'User Password Reset',
       heading: 'User Account Management',
    
    //Buttons
    addUserButton: '[id="openModalBtn"]',
     submitBtn:'button[text()="Submit"]',
     closeButton: 'span[aria-hidden="true"]',
    
     editButton: 'Edit',
     saveButton: 'button:has-text("Save")',
    confirmButton: 'button.editConfirmation',
    signOut: 'Sign Out',

       //singleAccount Role Buttons
       fillCheckbox: 'label[for="customCheckbox1"].styledCheckbox',

       bulkAction: '.t-select-btn',
       bulkDropdown: 'ul.t-dropdown-list',
      
       updateUserRole: 'Update User Roles',

       bulkActionSelect: '[id="BulkOptionRoleSelect"]',

       bulkConfirm: '[id="bulkRoleSave"]',

       userSelectRole: '[id="optionRoleSelect648"]',
       //Buttons
       confirmRole: '[id="confirmRoleBtn"]',
       cancel: '.btn btn-secondary',

       //Confirmation Message
       resetConfirm: 'Bulk User Roles updated successfully',


    
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

    //Reset Password Buttons
    resetPassword1: 'Reset Password',
    resetPassword2: '.button.btn.btn-secondary',

    confirmReset1: 'Send Reset',
    //or
    confirmReset2: '.button.btn.btn-secondary',
    
    //Error messages
    errorMessage: 'Invalid email address!',
    editErrorMessage: '.errorDiv',
    
    //Success Messages
    confirmMessage: 'h5:has-text("Please Confirm Changes:")',
    editUserSuccessMessage: 'text=User information updated successfully',
    resetPasswordMessage: 'text=User Password reset is successfully sent',
    
    //Links
    // userElement: 'span:has-text("will parker")',
    // userElement: 'Will parker',
    userElement: '#fullNameTable_647',


}