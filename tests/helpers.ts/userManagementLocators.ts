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
       cancel: '.btn btn-secondary',

       //Confirmation Message
       resetConfirm: 'Bulk User Roles updated successfully',
   //CheckBox for deactivating user
   bandilebox: 'label[for="customCheckbox3"].styledCheckbox',

   //Fields for New user
   nameField: '[id="name"]',
   surnameField: '[id="surname"]',
   emailField: '[id="email"]',
   phoneField: '[id="phone"]',

   //Dropdown
   role: '[id="role"]',
   mainPageRole: '[id="optionRoleSelect646"]',
   clickToView: 'span.t-select-btn',
   clickToViewChild: '[id="646"]',
   bulkAction: 'span.t-select-btn',

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
    
    //Success Messages
    editUserSuccessMessage: 'text=User information updated successfully',
    resetPasswordMessage: 'text=User Password reset is successfully sent',

   //New user messages
   errorMessage: 'Invalid email address!',
   userExist: '//span[@class="error-message"]',

   //Edit user messages
   confirmMessage: 'h5:has-text("Please Confirm Changes:")',
   editErrorMessage: '.errorDiv',

   //Deactivate messages
   deactivationPromptMessage: 'h5.modal-title', 
   
   //Links
   userElement: '#fullNameTable_647',
   userManagement: 'text=User Management',
   inactive: 'span#statusContainer_646',
   report: 'a[href="/Reports/reports.php"]',
   
   //Headings
   //userInformation: 'User Information',
   
   }
   