import authAxiosClient from '../auth-service';
import { CreateUserCommand } from './types';

export default async (command: CreateUserCommand): Promise<any> => {
    try {
        const response = await authAxiosClient.post('/api/v1/signup/', command);
        return response.data;
    } catch (error) {
        return error;
    }
};
