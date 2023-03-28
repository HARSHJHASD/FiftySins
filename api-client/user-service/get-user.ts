/* eslint-disable camelcase */
import authAxiosClient from '../auth-service';
import { GetUserCommand } from './types';

export default async (command: GetUserCommand): Promise<any> => {
    const { id_type, id } = command;
    try {
        const response = await authAxiosClient.get(
            `/api/v1/user/${id_type}/${id}`
        );
        return response.data;
    } catch (error) {
        return error;
    }
};
