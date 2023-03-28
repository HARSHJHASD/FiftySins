import loanAxiosClient from '../loan-service';
import { TokenGenerationCommand, BajajTokenResponse } from './types';

export default async (
    command: TokenGenerationCommand
): Promise<BajajTokenResponse> => {
    try {
        const response = await loanAxiosClient.post(
            '/api/v1/get_token/',
            command
        );
        return response.data;
    } catch (error) {
        return error;
    }
};
