// const commonDomains = [
//     'gmail.com',
//     'yahoo.com',
//     'hotmail.com',
//     'outlook.com',
//     'icloud.com',
//     'mail.com',
//     'live.com',
//     'rediffmail.com'
// ];

export default (email: string): boolean => {
    // Regular expression pattern to match email format
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email matches the pattern
    if (!pattern.test(email)) {
        return false;
    }

    // Get the domain from the email
    const domain = email.split('@')[1];

    // Check if the domain is in the list of common domains
    // if (!commonDomains.includes(domain)) {
    //     return false;
    // }

    // Return true if the email passes all checks
    return true;
};
