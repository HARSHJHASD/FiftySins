import authAxiosClient from '../auth-service';
import { DeleteUserCommand } from './types';

export default async (command: DeleteUserCommand): Promise<any> => {
    try {
        const response = await authAxiosClient.post(
            '/api/v1/delete_account/',
            command
        );
        return response.data;
    } catch (error) {
        return error;
    }
};
