import loanAxiosClient from '../loan-service';
import { TokenVerificationCommand, BajajTokenResponse } from './types';

export default async (
    command: TokenVerificationCommand
): Promise<BajajTokenResponse> => {
    try {
        const response = await loanAxiosClient.post(
            '/api/v1/verify_token/',
            command
        );
        return response.data;
    } catch (error) {
        return error;
    }
};
