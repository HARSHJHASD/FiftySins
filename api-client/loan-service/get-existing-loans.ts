/* eslint-disable camelcase */
import loanAxiosClient from '.';
import { GetExistingLoanCommand, LoanResponse } from './types';

export default async (
    command: GetExistingLoanCommand
): Promise<LoanResponse> => {
    const { user_id, loan_id } = command;

    try {
        const response = await loanAxiosClient.get(
            `/api/v1/fetch_existing_loan/${user_id}/${loan_id}`
        );
        return response.data;
    } catch (error) {
        return error;
    }
};
