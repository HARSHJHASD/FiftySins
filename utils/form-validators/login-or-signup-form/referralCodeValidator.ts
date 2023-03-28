export default (referralCode: string) => {
    // Regular expression pattern to match referral code format and length of 6
    const pattern = /^[a-zA-Z0-9]{6}$/;
    // check if the referral code is empty or not in the format a-z or A-Z or 0-9
    if (!referralCode || !pattern.test(referralCode)) {
        return false;
    }
    return true;
};
