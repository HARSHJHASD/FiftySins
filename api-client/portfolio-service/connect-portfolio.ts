import portfolioAxiosClient from './index';
import { ConnectPortfolioCommand } from './types';

export default async (command: ConnectPortfolioCommand): Promise<any> => {
    try {
        const response = await portfolioAxiosClient.post(
            '/api/v1/connect_portfolio/',
            command
        );
        return response.data;
    } catch (error) {
        return error;
    }
};
