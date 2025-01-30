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

    
           //Reactivate User Account 
           reactivateCheckbox: 'label[for="customCheckbox0"].styledCheckbox',
           activateAccount1: 'Activate',
           //or
           activateAccount2: '[id="ReActivateButton"]',
           
           //Button
           activateCode: 'button.btn.btn-secondary',
           reactivateButton: 'Confirm Activation',

           //Notifications
           activationNotification: '[id="emailNotification"]',
           alreadyActiveNotification: '[id="successModal"]',

           //Messages
           activationMessage: 'Status for the users was successfully updated to Active',
           deactivationMessage: 'User Deactivated successfully',
           alreadyActive: 'The selected user is already active',
    

 //Add User Fields 
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
 validateNameError: '.errorDiv',
 validateSurnameError: '.errorDiv',
 validateEmailError: '.errorDiv',
 validateDepartmentError: '.errorDiv',
 validatePhoneError: '.errorDiv',

     //Bulk Password Reset Buttons
     resetPassword1: 'Reset Password',
     resetPassword2: '.button.btn.btn-secondary',
 
     confirmReset1: 'Send Reset',
     passwordResetBtn: '[id="passwordResetButton"]',

     //Bulk Password Reset Checkboxes
     checkBox1: 'label[for="customCheckbox0"].styledCheckbox',
     checkBox2: 'label[for="customCheckbox1"].styledCheckbox',
     checkBox3: 'label[for="customCheckbox2"].styledCheckbox',

     //Messages
     bulkResetPassword: 'text=User Password Update is sent successfully',
     successNotification: '[id="successModal"]',

//Filter Options
userDropdown: '[id="user-dropdown"]',
roleDropdown: '[id="role-dropdown"]',
changeRoleDropdown: '.form-select changeRole',
 
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