//This file contains locators for the DashBoard Page and Login Page

export const landingPage = {
    loginPage: {
        
        //Headings
        signInSubHead: '[id="signInNotification"]',

        //Messages
        subHeading: 'Enter your email and password to sign in',

        //Error Messages
        noUserError: 'div.error',
        noUserMessage: 'User not found',
        wrongCredentialsError: 'div.error',
        wrongCredentialsMessage: 'Wrong Email or Password Combination',
        twoAttemptsLeftMessage: 'Two attempts left',
        oneAttemptLeft: 'One attempt left',
        noAttemptsLeft: 'No more login attempts left. Please contact your administrator',
        lockedAccountError: 'span.error',
        lockedAccountMessage: 'User account is not active. Please contact your administrator.',

        requiredFieldError: 'span.error',
        emailRequiredMessage: 'Email is required',
        passwordRequiredMessage: 'Password is required',

        //Login Page Fields
        emailField: '[id="email"]',
        emailFieldPlaceholder: '[placeholder="Username"]',
        passwordField: '[id="password"]',
        passwordPlaceholder: '[placeholder="Password"]',

        //Buttons
        loginButton: '[type="submit"]',
        forgotPassword: '[id="forgotPasswordButton"]',
    },
    
    dashBoardPage: {
    
        welcomeMessage: 'Welcome, Bandile Personal',

        //Buttons
        menuButton: '[id="menuText"]',
        signOut: 'a[href="/Login Pages/sign-in.php"]',
        profileEntity: '.profileEntity',

        //Links
        userManagement: 'a[href="/User Accounts/userManagement.php"]',
        chartOfAccount: 'a[href="/Chart of Accounts/chartOfAccounts.php"]',
        userPage: 'Profile',
    },
}
