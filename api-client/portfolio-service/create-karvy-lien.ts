import portfolioAxiosClient from './index';
import { LienCreationKarvyCommand } from './types';

export default async (command: LienCreationKarvyCommand): Promise<any> => {
    try {
        const response = await portfolioAxiosClient.post(
            '/api/v1/lien_creation_karvy/',
            command
        );
        return response.data;
    } catch (error) {
        return error;
    }
};
