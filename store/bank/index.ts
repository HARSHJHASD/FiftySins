/* eslint-disable no-unused-vars */
import { create } from 'zustand';
import { BankState, BankAction } from './types';

import messages from '../../components/messages';

import GetBankAccountsFetcher from '../../api-client/loan-service/get-bank-account';
import LinkBankAccountFetcher from '../../api-client/loan-service/link-bank-account';
import UnlinkBankAccountFetcher from '../../api-client/loan-service/unlink-bank-account';
import usePortfolioStore from '../portfolio';
import useDigioStore from '../digio';

const bankInitialState: BankState = {
    banks: [],
    error: null,
    isLoading: false,
    isBankModalOpen: false,
    isBankAccountLinkSuccess: false,
    isBankAccountFetchSuccess: false,
    isBankAccountUnlinkSuccess: false
};

const useBankStore = create<BankState & BankAction>((set, get) => ({
    ...bankInitialState,
    setIsBankModalOpen: (value) => set({ isBankModalOpen: value }),
    fetchBankAccounts: async (params) => {
        set({ isLoading: true });
        const response = await GetBankAccountsFetcher({
            user_id: params?.userId?.toString()
        });

        if (response) {
            if (response?.response?.status > 200 || response?.code > 200) {
                const errorMessage =
                    response?.response?.data?.detail || response?.detail;
                messages('error', errorMessage);
                set({ error: response });

                if (params?.isAfterKycVerification) {
                    get().setIsBankModalOpen(true);
                }
            } else {
                const successMessage = response.detail;
                messages('success', successMessage);

                set({ isBankAccountFetchSuccess: true });
                set({ banks: response?.data });
                if (
                    params?.isAfterKycVerification &&
                    (useDigioStore.getState().isKycVerified ||
                        useDigioStore.getState()
                            .isKycVerificationProcessSuccess)
                ) {
                    usePortfolioStore.getState().generateKarvyOtp({
                        userId: params?.userId.toString()
                    });
                }
            }
        }
        set({ isLoading: false });
    },
    linkBankAccount: async (params) => {
        const {
            userId,
            accountType,
            bankName,
            accountNumber,
            accountName,
            ifscCode
        } = params;
        set({ isLoading: true });
        const response = await LinkBankAccountFetcher({
            user_id: userId,
            account_type: accountType,
            bank_name: bankName,
            account_number: accountNumber,
            account_name: accountName,
            ifsc_code: ifscCode
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

                if (params?.isAfterKycVerification)
                    usePortfolioStore.getState().generateKarvyOtp({ userId });

                set({ isBankAccountLinkSuccess: true });
            }
        }

        set({ isLoading: false });
    },
    unlinkBankAccount: async (params) => {
        const { userId, bankAccountId } = params;

        set({ isLoading: true });
        const response = await UnlinkBankAccountFetcher({
            user_id: userId,
            bank_account_id: bankAccountId
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

                set({ isBankAccountUnlinkSuccess: true });
            }
        }

        set({ isLoading: false });
    },
    reset: () => {
        set(bankInitialState);
    }
}));

export default useBankStore;
