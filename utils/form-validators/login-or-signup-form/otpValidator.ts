export default (otp: string) => {
    // Regular expression pattern to match otp format and length of 6
    const pattern = /^\d{6}$/;
    // check if the otp is empty or not in the format 0-9
    if (!otp || !pattern.test(otp)) {
        return false;
    }
    return true;
};
