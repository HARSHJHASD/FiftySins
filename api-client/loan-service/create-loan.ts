import loanAxiosClient from '.';
import { CreateLoanCommand, LoanResponse } from './types';

export default async (command: CreateLoanCommand): Promise<LoanResponse> => {
    try {
        const response = await loanAxiosClient.post(
            '/api/v1/create_loan/',
            command
        );
        return response.data;
    } catch (error) {
        return error;
    }
};
