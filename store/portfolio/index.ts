/* eslint-disable no-lonely-if */
/* eslint-disable no-unused-vars */
import { create } from 'zustand';
import Router from 'next/router';
import { PortfolioState, PortfolioAction } from './types';

import messages from '../../components/messages';

import GetMutualFundPortfolioData from '../../api-client/portfolio-service/fetch-mutual-fund-portfolio';
import ConnectPortfolio from '../../api-client/portfolio-service/connect-portfolio';
import GetScripsData from '../../api-client/portfolio-service/get-scrips';
import UnlinkPortfolio from '../../api-client/portfolio-service/unlink-portfolio';
import CreateKarvyLien from '../../api-client/portfolio-service/create-karvy-lien';
import ConfirmKarvyLien from '../../api-client/portfolio-service/confirm-karvy-lien';
import GenerateKarvyOtp from '../../api-client/portfolio-service/generate-karvy-otp';
import ValidateKarvyOtp from '../../api-client/portfolio-service/validate-karvy-otp';
import CheckKycVerification from '../../api-client/digio-service/check-kyc-verification';

import useDigioStore from '../digio';
import useBankStore from '../bank';

const portfolioInitialState: PortfolioState = {
    portfolio: null,
    karvyOtp: [],
    otpGenerationResponse: null,
    otpValidationResponse: null,
    karvyLienCreationData: null,
    karvyLienConfirmationData: null,
    error: null,
    scrips: [],
    isLoading: false,
    isPortfolioConnected: false,
    isKarvyPortfolioFetched: false,
    isKarvyPortfolioLinked: false,
    isCamsPortfolioFetched: false,
    isPortfolioUnlinkedSuccess: false,
    isKarvyLienCreated: false,
    isKarvyLienConfirmed: false,
    isKarvyOtpGenerated: false,
    isKarvyOtpValidated: false,
    isKarvyOTPModalOpen: false,
    isKarvyLienOTPModalOpen: false,
    karvyLienOtp: [],
    pledgeFolioItems: null
};

