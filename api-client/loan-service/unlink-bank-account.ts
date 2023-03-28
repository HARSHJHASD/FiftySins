import loanAxiosClient from '.';
import { BankAccountUnlinkCommand, LoanResponse } from './types';

export default async (
    command: BankAccountUnlinkCommand
): Promise<LoanResponse> => {
    try {
        const response = await loanAxiosClient.post(
            '/api/v1/unlink_bank_account/',
            command
        );
        return response.data;
    } catch (error) {
        return error;
    }
};
