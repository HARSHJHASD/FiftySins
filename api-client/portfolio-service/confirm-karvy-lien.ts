import portfolioAxiosClient from './index';
import { LienConfirmationKarvyCommand } from './types';

export default async (command: LienConfirmationKarvyCommand): Promise<any> => {
    try {
        const response = await portfolioAxiosClient.post(
            '/api/v1/lien_confirmation_karvy/',
            command
        );
        return response.data;
    } catch (error) {
        return error;
    }
};
