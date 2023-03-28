/* eslint-disable no-unused-vars */
export interface BankState {
    banks: [] | any;
    error: any;
    isLoading: boolean;
    isBankAccountLinkSuccess: boolean;
    isBankAccountUnlinkSuccess: boolean;
    isBankAccountFetchSuccess: boolean;
    isBankModalOpen: boolean;
}

interface FetchBankAccountsParams {
    userId: number;
    isAfterKycVerification?: boolean;
}
interface UnlinkBankAccountsParams {
    userId: string;
    bankAccountId: string;
}

interface LinkBankAccountParams {
    userId: string;
    accountType: string;
    bankName: string;
    accountNumber: string;
    accountName: string;
    ifscCode: string;
    isAfterKycVerification?: boolean;
}

export interface BankAction {
    fetchBankAccounts: (params: FetchBankAccountsParams) => void;
    linkBankAccount: (params: any) => void;
    unlinkBankAccount: (params: UnlinkBankAccountsParams) => void;
    setIsBankModalOpen: (value: boolean) => void;
    reset: () => void;
}
