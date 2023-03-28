import digioAxiosClient from '.';
import { CheckCkycVerificationCommand } from './types';

export default async (command: CheckCkycVerificationCommand): Promise<any> => {
    try {
        const response = await digioAxiosClient.post(
            '/api/v1/check_ckyc/',
            command
        );
        return response.data;
    } catch (error) {
        return error;
    }
};
