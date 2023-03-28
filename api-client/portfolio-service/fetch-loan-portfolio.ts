/* eslint-disable camelcase */
import portfolioAxiosClient from './index';
import { FetchLoanPortfolioCommand, FetchLoanPortfolioResponse } from './types';

export default async (
    command: FetchLoanPortfolioCommand
): Promise<FetchLoanPortfolioResponse> => {
    const { user_id } = command;
    try {
        const response = await portfolioAxiosClient.get(
            `/api/v1/fetch_loan_portfolio/${user_id}`
        );
        return response.data;
    } catch (error) {
        return error;
    }
};
