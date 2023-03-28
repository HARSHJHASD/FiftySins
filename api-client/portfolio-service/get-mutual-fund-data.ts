/* eslint-disable camelcase */
import portfolioAxiosClient from './index';
import { PortfolioResponse } from './types';

// const ISINLIST = [
//     'INF200K01RA0',
//     'INF194K01Y29',
//     'INF760K01EL8',
//     'INF740K01OK1',
//     'INF879O01100',
//     'INF966L01986',
//     'INF03VN01621'
// ];

export default async (): Promise<PortfolioResponse> => {
    try {
        const response = await portfolioAxiosClient.get(
            `/api/v1/fetch_list_scrips/`
        );
        return response.data;
    } catch (error) {
        return error;
    }
};
