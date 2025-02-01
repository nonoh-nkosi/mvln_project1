//This file contains the function to extract the current system timestamp to use in the history section test file

export function getCurrentTimestamp(): Date {
    const currentTime = new Date(); // Capture the current system time
    console.log(`Current System Timestamp: ${currentTime.toISOString()}`);
    return currentTime;
}