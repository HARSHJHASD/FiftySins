/* eslint-disable camelcase */
import portfolioAxiosClient from './index';
import { GetScripCommand } from './types';

export default async (command: GetScripCommand): Promise<any> => {
    const { scrip_type, scrip_sub_type } = command;

    try {
        const response = await portfolioAxiosClient.get(
            `/api/v1/fetch_scrips/${scrip_type}/${scrip_sub_type}`
        );
        return response.data;
    } catch (error) {
        return error;
    }
};
