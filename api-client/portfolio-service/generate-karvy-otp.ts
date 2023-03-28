import portfolioAxiosClient from './index';
import { GenerateKarvyOTPCommand } from './types';

export default async (command: GenerateKarvyOTPCommand): Promise<any> => {
    try {
        const response = await portfolioAxiosClient.post(
            '/api/v1/generate_karvy_otp/',
            command
        );
        return response.data;
    } catch (error) {
        return error;
    }
};
