// Verify otp by comparing the otp sent to the user and the otp entered by the user

export default (otp: string, otpSent: string) => {
    // check if the otp is empty or not in the format 0-9
    if (!otp || !otpSent || otp !== otpSent) {
        return false;
    }
    return true;
};
