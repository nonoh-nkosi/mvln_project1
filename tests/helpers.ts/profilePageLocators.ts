//This file contains Locators for the Profile Page under User Settings

export const profilePage = {

        //Links
       dashBoardPage:'[id="dashboardDirect"]',
       
       //Profile Page Fields
       editProfile: '[id="profileEdit"]',
       nameField: '[id="name"]',
       surnameField: '[id="surname"]',
       email: '[id="email"]',
       phoneNumber: '[id="phone"]',
       role: '[id="role"]',
       department: '[id="department"]',
       
       //Buttons
        profileSaveButton: '[id="profileConfirm"]',
        profileConfirmButton: 'Save',
        logoutButton: 'Logout',
        profileEntity: '.profileEntity',
           
       //Error Messages
        emailFieldErrorMessage: 'Invalid email address!',
        phoneNumberFieldErrorMessage: 'Invalid phone number!',
        
        //Confirmation Messages
        userUpdateConfirmation: '[id="emailNotification"]',
    }
