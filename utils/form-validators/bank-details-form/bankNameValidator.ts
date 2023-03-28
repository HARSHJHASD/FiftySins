export default (bankName: string) => {
    // Regular expression pattern to match bank name format
    const pattern = /^[A-Za-z0-9&\s'-]+$/;
    // check if the bank name is empty or not in the format a-z or A-Z
    if (!bankName || !pattern.test(bankName)) {
        return false;
    }
    return true;
};
