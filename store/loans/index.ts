/* eslint-disable no-unused-vars */
import { create } from 'zustand';
import { LoanState, LoanAction } from './types';

import messages from '../../components/messages';

import CreateLoan from '../../api-client/loan-service/create-loan';
import GetLoansData from '../../api-client/loan-service/get-loans';
import GetExistingLoansData from '../../api-client/loan-service/get-existing-loans';
import InitiateLoan from '../../api-client/loan-service/initiate-loan';
import PostLoanSigning from '../../api-client/loan-service/post-loan-signing';
import getLoanPortfolio from '../../api-client/portfolio-service/fetch-loan-portfolio';
import useDigioStore from '../digio';
import openDigio from '../../lib/helper';
import useProfileStore from '../profile';

const loanInitialState: LoanState = {
    loans: [],
    initiateLoanData: null,
    createLoanData: null,
    existingLoanData: null,
    postLoanSigningData: null,
    error: null,
    isLoading: false,
    pushToEAgreement: false,
    pushToEMandate: false,
    isFetchExistingLoanSuccess: false,
    isCreateLoanSuccess: false,
    isLoanInitiationSuccess: false,
    isPostLoanSuccess: false,
    postLoanSigning: null,
    extraDetails: null,
    fetchExistingApiCallInterval: null
};

