//This file contains the test data for the change Security Details test file
import { config } from "../helpers.ts/config"

export const updatePassword = {
    valid: {
        currentPassword: config.credentials.password,
        newPassword: 'DocuNation@13526',
        confirmPassword: 'DocuNation@13526',
    }, 
    
    invalid: {
        currentPassword: config.credentials.password,
        newPassword: 'DocuNation@1351',
        confirmPassword: 'DocuNation@135',
    },

    weakPassword: {
        currentPassword: config.credentials.password,
        newPassword: 'Docunation',
        confirmPassword: 'Docunation',
    },

    strongPassword: {
        currentPassword: config.credentials.password,
        newPassword: 'DocuNation@1351',
        confirmPassword: 'DocuNation@1351',

    },

    noChangesPassword: {
        currentPassword: config.credentials.password,
        newPassword: config.credentials.password,
        confirmPassword: config.credentials.password,
    }
}