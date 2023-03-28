/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

import { FiftyFinUser } from '../../api-client/user-service/types';

export interface FireBaseUser {
    uid: string;
    email: string;
    emailVerified: boolean;
    displayName: string;
    isAnonymous: boolean;
    providerData: ProviderDatum[];
    stsTokenManager: StsTokenManager;
    createdAt: string;
    lastLoginAt: string;
    apiKey: string;
    appName: string;
}

export interface ProviderDatum {
    providerId: string;
    uid: string;
    displayName: string;
    email: string;
    phoneNumber: null;
    photoURL: null;
}

export interface StsTokenManager {
    refreshToken: string;
    accessToken: string;
    expirationTime: number;
}

export interface GlobalState {
    fiftyFinUser?: FiftyFinUser;
    fireBaseUser?: FireBaseUser;
    error: any;
    isLoading: boolean;
    signUpParams: any;
    isUserCreated: boolean;
    isUserSignedIn: boolean;
    totalLoanAmount: number;
    pledgeFolioTotal: number;
    isOtpSubmissionSuccess?: boolean;
}

interface SignUpParams {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    phoneNumber?: string;
    dateOfBirth?: string;
}
interface SignInParams {
    email?: string;
    password?: string;
}

export interface GlobalAction {
    setIsLoading: (value: boolean) => void;
    setFiftyFinUser: (user?: FiftyFinUser) => void;
    userSignIn: (params: SignInParams) => void;
    setSignUpParams: (params: SignUpParams) => void;
    setFirebaseUser: (user?: FireBaseUser) => void;
    logOut: () => void;
    reset: () => void;
    setPledgeFolioTotal: (total: number) => void;
    submitOtp: (otp: string) => void;
}
