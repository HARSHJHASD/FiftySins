import loanAxiosClient from '.';
import { BankAccountLinkCommand, LoanResponse } from './types';

export default async (
    command: BankAccountLinkCommand
): Promise<LoanResponse> => {
    try {
        const response = await loanAxiosClient.post(
            '/api/v1/link_bank_account/',
            command
        );
        return response.data;
    } catch (error) {
        return error;
    }
};
