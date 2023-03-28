/* eslint-disable no-unused-vars */
export interface DigioState {
    kycStatus: any;
    panInfo: any;
    ckycSuccessData: any;
    isLoading: boolean;
    isKycVerified: boolean;
    isCKycVerified: boolean;
    isKycVerificationProcessSuccess: boolean;
    isSignTermSheetSuccess: boolean;
    isKycStatusApproved: boolean;
    isPanModalOpen: boolean;
    termSheet: any;
    error: any;
}

interface CheckKycVerificationParams {
    userId: string;
    idType: string;
}

interface CheckCKycParams {
    userId: string;
    customerIdentifierType: string;
}

interface KycVerificationParams {
    userId: string;
    idType: string;
    idNumber: string;
}

interface GetKycStatusParams {
    userId: string;
    requestId: string;
}

interface SignTermsSheetParams {
    userId: string;
}

export interface DigioAction {
    checkKycVerification: (params: CheckKycVerificationParams) => void;
    checkCKyc: (params: CheckCKycParams) => void;
    kycVerification: (params: KycVerificationParams) => void;
    getKycStatus: (params: GetKycStatusParams) => void;
    signTermsSheet: (params: SignTermsSheetParams) => void;
    setIsPanModalOpen: (value: boolean) => void;
    reset: () => void;
    setIsKycVerified: (value: boolean) => void;
}
