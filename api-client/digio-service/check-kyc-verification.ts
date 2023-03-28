/* eslint-disable camelcase */
import digioAxiosClient from '.';
import { CheckKycVerificationCommand } from './types';

export default async (command: CheckKycVerificationCommand): Promise<any> => {
    const { user_id, id_type } = command;
    try {
        const response = await digioAxiosClient.get(
            `/api/v1/check_kyc_verification/${user_id}/${id_type}`
        );
        return response.data;
    } catch (error) {
        return error;
    }
};
