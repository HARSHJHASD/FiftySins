/* eslint-disable camelcase */
import { HttpStatusCode } from 'axios';
import { KarvyLienCreationData, Portfolio } from '../../store/portfolio/types';

export interface PortfolioResponse {
    code: HttpStatusCode;
    detail: string;
    data: Portfolio;
}

export interface ConnectPortfolioCommand {
    user_id: string;
    portfolio_company: string;
    portfolio_account_id: string;
    portfolio_access_token: string;
    portfolio_refresh_token: string;
}

export interface FetchPortfolioCommand {
    user_id: string;
    portfolio_company: string[];
}
export interface FetchMutualFundsPortfolioCommand {
    user_id: string;
}

export interface GetScripCommand {
    scrip_type: string;
    scrip_sub_type: string;
}

export interface UnlinkPortfolioCommand {
    user_id: string;
    portfolio_company: string;
    portfolio_account_id: string;
}

// #region [ Karvy ]
export interface GenerateKarvyOTPCommand {
    user_id: string;
}

export interface GenerateKarvyOTPResponse {
    code: HttpStatusCode;
    detail: string;
    data: string;
}
export interface GenerateKarvyOTPError {
    code: HttpStatusCode;
    detail: any;
    data: string;
}
export interface VerifyKarvyOTPCommand {
    user_id: string;
    otp: string;
}

export interface ValidateKarvyOTPCommand {
    user_id: string;
    karvy_request_id: string;
    karvy_otp: string;
}

export interface ValidateKarvyOTPError {
    code: HttpStatusCode;
    detail: any;
    data: string;
}
export interface ValidateKarvyOTPResponse {
    code: HttpStatusCode;
    detail: string;
    data: string;
}

export interface LienCreationKarvyCommand {
    user_id: string;
    karvy_request_id: string;
    scrip_ids: ScripId[];
}
export interface ScripId {
    [key: string]: string;
}
export interface LienCreationKarvyResponse {
    code: HttpStatusCode;
    detail: string;
    data: KarvyLienCreationData;
}
export interface LienCreationKarvyError {
    code: HttpStatusCode;
    detail: any;
    data: string;
}
export interface LienConfirmationKarvyCommand {
    user_id: string;
    karvy_request_id: string;
    karvy_ref_no: string;
    karvy_otp: string;
}
export interface LienConfirmationKarvyResponse {
    code: HttpStatusCode;
    detail: string;
    data: string;
}
export interface LienConfirmationKarvyError {
    code: HttpStatusCode;
    detail: any;
    data: string;
}
// #endregion [ Karvy ]

export interface FetchLoanPortfolioCommand {
    user_id: string;
}

export interface FetchLoanPortfolioResponse {
    response: any;
    code: HttpStatusCode;
    detail: string;
    data: LoanPortfolio;
}
export interface LienApproved {
    id: number;
    user_id: number;
    scrip_id: number;
    scrip_name: string;
    scrip_ticker: string;
    scrip_type: string;
    scrip_sub_type: string;
    isin: string;
    quantity: number;
    price: number;
    total_amount: number;
    loan_amount: number;
    loan_to_value_ratio: number;
    platform: string;
    folio_number: string;
    amc_code: string;
    scheme_code: string;
    status: string;
}

export interface TotalAmounts {
    total_portfolio_value: number;
    total_approved_value: number;
    max_loan_amount: number;
}

export interface LoanPortfolio {
    LIEN_MARKED: any[];
    LIEN_APPROVED: LienApproved[];
    LIEN_REJECTED: any[];
    TOTAL_AMOUNTS: TotalAmounts;
}
