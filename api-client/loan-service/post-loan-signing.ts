import loanAxiosClient from '.';
import { PostLoanSigningCommand, LoanResponse } from './types';

export default async (
    command: PostLoanSigningCommand
): Promise<LoanResponse> => {
    try {
        const response = await loanAxiosClient.post(
            '/api/v1/post_loan_signing/',
            command
        );
        return response.data;
    } catch (error) {
        return error;
    }
};
