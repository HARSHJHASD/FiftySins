/* eslint-disable no-unused-vars */
export interface BajajTokenState {
    token: string;
    error: any;
    isLoading: boolean;
    isBajajTokenVerified: boolean;
}

interface GetTokenParams {
    appKey: string;
    appSecret: string;
}

interface VerifyTokenParams {
    accessToken: string;
}

export interface BajajTokenAction {
    getToken: (params: GetTokenParams) => void;
    verifyToken: (params: VerifyTokenParams) => void;
    reset: () => void;
}
