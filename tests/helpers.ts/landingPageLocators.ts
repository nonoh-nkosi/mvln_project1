//This file contains locators for the DashBoard Page and Login Page

export const landingPage = {
    loginPage: {
        
        //Login Page Fields
        emailField: '[id="email"]',
        passwordField: '[id="password"]',

        //Login Button
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
    }
}
