declare global {
    // eslint-disable-next-line no-unused-vars
    interface Window {
        confirmationResult: any;
    }
}

export default async (params) => {
    const { otp } = params;

    // Verify the OTP
    const { confirmationResult } = window;

    return confirmationResult
        .confirm(otp)
        .then(({ user }) => user)
        .catch((error) => error);
};
