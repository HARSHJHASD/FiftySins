/**
 * This defines the data type for Stepper statuses.
 */

/**
 * This defines the data type for Stepper props.
 */
type OnboardingStepperProps = {
    setActiveNumber: () => void;
};

/**
 * This defines the data type for Stepper props.
 */
type UserInfo = {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    phoneNumber?: string;
    dateOfBirth?: string;
};

type StepperChildProps = {
    isSubmit?: boolean;
    skipPerformAction?: () => void;
    submitPerformAction?: () => void;
    userInfo?: UserInfo;
    setPanNumber?: (params: any) => void;
    setUserInfo?: (params: any) => void;
    bankInfo?: {};
    // eslint-disable-next-line no-unused-vars
    setBankInfo?: (prev: any) => void;
};

export { OnboardingStepperProps, StepperChildProps };
