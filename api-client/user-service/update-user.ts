import authAxiosClient from '../auth-service';
import { UpdateUserCommand } from './types';

export default async (command: UpdateUserCommand): Promise<any> => {
    try {
        const response = await authAxiosClient.post(
            '/api/v1/update_user/',
            command
        );
        return response.data;
    } catch (error) {
        return error;
    }
};
