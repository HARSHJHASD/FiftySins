/* eslint-disable camelcase */
import portfolioAxiosClient from './index';
import { FetchMutualFundsPortfolioCommand } from './types';

export default async (
    command: FetchMutualFundsPortfolioCommand
): Promise<any> => {
    const { user_id } = command;
    try {
        const response = await portfolioAxiosClient.get(
            `/api/v1/fetch_mutual_fund_portfolio/${user_id}`
        );
        return response.data;
    } catch (error) {
        return error;
    }
};
