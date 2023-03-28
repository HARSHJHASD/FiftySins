import portfolioAxiosClient from './index';
import { FetchPortfolioCommand, PortfolioResponse } from './types';

export default async (
    command: FetchPortfolioCommand
): Promise<PortfolioResponse> => {
    try {
        const response = await portfolioAxiosClient.post(
            '/api/v1/fetch_portfolio/',
            command
        );
        return response.data;
    } catch (error) {
        return error;
    }
};