const useLoanStore = create<LoanState & LoanAction>((set, get) => ({
    ...loanInitialState,
    setExtraDetails: (params) => set({ extraDetails: { ...params } }),
    fetchLoans: async (userId) => {
        set({ isLoading: true });

        const response = await GetLoansData({ user_id: userId });

        if (response) {
            if (response?.response?.status > 200 || response?.code > 200) {
                const errorMessage =
                    response.response.data.detail || response.detail;
                messages('error', errorMessage);
                set({ error: response });
            } else {
                const successMessage = response.detail;
                messages('success', successMessage);

                set({ loans: response?.data });
            }
            const currentLoan = response?.data?.find(
                (loan) =>
                    loan.LoanProcessMetaData.process_step !==
                        'LOAN_PROCESS_COMPLETED' ||
                    loan.LoanProcessMetaData.process_step !==
                        'LOAN_DISBURSEMENT_SENT'
            );
            if (response?.data?.length > 0) {
                switch (currentLoan.LoanProcessMetaData.process_step) {
                    case 'LOAN_PROCESS_INITIATED':
                        useDigioStore.getState().checkCKyc({
                            userId,
                            customerIdentifierType: 'email'
                        });
                        break;
                    case 'CHECK_CKYC':
                        if (
                            useDigioStore.getState().ckycSuccessData?.data[0]
                                .LoanProcessMetaData.status === 'REQUESTED'
                        ) {
                            setTimeout(() => {
                                openDigio(
                                    currentLoan.LoanProcessMetaData.process_id,
                                    useProfileStore.getState().fiftyFinUser
                                        ?.email,
                                    currentLoan?.LoanProcessMetaData?.data
                                        ?.access_token?.id
                                );
                            }, 3000);
                        } else if (
                            (useDigioStore.getState().ckycSuccessData?.data[0]
                                .LoanProcessMetaData.status ??
                                currentLoan.LoanProcessMetaData?.status) ===
                            'approved'
                        ) {
                            get().createLoan({
                                userId: useProfileStore
                                    .getState()
                                    .fiftyFinUser.id.toString(),
                                loanId:
                                    get().initiateLoanData?.loan_id ??
                                    currentLoan.LoanProcessMetaData?.loan_id
                            });
                        }
                        break;
                    case 'LOAN_CREATED':
                    case 'LOAN_AGREEMENT_SENT':
                    case 'LOAN_AGREEMENT_SIGNED':
                    case 'LOAN_EMANDATE_SENT':
                        useLoanStore.getState().fetchExistingLoan({
                            userId,
                            loanId: currentLoan?.Loan?.id
                        });
                        break;
                    case 'LOAN_PROCESS_COMPLETED':
                        break;
                    case 'LOAN_DISBURSEMENT_SENT':
                        break;
                    default:
                        break;
                }
            }
        }

        set({ isLoading: false });
    },
    fetchLoanPortfolio: async (userId) => {
        set({ isLoading: true });
        const response = await getLoanPortfolio({ user_id: userId });
        if (response) {
            if (response?.response?.status > 200 || response?.code > 200) {
                const errorMessage =
                    response?.response?.data?.detail || response?.detail;
                messages('error', errorMessage);

                set({ error: response });
            } else {
                if (response.data?.LIEN_APPROVED?.length <= 0) {
                    setTimeout(() => {
                        get().fetchLoanPortfolio(userId);
                    }, 5000);
                } else {
                    const successMessage = response?.detail;
                    messages('success', successMessage);
                }
                set({ loans: response?.data });
            }
        }
        set({ isLoading: false });
    },
    fetchExistingLoan: async (params) => {
        const { userId, loanId } = params;
        set({ isLoading: true });

        const response = await GetExistingLoansData({
            user_id: userId,
            loan_id: loanId
        });

        if (response) {
            if (response?.response?.status > 200 || response?.code > 200) {
                // messages('error', errorMessage);
                set({ error: response });
            }
            if (
                response?.data?.e_agreement &&
                !response?.data?.e_agreement_signed
            ) {
                set({ pushToEAgreement: true });
            }
            if (
                response?.data?.e_mandate &&
                response?.data?.e_agreement_signed &&
                !response?.data?.e_mandate_completed
            ) {
                set({ pushToEAgreement: false });
                set({ pushToEMandate: true });
            }
            if (
                !response?.data?.process_completed &&
                !(response?.response?.status > 200 || response?.code > 200)
            ) {
                set({ pushToEAgreement: false });
                set({ pushToEMandate: false });
                if (!get().fetchExistingApiCallInterval) {
                    set({
                        fetchExistingApiCallInterval: setInterval(() => {
                            get().fetchExistingLoan({ userId, loanId });
                        }, 5000)
                    });
                }
                setTimeout(() => {
                    if (get().fetchExistingApiCallInterval) {
                        clearInterval(get().fetchExistingApiCallInterval);
                    }
                    set({
                        fetchExistingApiCallInterval: null
                    });
                }, 3 * 60 * 1000);
            }
            if (response?.data?.process_completed) {
                if (get().fetchExistingApiCallInterval) {
                    clearInterval(get().fetchExistingApiCallInterval);
                }
                set({
                    fetchExistingApiCallInterval: null
                });
            }
            // messages('success', successMessage);
            set({ isFetchExistingLoanSuccess: true });
            set({ existingLoanData: response.data });
        }

        set({ isLoading: false });
    },
    createLoan: async (params) => {
        const { userId, loanId } = params;

        set({ isLoading: true });
        const response = await CreateLoan({
            user_id: userId,
            loan_id: loanId
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

                set({ isCreateLoanSuccess: true });
                set({ createLoanData: response });
            }
            get().fetchExistingLoan({
                userId: useProfileStore.getState().fiftyFinUser?.id.toString(),
                loanId:
                    useLoanStore.getState()?.initiateLoanData?.loan_id ??
                    get().loans[0].LoanProcessMetaData?.loan_id
            });
        }

        set({ isLoading: false });
    },
    postLoanSigning: async (params) => {
        const { userId, loanId } = params;

        set({ isLoading: true });
        const response = await PostLoanSigning({
            user_id: userId,
            loan_id: loanId
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

                set({ isPostLoanSuccess: true });
                set({ postLoanSigningData: response });
            }
        }

        set({ isLoading: false });
    },
    initiateLoan: async (params) => {
        const { userId, loanTerm, pledgeId } = params;
        set({ isLoading: true });

        const response = await InitiateLoan({
            user_id: userId,
            loan_term: loanTerm,
            pledge_id: pledgeId,
            extra_details: [
                {
                    occupation: get().extraDetails?.occupation
                },
                {
                    marital_status: get().extraDetails?.maritalStatus
                },
                {
                    father_or_spouse: get().extraDetails?.fatherOrSpouse
                },
                {
                    father_spouse_first_name:
                        get().extraDetails?.fatherOrSpouseFirstName
                },
                {
                    father_spouse_last_name:
                        get().extraDetails?.fatherOrSpouseLastName
                },
                {
                    mother_first_name: get().extraDetails?.motherFirstName
                },
                {
                    mother_last_name: get().extraDetails?.motherLastName
                },
                {
                    residence_type: get().extraDetails?.residenceType
                }
            ]
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

                set({ isLoanInitiationSuccess: true });
                set({ initiateLoanData: response?.data });
            }
        }
        set({ isLoading: false });
    },
    reset: () => {
        set(loanInitialState);
    }
}));

export default useLoanStore;
