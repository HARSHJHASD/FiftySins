/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-shadow
export enum Platform {
    Karvy = 'Karvy'
}
// eslint-disable-next-line no-shadow
export enum ScripType {
    MutualFund = 'mutual_fund'
}
export interface PortfolioState {
    portfolio?: Portfolio;
    scrips: [] | any;
    otpGenerationResponse: {} | any;
    otpValidationResponse: {} | any;
    isLoading: boolean;
    isKarvyPortfolioFetched: boolean;
    isCamsPortfolioFetched: boolean;
    isPortfolioConnected: boolean;
    isPortfolioUnlinkedSuccess: boolean;
    isKarvyLienCreated: boolean;
    isKarvyLienConfirmed: boolean;
    isKarvyOtpGenerated: boolean;
    isKarvyOtpValidated: boolean;
    isKarvyOTPModalOpen: boolean;
    isKarvyLienOTPModalOpen: boolean;
    isKarvyPortfolioLinked: boolean;
    karvyLienCreationData: KarvyLienCreationData;
    karvyLienConfirmationData: any;
    karvyOtp: string[];
    karvyLienOtp: string[];
    error: null | any;
    pledgeFolioItems: any;
}
export interface Portfolio {
    Cams?: boolean;
    Karvy?: boolean;
    Karvy_APPROVED?: KarvyApproved[];
    Karvy_UNAPPROVED?: KarvyUnapproved[];
    TOTAL_AMOUNTS: TotalAmounts;
}
export interface KarvyLienCreationData {
    request_id: string;
    kfin_ref_no: string;
    lien_marked_portfolio: LienMarkedPortfolio[];
}

export interface LienMarkedPortfolio {
    InvPan: string;
    InvName: string;
    AmcCode: string;
    FolioNo: string;
    SchemeCode: string;
    SchemeName: string;
    AssetClass: string;
    LienAmount: string;
    LienUnits: string;
    LienLogReference: string;
    RequestID: string;
    Return_Msg: string;
    Agentcode: string;
    ihno: number;
    KfinRefNo: string;
    Lenderid: string;
    Providerid: string;
    usertype: string;
    ISIN: string;
}

export interface KarvyApproved {
    id: number;
    user_id: number;
    scrip_id: number;
    scrip_name: string;
    scrip_ticker: string;
    scrip_type: ScripType;
    scrip_sub_type: string;
    isin: string;
    quantity: number;
    price: number;
    total_amount: number;
    max_loan_amount: number;
    loan_to_value_ratio: number;
    platform: Platform;
    folio_number: string;
    amc_code: string;
    scheme_code: string;
    logo: string;
    is_approved: boolean;
}

export interface KarvyUnapproved {
    id: number;
    user_id: number;
    scrip_id: string;
    scrip_name: string;
    scrip_ticker: string;
    scrip_type: ScripType;
    scrip_sub_type: string;
    isin: string;
    quantity: number;
    price: number;
    total_amount: number;
    max_loan_amount: string;
    loan_to_value_ratio: string;
    platform: Platform;
    folio_number: string;
    amc_code: string;
    scheme_code: string;
    is_approved: boolean;
}

export interface TotalAmounts {
    total_portfolio_value: number;
    total_approved_value: number;
    max_loan_amount: number;
}
interface FetchPortfolioParams {
    userId: string;
}

interface ConnectPortfolioParams {
    userId: string;
    portfolioCompany: string;
    portfolioAccountId: string;
    portfolioAccessToken: string;
    portfolioRefreshToken: string;
}

interface UnlinkPortfolioParams {
    userId: string;
    portfolioCompany: string;
    portfolioAccountId: string;
}

interface GetScripsParams {
    scripType: string;
    scripSubType: string;
}

interface ScripId {
    [key: string]: string;
}
interface CreateKarvyLienParams {
    userId: string;
    karvyRequestId: string;
    scripIds: ScripId[];
}

interface ConfirmKarvyLienParams {
    userId: string;
    karvyRequestId: string;
    karvyRefNo: string;
    karvyOtp: string;
}
interface GenerateKarvyOtpParams {
    userId: string;
}
interface ValidateKarvyOtpParams {
    userId: string;
    karvyOtp: string;
}

export interface PortfolioAction {
    fetchMutualFundPortfolio: (params: FetchPortfolioParams) => void;
    connectPortfolio: (params: ConnectPortfolioParams) => void;
    unlinkPortfolio: (params: UnlinkPortfolioParams) => void;
    getScrips: (params: GetScripsParams) => void;
    createKarvyLien: (params: CreateKarvyLienParams) => void;
    confirmKarvyLien: (params: ConfirmKarvyLienParams) => void;
    generateKarvyOtp: (params: GenerateKarvyOtpParams) => void;
    validateKarvyOtp: (params: ValidateKarvyOtpParams) => void;
    setIsKarvyOTPModalOpen: (isOpen: boolean) => void;
    setIsKarvyLienOTPModalOpen: (isOpen: boolean) => void;
    setKarvyOtp: (otp: string[]) => void;
    setKarvyLienOtp: (otp: string[]) => void;
    setPledgeFolioItems: (params) => void;
    reset: () => void;
}
