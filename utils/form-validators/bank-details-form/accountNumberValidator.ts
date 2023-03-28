export default (accountNumber: string) => {
    // Regular expression pattern to match account number format and length of 10
    const pattern = /^\d{6,18}$/;
    // check if the account number is empty or not in the format 0-9
    if (!accountNumber || !pattern.test(accountNumber)) {
        return false;
    }
    return true;
};
