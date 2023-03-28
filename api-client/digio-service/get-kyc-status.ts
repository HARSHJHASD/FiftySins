import digioAxiosClient from '.';
import {
    GetKycVerificationStatusCommand,
    GetKycVerificationStatusError,
    GetKycVerificationStatusResponse
} from './types';

export default async (
    command: GetKycVerificationStatusCommand
): Promise<
    GetKycVerificationStatusResponse | GetKycVerificationStatusError
> => {
    try {
        const response = await digioAxiosClient.post(
            `/api/v1/kyc_status/`,
            command
        );
        return response.data;
    } catch (error) {
        return error;
    }
};
