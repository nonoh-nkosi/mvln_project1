//This file contains locators for the User Account Management page

export const userManagement = {

<<<<<<< HEAD
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
       fillCheckbox: 'label[for="customCheckbox1"].styledCheckbox',

       bulkAction: '.t-select-btn',
       bulkDropdown: 'ul.t-dropdown-list',
      
       updateUserRole: 'Update User Roles',
=======
   heading: 'User Account Management',

   //Menu
   menu: '[id="menuText"]',

   //Buttons for creating new user
   addUserButton: '[id="openModalBtn"]',
   submitBtn:'button:has-text("Submit")',
   closeButton: 'span[aria-hidden="true"]',
   signOut: 'span:has-text("Sign Out")',

   //Buttons for editing user
   editButton: 'Edit',
   saveButton: 'button.btn.btn-secondary.userEditField.editConfirmation',
   confirmButton: 'button.editConfirmation',
   closeBtn: 'button.btn.btn-secondary',
>>>>>>> 232d9a7 (created createNEWUser branch,added newUseDetails on testdata file and edited userManagementLocators)

   //Buttons Deactivating user
   deactivateButton: 'li#deactivateButton.t-dropdown-item',
   confirmDeactivationBtn: 'button.btn.btn-secondary',

<<<<<<< HEAD
       bulkConfirm: '[id="bulkRoleSave"]',

       userSelectRole: '[id="optionRoleSelect648"]',
       //Buttons
       confirmRole: '[id="confirmRoleBtn"]',
       cancel: '.btn btn-secondary',

       //Confirmation Message
       resetConfirm: 'Bulk User Roles updated successfully',
=======
   //CheckBox for deactivating user
   bandilebox: 'label[for="customCheckbox3"].styledCheckbox',

   //Fields for New user
   nameField: '[id="name"]',
   surnameField: '[id="surname"]',
   emailField: '[id="email"]',
   phoneField: '[id="phone"]',
   departmentField: '[id="department"]',
   editEmail: '[id="email_647"]',
   editDepartment: '[id="department_647"]',
>>>>>>> 232d9a7 (created createNEWUser branch,added newUseDetails on testdata file and edited userManagementLocators)

   //Fields for editing user
   name: '[id="name_647"]',

   //Dropdown
   role: '[id="role"]',
   mainPageRole: '[id="optionRoleSelect646"]',
   clickToView: 'span.t-select-btn',
   clickToViewChild: '[id="646"]',
   bulkAction: 'span.t-select-btn',

<<<<<<< HEAD
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
=======
   //New user messages
   errorMessage: 'Invalid email address!',
   userExist: '//span[@class="error-message"]',
>>>>>>> 232d9a7 (created createNEWUser branch,added newUseDetails on testdata file and edited userManagementLocators)

   //Edit user messages
   confirmMessage: 'h5:has-text("Please Confirm Changes:")',
   editErrorMessage: '.errorDiv',
   successMessage: 'text=User information updated successfully',

   //Deactivate messages
   deactivationPromptMessage: 'h5.modal-title', 
   
   //Links
   userElement: '#fullNameTable_647',
   userManagement: 'text=User Management',
   inactive: 'span#statusContainer_646',
   report: 'a[href="/Reports/reports.php"]',
   
   //Headings
   userInformation: 'User Information',
   
   }
   