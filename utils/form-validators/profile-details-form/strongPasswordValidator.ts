export default (password: string) => {
    // Regular expression patterns to match password criteria
    const patterns = [
        /[a-z]/, // lowercase letter
        /[A-Z]/, // uppercase letter
        /\d/, // digit
        /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/, // special character
        /.{8,}/ // at least 8 characters long
    ];

    // Check if the password matches all criteria
    const patternCheckArr = patterns?.map((pattern) => {
        if (!pattern.test(password)) {
            return false;
        }
        return true;
    });
    if (patternCheckArr?.includes(false)) {
        return false;
    }
    return password.length >= 8;
};
