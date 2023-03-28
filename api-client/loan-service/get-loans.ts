/* eslint-disable camelcase */
import loanAxiosClient from '.';
import { GetLoanCommand, LoanResponse } from './types';

export default async (command: GetLoanCommand): Promise<LoanResponse> => {
    const { user_id } = command;

    try {
        const response = await loanAxiosClient.get(
            `/api/v1/fetch_loans/${user_id}`
        );
        return response.data;
    } catch (error) {
        return error;
    }
};
