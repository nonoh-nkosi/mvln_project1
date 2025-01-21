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