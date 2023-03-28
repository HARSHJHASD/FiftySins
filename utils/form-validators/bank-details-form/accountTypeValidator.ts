export default (accountType: string) => {
    // Regular expression pattern to match account type format and only savings or current account
    const pattern = /^(Savings|Current)$/;
    // check if the account type is empty or not in the format a-z or A-Z
    if (!accountType || !pattern.test(accountType)) {
        return false;
    }
    return true;
};
