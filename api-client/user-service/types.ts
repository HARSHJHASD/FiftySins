/* eslint-disable camelcase */
import { CommonResponse } from '../types';
// #region [ FiftyFinUser Data Types ]

export interface FiftyFinUser {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    phone_number: string;
    date_of_birth: string; // YYYY-MM-DD
    firebase_id?: string;
    is_verified?: boolean;
    id?: number;
    user_name?: string;
    country_code?: string;
    uid?: string;
}
// #endregion [ FiftyFinUser Data Types ]

// #region [ FiftyFinUser Commands ]

// #region [ Create FiftyFinUser ]
export interface CreateUserCommand extends FiftyFinUser {}
export interface CreateUserResponse {
    data: FiftyFinUser;
}
export interface CreateUserError extends CommonResponse {
    data?: FiftyFinUser;
}
// #endregion [ Create FiftyFinUser ]

// #region [ Delete FiftyFinUser ]
export interface DeleteUserCommand {
    email: string;
}
export interface DeleteUserResponse {}
export interface DeleteUserError extends CommonResponse {}
// #endregion [ Delete FiftyFinUser ]

// #region [ Get FiftyFinUser ]
export interface GetUserCommand {
    id_type: string;
    id: string;
}
export interface GetUserResponse {}
export interface GetUserError extends CommonResponse {}
// #endregion [ Get FiftyFinUser ]

// #endregion [ FiftyFinUser Commands ]

export interface UpdateUserCommand {
    user_id: string;
    field_type: string;
    field: string;
}
export interface UpdateUserError {}
export interface UpdateUserResponse {}