const usePortfolioStore = create<PortfolioState & PortfolioAction>(
    (set, get) => ({
        ...portfolioInitialState,
        setPledgeFolioItems: (params) => set({ pledgeFolioItems: [...params] }),
        setIsKarvyOTPModalOpen: (isOpen) =>
            set({ isKarvyOTPModalOpen: isOpen }),
        setIsKarvyLienOTPModalOpen: (isOpen) =>
            set({ isKarvyLienOTPModalOpen: isOpen }),
        setKarvyOtp: (otp) => set({ karvyOtp: [...otp] }),
        setKarvyLienOtp: (otp) => set({ karvyLienOtp: [...otp] }),
        fetchMutualFundPortfolio: async (params) => {
            const { userId } = params;
            set({ isLoading: true });
            const response = await GetMutualFundPortfolioData({
                user_id: userId
            });
            if (response) {
                if (response?.response?.status > 200 || response?.code > 200) {
                    const errorMessage =
                        response?.response?.data?.detail || response?.detail;
                    messages('error', errorMessage);

                    set({ error: response });
                } else {
                    set({ isKarvyPortfolioFetched: true });
                    if (!response?.data?.Karvy) {
                        set({ isKarvyPortfolioLinked: false });
                    } else {
                        set({ isKarvyPortfolioLinked: true });
                    }
                    const successMessage = response?.detail;
                    messages('success', successMessage);

                    set({ portfolio: response?.data });
                }
            }
            set({ isLoading: false });
        },
        connectPortfolio: async (params) => {
            const {
                userId,
                portfolioCompany,
                portfolioAccountId,
                portfolioAccessToken,
                portfolioRefreshToken
            } = params;

            set({ isLoading: true });

            const response = await ConnectPortfolio({
                user_id: userId,
                portfolio_company: portfolioCompany,
                portfolio_account_id: portfolioAccountId,
                portfolio_access_token: portfolioAccessToken,
                portfolio_refresh_token: portfolioRefreshToken
            });

            if (response) {
                if (response?.response?.status > 200 || response?.code > 200) {
                    const errorMessage =
                        response?.response?.data?.detail || response?.detail;
                    messages('error', errorMessage);

                    set({ error: response });
                } else {
                    const successMessage = response?.detail;
                    messages('success', successMessage);

                    set({ isPortfolioConnected: true });
                }
            }

            set({ isLoading: false });
        },
        getScrips: async (params) => {
            const { scripType, scripSubType } = params;

            set({ isLoading: true });

            const response = await GetScripsData({
                scrip_type: scripType,
                scrip_sub_type: scripSubType
            });

            if (response) {
                if (response?.response?.status > 200 || response?.code > 200) {
                    const errorMessage =
                        response?.response?.data?.detail || response?.detail;
                    messages('error', errorMessage);

                    set({ error: response });
                } else {
                    const successMessage = response?.detail;
                    messages('success', successMessage);

                    set({ scrips: response?.data });
                }
            }

            set({ isLoading: false });
        },
        unlinkPortfolio: async (params) => {
            const { userId, portfolioCompany, portfolioAccountId } = params;

            set({ isLoading: true });

            const response = await UnlinkPortfolio({
                user_id: userId,
                portfolio_company: portfolioCompany,
                portfolio_account_id: portfolioAccountId
            });

            if (response) {
                if (response?.response?.status > 200 || response?.code > 200) {
                    const errorMessage =
                        response?.response?.data?.detail || response?.detail;
                    messages('error', errorMessage);

                    set({ error: response });
                } else {
                    const successMessage = response?.detail;
                    messages('success', successMessage);

                    set({ isPortfolioUnlinkedSuccess: true });
                }
            }

            set({ isLoading: false });
        },
        createKarvyLien: async (params) => {
            const { userId, karvyRequestId, scripIds } = params;

            set({ isLoading: true });

            const response = await CreateKarvyLien({
                user_id: userId,
                karvy_request_id: karvyRequestId,
                scrip_ids: scripIds
            });

            if (response) {
                if (response?.response?.status > 200 || response?.code > 200) {
                    const errorMessage =
                        response?.response?.data?.detail || response?.detail;
                    messages('error', errorMessage);

                    set({ error: response });
                } else {
                    const successMessage = response?.detail;
                    messages('success', successMessage);

                    set({ isKarvyLienCreated: true });
                    set({ karvyLienCreationData: response?.data });
                }
            }

            set({ isLoading: false });
        },
        confirmKarvyLien: async (params) => {
            const { userId, karvyRequestId, karvyRefNo, karvyOtp } = params;
            set({ isLoading: true });

            const response = await ConfirmKarvyLien({
                user_id: userId,
                karvy_request_id: karvyRequestId,
                karvy_ref_no: karvyRefNo,
                karvy_otp: karvyOtp
            });

            if (response) {
                if (response?.response?.status > 200 || response?.code > 200) {
                    const errorMessage =
                        response?.response?.data?.detail || response?.detail;
                    messages('error', errorMessage);

                    set({ error: response });
                } else {
                    const successMessage = response?.detail;
                    messages('success', successMessage);

                    set({ karvyLienConfirmationData: response?.data });
                    set({ isKarvyLienConfirmed: true });
                    get().setIsKarvyLienOTPModalOpen(false);
                    Router.push('/enter-additional-details');
                }
            }

            set({ isLoading: false });
        },
        generateKarvyOtp: async (params) => {
            const { userId } = params;

            const checkKycVerificationResponse = await CheckKycVerification({
                user_id: userId,
                id_type: 'PAN'
            });

            const BankVerificationCondition =
                useBankStore?.getState()?.banks?.length === 0 &&
                (!useBankStore?.getState()?.isBankAccountFetchSuccess ||
                    !useBankStore?.getState()?.isBankAccountLinkSuccess);

            if (checkKycVerificationResponse) {
                const PanModalOpenCondition =
                    checkKycVerificationResponse?.response?.status > 200 ||
                    checkKycVerificationResponse?.code > 200;
                if (PanModalOpenCondition) {
                    const errorMessage =
                        checkKycVerificationResponse?.response?.data?.detail ||
                        checkKycVerificationResponse?.detail;

                    messages('error', errorMessage);
                    useDigioStore?.getState()?.setIsPanModalOpen(true);
                } else {
                    useDigioStore?.getState()?.setIsKycVerified(true);
                    if (BankVerificationCondition) {
                        useBankStore?.getState()?.fetchBankAccounts({
                            userId: parseInt(userId),
                            isAfterKycVerification: true
                        });
                    }
                }
            }

            const generateKarvyOtpCondition =
                (useDigioStore.getState().isKycVerified ||
                    useDigioStore.getState().isKycVerificationProcessSuccess) &&
                (useBankStore.getState().isBankAccountFetchSuccess ||
                    useBankStore.getState().isBankAccountLinkSuccess);

            if (generateKarvyOtpCondition) {
                useBankStore.getState().setIsBankModalOpen(false);
                set({ isLoading: true });

                const response = await GenerateKarvyOtp({
                    user_id: userId
                });

                if (response) {
                    if (
                        response?.response?.status > 200 ||
                        response?.code > 200
                    ) {
                        const errorMessage =
                            response?.response?.data?.detail ||
                            response?.detail;
                        messages('error', errorMessage);

                        set({ error: response });
                    } else {
                        get().setIsKarvyOTPModalOpen(true);
                        const successMessage = response?.detail;
                        messages('success', successMessage);

                        set({ otpGenerationResponse: response?.data });
                        set({ isKarvyOtpGenerated: true });
                    }
                }

                set({ isLoading: false });
            }
        },
        validateKarvyOtp: async (params) => {
            const { userId, karvyOtp } = params;

            set({ isLoading: true });

            const response = await ValidateKarvyOtp({
                user_id: userId,
                karvy_request_id: get().otpGenerationResponse?.karvy_request_id,
                karvy_otp: karvyOtp
            });

            if (response) {
                if (response?.response?.status > 200 || response?.code > 200) {
                    const errorMessage =
                        response?.response?.data?.detail || response?.detail;
                    messages('error', errorMessage);

                    set({ error: response });
                } else {
                    const successMessage = response?.detail;
                    messages('success', successMessage);

                    set({ otpValidationResponse: response?.data });
                    set({ isKarvyOtpValidated: true });
                    get().fetchMutualFundPortfolio({ userId });
                }
            }

            set({ isLoading: false });
        },
        reset: () => {
            set(portfolioInitialState);
        }
    })
);

export default usePortfolioStore;
