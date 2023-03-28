import digioAxiosClient from '.';
import { DoKycVerificationCommand } from './types';

export default async (command: DoKycVerificationCommand): Promise<any> => {
    try {
        const response = await digioAxiosClient.post(
            '/api/v1/kyc_verification/',
            command
        );
        return response.data;
    } catch (error) {
        return error;
    }
};
