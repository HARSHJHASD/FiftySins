import { FiftyFinUser } from '../../api-client/user-service/types';

/* eslint-disable no-unused-vars */
export interface ProfileState {
    fiftyFinUser: FiftyFinUser;
    isLoading: boolean;
    isUserUpdateSuccess: boolean;
    isDeleteUserSuccess: boolean;
    error?: any;
    isUserCreated: boolean;
}

interface FetchUserParams {
    idType: string;
    id: string;
}

interface DeleteUserParams {
    email: string;
}
interface UserUpdateParams {
    userId: string;
    fieldType: string;
    field: string;
}

export interface ProfileAction {
    fetchUser: (params: FetchUserParams) => void;
    updateUser: (params: UserUpdateParams) => void;
    deleteUser: (params: DeleteUserParams) => void;
    reset: () => void;
    createUser: (params: any) => void;
}
