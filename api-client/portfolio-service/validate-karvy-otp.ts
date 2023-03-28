import portfolioAxiosClient from './index';
import { ValidateKarvyOTPCommand } from './types';

export default async (command: ValidateKarvyOTPCommand): Promise<any> => {
    try {
        const response = await portfolioAxiosClient.post(
            '/api/v1/validate_karvy_otp/',
            command
        );
        return response.data;
    } catch (error) {
        return error;
    }
};
