import portfolioAxiosClient from './index';
import { UnlinkPortfolioCommand } from './types';

export default async (command: UnlinkPortfolioCommand): Promise<any> => {
    try {
        const response = await portfolioAxiosClient.post(
            '/api/v1/unlink_portfolio/',
            command
        );
        return response.data;
    } catch (error) {
        return error;
    }
};
