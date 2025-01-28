//This file contains the test data for the change Security Details test file

export const updatePassword = {
    valid: {
        currentPassword: 'DocuNation@1355',
        newPassword: 'DocuNation@131',
        confirmPassword: 'DocuNation1@131',
    }, 
    
    invalid: {
        currentPassword: 'DocuNation@1355',
        newPassword: 'DocuNation@1351',
        confirmPassword: 'DocuNation@135',
    },

    weakPassword: {
        currentPassword: 'DocuNation@1355',
        newPassword: 'Docunation',
        confirmPassword: 'Docunation',
    },

    strongPassword: {
        currentPassword: 'DocuNation@1355',
        newPassword: 'DocuNation@1351',
        confirmPassword: 'DocuNation@1351',

    },

    noChangesPassword: {
        currentPassword: 'DocuNation@1355',
        newPassword: 'DocuNation@1355',
        confirmPassword: 'DocuNation@1355',
    }
}