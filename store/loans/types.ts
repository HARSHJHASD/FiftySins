/* eslint-disable no-unused-vars */
export interface LoanState {
    loans: [] | any;
    initiateLoanData: any;
    createLoanData: any;
    existingLoanData: any;
    postLoanSigningData: any;
    error: any;
    isLoading: boolean;
    isCreateLoanSuccess: boolean;
    isLoanInitiationSuccess: boolean;
    isFetchExistingLoanSuccess: boolean;
    pushToEAgreement: boolean;
    pushToEMandate: boolean;
    isPostLoanSuccess: boolean;
    postLoanSigning: any;
    extraDetails: any;
    fetchExistingApiCallInterval: any;
}

interface FetchLoansParams {
    userId: string;
}

interface CreateLoansParams {
    userId: string;
    loanId: string;
}

interface InitiateLoansParams {
    userId: string;
    loanTerm: string;
    pledgeId: { [key: number]: number }[];
}
interface fetchExistingLoanParams {
    userId: string;
    loanId: string;
}

export interface LoanAction {
    fetchLoans: (userId: string) => void;
    createLoan: (params: CreateLoansParams) => void;
    initiateLoan: (params: InitiateLoansParams) => void;
    fetchLoanPortfolio: (userId: string) => void;
    fetchExistingLoan: (params: fetchExistingLoanParams) => void;
    setExtraDetails: (params) => void;
    reset: () => void;
}
