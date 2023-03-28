import loanAxiosClient from '.';
import { InitiateLoanCommand, LoanResponse } from './types';

export default async (command: InitiateLoanCommand): Promise<LoanResponse> => {
    try {
        const response = await loanAxiosClient.post(
            '/api/v1/initiate_loan/',
            command
        );
        return response.data;
    } catch (error) {
        return error;
    }
};
