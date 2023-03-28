/* eslint-disable camelcase */
import { HttpStatusCode } from 'axios';

export interface LoanResponse {
    response: any;
    code: HttpStatusCode;
    detail: string;
    data: any;
}

export interface InitiateLoanCommand {
    user_id: string;
    pledge_id: { [key: number]: number }[];
    loan_term: string;
    extra_details: [
        {
            occupation: string;
        },
        {
            marital_status: string;
        },
        {
            father_or_spouse: string;
        },
        {
            father_spouse_first_name: string;
        },
        {
            father_spouse_last_name: string;
        },
        {
            mother_first_name: string;
        },
        {
            mother_last_name: string;
        },
        {
            residence_type: string;
        }
    ];
}

export interface CreateLoanCommand {
    user_id: string;
    loan_id: string;
}

export interface BankAccountLinkCommand {
    user_id: string;
    account_type: string;
    bank_name: string;
    account_number: string;
    account_name: string;
    ifsc_code: string;
}

export interface BankAccountUnlinkCommand {
    user_id: string;
    bank_account_id: string;
}

export interface UnlinkPortfolioCommand {
    user_id: string;
    portfolio_company: string;
    portfolio_account_id: string;
}

export interface GetBankAccountCommand {
    user_id: string;
}

export interface GetLoanCommand {
    user_id: string;
}
export interface GetExistingLoanCommand {
    user_id: string;
    loan_id: string;
}
export interface PostLoanSigningCommand {
    user_id: string;
    loan_id: string;
}
