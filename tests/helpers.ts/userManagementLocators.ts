//This file contains locators for the User Account Management page

export const userManagement = {

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

   //Buttons Deactivating user
   deactivateButton: 'li#deactivateButton.t-dropdown-item',
   confirmDeactivationBtn: 'button.btn.btn-secondary',

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

   //Fields for editing user
   name: '[id="name_647"]',

   //Dropdown
   role: '[id="role"]',
   mainPageRole: '[id="optionRoleSelect646"]',
   clickToView: 'span.t-select-btn',
   clickToViewChild: '[id="646"]',
   bulkAction: 'span.t-select-btn',

   //New user messages
   errorMessage: 'Invalid email address!',
   userExist: '//span[@class="error-message"]',

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
   