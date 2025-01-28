//This file contains the locators for the Login Page

export const signInPage = {
        
    //Headings
    subHeading: 'Enter your email and password to sign in',
    signInSubHead: '[id="signInNotification"]',

    //Error Messages
    noUserMessage: 'User not found',
    wrongCredentialsMessage: 'Wrong Email or Password Combination',
    twoAttemptsLeftMessage: 'Two attempts left',
    oneAttemptLeft: 'One attempt left',
    noAttemptsLeft: 'No more login attempts left. Please contact your administrator',
    lockedAccountMessage: 'User account is not active. Please contact your administrator.',
    emailRequiredMessage: 'Email is required',
    passwordRequiredMessage: 'Password is required',

    //Error Message Locators
    noUserError: 'div.error',
    wrongCredentialsError: 'div.error',
    lockedAccountError: 'span.error',
    requiredFieldError: 'span.error',
  
    //Login Page Fields
    emailField: '[id="email"]',
    emailFieldPlaceholder: '[placeholder="Username"]',
    passwordField: '[id="password"]',
    passwordPlaceholder: '[placeholder="Password"]',

    //Buttons
    loginButton: '[type="submit"]',
    forgotPassword: '[id="forgotPasswordButton"]',
}