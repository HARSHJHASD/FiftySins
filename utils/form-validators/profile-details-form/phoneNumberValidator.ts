export default (phone: string): boolean => {
    // Regular expression pattern to match phone number format
    const pattern = /^[+]?\d{1,3}[-\s.]?\d{2,4}[-\s.]?\d{2,4}[-\s.]?\d{2,4}$/;

    // Check if the phone number matches the pattern
    if (!pattern.test(phone)) {
        return false;
    }

    // Return true if the phone number passes all checks
    return true;
};
