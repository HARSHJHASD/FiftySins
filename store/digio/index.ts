/* eslint-disable no-unused-vars */
import { create } from 'zustand';
import { DigioState, DigioAction } from './types';

import messages from '../../components/messages';

import CheckKycVerification from '../../api-client/digio-service/check-kyc-verification';
import CheckCKyc from '../../api-client/digio-service/check-ckyc';
import KycVerification from '../../api-client/digio-service/do-kyc-verification';
import GetKycStatus from '../../api-client/digio-service/get-kyc-status';
import SignTermsSheets from '../../api-client/digio-service/sign-term-sheet';
import useProfileStore from '../profile';
import usePortfolioStore from '../portfolio';
import useLoanStore from '../loans';

const digioInitialState: DigioState = {
    kycStatus: null,
    panInfo: null,
    ckycSuccessData: null,
    termSheet: null,
    error: null,
    isLoading: false,
    isPanModalOpen: false,
    isKycVerified: false,
    isKycStatusApproved: false,
    isCKycVerified: false,
    isKycVerificationProcessSuccess: false,
    isSignTermSheetSuccess: false
};

const useDigioStore = create<DigioState & DigioAction>((set, get) => ({
    ...digioInitialState,
    setIsKycVerified: (value) => set({ isKycVerified: value }),
    setIsPanModalOpen: (value) => set({ isPanModalOpen: value }),
    checkKycVerification: async (params) => {
        const { userId } = params;

        set({ isLoading: true });

        const response = await CheckKycVerification({
            user_id: userId,
            id_type: 'PAN'
        });

        if (response) {
            if (response?.response?.status > 200 || response?.code > 200) {
                const errorMessage =
                    response?.response?.data?.detail || response?.detail;
                messages('error', errorMessage);

                set({ error: response });

                set({ isKycVerified: false });
            } else {
                const successMessage = response?.detail;
                messages('success', successMessage);

                set({ isKycVerified: true });
                set({ panInfo: response?.data });
            }
        }

        set({ isLoading: false });
    },
    checkCKyc: async (params) => {
        const { userId, customerIdentifierType } = params;

        set({ isLoading: true });

        const response = await CheckCKyc({
            user_id: userId,
            customer_identifier_type: customerIdentifierType
        });

        if (response) {
            if (response?.response?.status > 200 || response?.code > 200) {
                const errorMessage =
                    response?.response?.data?.detail || response?.detail;
                messages('error', errorMessage);

                set({ error: response });
                set({ isCKycVerified: false });
            } else {
                const successMessage = response?.detail;
                messages('success', successMessage);
                set({ isCKycVerified: true });
            }
            set({ ckycSuccessData: response?.data });
            useLoanStore.getState().fetchLoans(userId);
        }

        set({ isLoading: false });
    },
    kycVerification: async (params) => {
        const { userId, idNumber } = params;

        set({ isLoading: true });

        const response = await KycVerification({
            user_id: userId,
            id_type: 'PAN',
            id_number: idNumber
        });

        if (response) {
            if (response?.response?.status > 200 || response?.code > 200) {
                const errorMessage =
                    response?.response?.data?.detail || response?.detail;
                messages('error', errorMessage);

                set({ error: response });
                set({ isKycVerificationProcessSuccess: false });
            } else {
                const successMessage = response?.detail;
                messages('success', successMessage);

                set({ isKycVerificationProcessSuccess: true });
                set({ panInfo: response?.data });
            }
        }

        set({ isLoading: false });
    },
    getKycStatus: async (params) => {
        const { userId, requestId } = params;

        set({ isLoading: true });

        const response = await GetKycStatus({
            user_id: userId,
            request_id: requestId
        });

        if (response) {
            if (response?.response?.status > 200 || response?.code > 200) {
                set({ isKycStatusApproved: false });
                setTimeout(() => {
                    get().getKycStatus({
                        userId: useProfileStore
                            ?.getState()
                            ?.fiftyFinUser?.id?.toString(),
                        requestId:
                            usePortfolioStore?.getState()?.otpValidationResponse
                                ?.karvy_request_id
                    });
                }, 3000);
            } else {
                const successMessage = response.detail;
                messages('success', successMessage);

                set({ isKycStatusApproved: true });
                set({ kycStatus: response?.data });
            }
        }

        set({ isLoading: false });
    },
    signTermsSheet: async (params) => {
        const { userId } = params;

        set({ isLoading: true });

        const response = await SignTermsSheets({ user_id: userId });
        if (response) {
            if (response?.response?.status > 200 || response?.code > 200) {
                const errorMessage =
                    response?.response?.data?.detail || response?.detail;
                messages('error', errorMessage);

                set({ error: response });
            } else {
                const successMessage = response?.detail;
                messages('success', successMessage);

                set({ isSignTermSheetSuccess: true });
                set({ termSheet: response?.data });
            }
        }

        set({ isLoading: false });
    },
    reset: () => {
        set(digioInitialState);
    }
}));

export default useDigioStore;
