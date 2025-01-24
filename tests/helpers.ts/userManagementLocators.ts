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
  signOut: 'span.d-sm-inline',
  mainPageRole: '[id="optionRoleSelect646"]',
     confirmBtn: 'button:has-text("Confirm")',

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
 surnameField: '[id="surname"]',
 emailField: '[id="email"]',
 phoneField: '[id="phone"]',
 departmentField: '[id="department"]',
 role:  '[id="role"]',

 //Edit User Fields
 name: '[id="name_647"]',
 surname: '[id="surname_647"]',
 editEmail: '[id="email_647"]',
 phone: '[id="phone_647"]',
 department: '[id="department_647"]',
 editRole:  '[id="role_647"]',
 email: '[id="email_647"]',

 //System configured
 systemRole: '[id="role-dropdown"]',
 systemRole2: '[id="optionRoleSelect646"]',
 executiveRole: 'Executive / Company Administrator',
 systemConfirm: '[id="confirmRoleBtn"]',
 systemRole3: '[id="optionRoleSelect650"]',

     //Reset Password Buttons
     resetPassword1: 'Reset Password',
     resetPassword2: '.button.btn.btn-secondary',
 
     confirmReset1: 'Send Reset',
     //or
     confirmReset2: '.button.btn.btn-secondary',
 
 
 //Error messages
 emailErrorMessage: 'Invalid email address!',
 editErrorMessage: '.errorDiv',
 newPasswordErrorMessage: 'Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character.',    

 //Success Messages
 confirmMessage: 'h5:has-text("Please Confirm Changes:")',
 successMessage: 'text=User information updated successfully',
 resetPasswordMessage: 'text=User Password reset is successfully sent',
 
 //Links
    userManagement: 'a[href="/User Accounts/userManagement.php"]',
 userElement: '#fullNameTable_647',
    report: 'a[href="/Reports/reports.php"]',
 menu: '[id="menuText"]',


}