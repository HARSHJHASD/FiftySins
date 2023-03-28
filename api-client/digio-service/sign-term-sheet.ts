import digioAxiosClient from '.';
import { SignTermSheetCommand } from './types';

export default async (command: SignTermSheetCommand): Promise<any> => {
    try {
        const response = await digioAxiosClient.post(
            `/api/v1/sign_term_sheet/`,
            command
        );
        return response.data;
    } catch (error) {
        return error;
    }
};
