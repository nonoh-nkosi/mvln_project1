//This file contains Locators for the Security Page under User Settings

export const SecurityPage = {

        //Tabs
        userSubMenu: 'Account',
        securityTab: 'Security',

        //Headings
        securityHeading: 'Security',
        updatePasswordHeading: 'h2:has-text("Update Password")',
        userSetting: 'h2:has-text("User Settings")',

        //Links
        dashBoardPage:'[id="dashboardDirect"]',

        //Security Page Fields
        currentPassword: '[id="currentPassword"]',
        newPassword: '[id="newPassword"]',
        confirmPassword: '[id="confirmPassword"]',

        //Buttons
        securitySaveButton: '[id="passwordSave"]',
        securityConfirmButton: 'Save',
        securityCancelButton: '[id="passwordCancel"]',
        
        //Error Messages
        currentPasswordError: '[id="currentPasswordError"]',
        newPasswordError: '[id="newPasswordError"]',

        // Confirmation Message
        successMessage: '[id="modal_border"]',
}
