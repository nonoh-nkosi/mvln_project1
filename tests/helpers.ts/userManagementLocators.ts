//This file contains locators for the User Account Management page

export const userManagement = {

    heading: 'User Account Management',

    //Buttons for creating new user
    addUserButton: '[id="openModalBtn"]',
    submitBtn:'button[text()="Submit"]',
    closeButton: 'span[aria-hidden="true"]',
    signOut: 'text=Sign Out',

    //Buttons for editing user
    editButton: 'Edit',
    saveButton: 'button:has-text("Save")',
    confirmButton: 'button.editConfirmation',

    //Buttons Deactivating user
    deactivateButton: 'li#deactivateButton.t-dropdown-item',
    confirmDeactivationBtn: 'button.btn.btn-secondary',

    //CheckBox for deactivating user
    bandilebox: 'label[for="customCheckbox3"].styledCheckbox',

    //Fields for New user
    nameField: '[id="name"]',
    sunameField: '[id="surname"]',
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
    bulkAction: 'input[placeholder="Bulk Action"]',

    //New user messages
    errorMessage: 'Invalid email address!',

    //Edit user messages
    confirmMessage: 'h5:has-text("Please Confirm Changes:")',
    editErrorMessage: '.errorDiv',
    successMessage: 'text=User information updated successfully',

    //Deactivate messages
    deactivationPromptMessage: 'h5.modal-title', 
    
    //Links
    userElement: '#fullNameTable_647',
    userManagementLink: 'text=User Management',
    inactive: 'span#statusContainer_646',
    
    //Headings
    userInformation: 'User Information',
    
    }
    