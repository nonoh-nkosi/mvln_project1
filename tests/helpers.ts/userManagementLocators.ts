//This file contains locators for the User Account Management page

export const userManagement = {

        heading: 'User Account Management',
        
        //Buttons
        addUserButton: '[id="openModalBtn"]',
                submitBtn:'button[text()="Submit"]',
        
                //Edit user buttons
                editButton: 'Edit',
                saveButton: 'button:has-text("Save")',
                confirmButton: 'button.editConfirmation',
        
                //Fields for New user
                nameField: '[id="name"]',
                sunameField: '[id="surname"]',
                emailField: '[id="email"]',
                phoneField: '[id="phone"]',
                departmentField: '[id="department"]',
                editEmail: '[id="email_647"]',
                editDepartment: '[id="department_647"]',
                
        
                //Fields for Editing
                name: '[id="name_647"]',
        
        
                role:  '[id="role"]',
        
                //New user messages
                errorMessage: 'Invalid email address!',
        
                //Edit user messages
                confirmMessage: 'h5:has-text("Please Confirm Changes:")',
                editErrorMessage: '.errorDiv',
                successMessage: 'text=User information updated successfully',
                
                //Links
                // userElement: 'span:has-text("will parker")',
                // userElement: 'Will parker',
                userElement: '#fullNameTable_647',

                //Headings
                userInformation: 'User Information',


    }
