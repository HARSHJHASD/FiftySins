/* eslint-disable camelcase */
import loanAxiosClient from '.';
import { GetBankAccountCommand, LoanResponse } from './types';

export default async (
    command: GetBankAccountCommand
): Promise<LoanResponse> => {
    const { user_id } = command;
    try {
        const response = await loanAxiosClient.get(
            `/api/v1/fetch_bank_account/${user_id}`
        );
        return response.data;
    } catch (error) {
        return error;
    }
};
