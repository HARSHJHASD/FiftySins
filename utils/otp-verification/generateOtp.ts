// this function will generate a random 6 digit otp
export default () => {
    // generate a random number between 100000 and 999999
    const otp = Math.floor(100000 + Math.random() * 900000);
    return otp;
};
