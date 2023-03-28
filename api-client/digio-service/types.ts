/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import { CommonResponse } from '../types';

// #region [ KYC Verification ]

// #region [ Do KYC Verification ]
export interface DoKycVerificationCommand {
    user_id: string;
    id_type: string;
    id_number: string;
}
export type DoKycVerificationResponse = string;
export interface DoKycVerificationError extends CommonResponse {}
// #endregion [ Do KYC Verification ]

// #region [ Check KYC Verification ]
export interface CheckKycVerificationCommand {
    user_id: string;
    id_type: string;
}
export type CheckKycVerificationResponse = string;
export interface CheckKycVerificationError extends CommonResponse {}
// #endregion [ Check KYC Verification ]

// #region [ Get KYC Verification Status ]
export interface GetKycVerificationStatusCommand {
    user_id: string;
    request_id: string;
}
export type GetKycVerificationStatusResponse = any;
export interface GetKycVerificationStatusError extends CommonResponse {}
// #endregion [ Get KYC Verification Status ]

// #endregion [ KYC Verification ]

// #region [CKYC]
// export enum CustomerIdentifierType {
//     EMAIL = 'email',
//     PHONE_NUMBER = 'phone_number'
// }
export interface CheckCkycVerificationCommand {
    user_id: string;
    customer_identifier_type: string;
}

export type CheckCkycVerificationResponse = string;
export interface CheckCkycVerificationError extends CommonResponse {}
// #endregion [CKYC]

// #region [Term sheet]
export interface SignTermSheetCommand {
    user_id: string;
}
export interface SignTermSheetResponse extends CommonResponse {}
export interface SignTermSheetError extends CommonResponse {}
// #endregion [Term sheet]
