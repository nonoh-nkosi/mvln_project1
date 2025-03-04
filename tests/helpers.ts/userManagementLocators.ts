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
   mainPageRole: '[id="optionRoleSelect647"]',
   confirmBtn: 'button:has-text("Confirm")',
     
   //Checkboxes
   checkBox1: 'label[for="customCheckbox0"].styledCheckbox',
   checkBox2: 'label[for="customCheckbox1"].styledCheckbox',
   checkBox3: 'label[for="customCheckbox2"].styledCheckbox',

   //singleAccount Role Buttons
              //& 
   //EditAccountRole
   fillCheckbox: 'label[for="customCheckbox1"].styledCheckbox',
   bulkAction: '.t-select-btn',
   bulkDropdown: 'ul.t-dropdown-list',
   updateUserRole: 'Update User Roles',
   bulkActionSelect: '[id="BulkOptionRoleSelect"]',
   bulkConfirm: '[id="bulkRoleSave"]',
   userSelectRole: '[id="optionRoleSelect647"]',
   //Buttons
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

   //Bulk Reactivate User Account
   bulkReactivationPrompt1: 'div.modal-header d-flex justify-content-center',
   bulkReactivationPrompt2: '[id="userModalLabel"]',
   confirmationPrompt: 'div.modal-header h5.modal-title#userModalLabel',
   bulkReactivationPromptHeading: 'User Re-Activate',
   bulkReactivateDescription: 'div.d-flex.justify-content-center a',
   bulkReactivateDescriptionText: 'Are you sure you want to Re-Activate 3 users',
   confirmActivation: 'role=button[name="Confirm activation"]',
   bulkReactivateNotification: 'Status for the users was successfully updated to Active',

   //Bulk Deactivate User Account
   deactivateCheckbox: 'label[for="customCheckbox6"].styledCheckbox',
   deactivateButton: 'li[data-id="646"] a.actionButton',
   deactivateButtonAdmin: 'a[data-id="646"][class="actionButton"]',

   //Deactivate User Account
   bulkDeactivateButton: '[id="deactivateButton"]',
   confirmDeactivation: 'role=button[name="Yes"]',
   confirmDeactivationMessage: 'p:has-text("Are you sure you want to deactivate this user?")',
   confirmDeactivationAdmin: '#confirmActivation',
   deactivateStatus: '#statusContainer_646',
   bandileAccount: 'span.t-select-btn',
    
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

   //Bulk Edit User Account
   editUserRole: '[id="newRoleButton"]',
   confirmRoleHeading: '[id="confirmModalLabel"]',
   aliceRoleDropdown: '[id="optionRoleSelect652"]',
   testingRoleDropdown: '[id="optionRoleSelect651"]',

   //Bulk Password Reset Buttons
   resetPassword1: 'Reset Password',
   resetPassword2: '.button.btn.btn-secondary',
   confirmReset1: 'Send Reset',
   passwordResetBtn: '[id="passwordResetButton"]',
   //Messages
   bulkResetPassword: 'User Password Update is successfully sent',
   successNotification: '[id="successModal"]',

//Filter Options
//Filters
userDropdown: '#user-dropdown',
roleDropdown: '#role-dropdown',
//User Dropdown boxes
changeRoleDropdown: '.form-select changeRole',
testRole1Dropdown: '[id="optionRoleSelect646"]',
testRole2Dropdown: '[id="optionRoleSelect652"]',
//Users Filter Ids
userFilter1: '[id="fullNameTable_648"]',
userFilter2: '[id="fullNameTable_649"]',
//testRole1 Email Value
emailValue: '[id="emailTable_646"]',

//History Section
historyButton: 'History',
closeHistorySection: '#userRoleHistoryModal i',
changeUserInfo: '[id="optionRoleSelect651"]',
historyLog: 'li.historyData',
timeStamp: 'span.dateStamp',
accountChanges: 'span.taskText',
accountName: 'span.userName',

   //Error message
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