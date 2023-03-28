/* eslint-disable no-unused-vars */
import { create } from 'zustand';
import { ProfileState, ProfileAction } from './types';

import UserDataFetcher from '../../api-client/user-service/get-user';
import UpdateUserData from '../../api-client/user-service/update-user';
import DeleteUserFetcher from '../../api-client/user-service/delete-user';
import CreateUser from '../../api-client/user-service/create-user';

import emailValidator from '../../utils/form-validators/profile-details-form/emailValidator';
import passwordValidator from '../../utils/form-validators/profile-details-form/strongPasswordValidator';
import phoneNumberValidator from '../../utils/form-validators/profile-details-form/phoneNumberValidator';
import nameValidator from '../../utils/form-validators/profile-details-form/nameValidator';
import dateOfBirthValidator from '../../utils/form-validators/profile-details-form/dateOfBirthValidator';

import messages from '../../components/messages';

const profileInitialState: ProfileState = {
    fiftyFinUser: null,
    error: null,
    isLoading: false,
    isUserCreated: false,
    isUserUpdateSuccess: false,
    isDeleteUserSuccess: false
};

const useProfileStore = create<ProfileState & ProfileAction>((set, get) => ({
    ...profileInitialState,
    createUser: async (params) => {
        set({ isLoading: true });
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            phoneNumber,
            dateOfBirth
        } = params;

        const isEmailValidated = emailValidator(email);
        const isFirstNameValidated = nameValidator(firstName);
        const isLastNameValidated = nameValidator(lastName);
        const isPasswordValidated = passwordValidator(password);
        const isPhoneNumberValidated = phoneNumberValidator(phoneNumber);
        const isDOBValidated = dateOfBirthValidator(dateOfBirth);

        if (!isPasswordValidated) {
            messages('error', 'Please enter a strong password');
        }

        if (!isFirstNameValidated || !isLastNameValidated) {
            messages('error', 'Please enter a valid name');
        }

        if (!isPhoneNumberValidated) {
            messages('error', 'Please enter a valid phone number');
        }

        if (!isDOBValidated) {
            messages('error', 'Please enter a date in yyyy-mm-dd format');
        }

        if (
            password === confirmPassword &&
            isEmailValidated &&
            isFirstNameValidated &&
            isLastNameValidated &&
            isPasswordValidated &&
            isPhoneNumberValidated &&
            isDOBValidated
        ) {
            const response = await CreateUser({
                first_name: firstName,
                last_name: lastName,
                email,
                password,
                phone_number: phoneNumber,
                date_of_birth: dateOfBirth
            });

            if (response) {
                if (response?.response?.status > 200 || response?.code > 200) {
                    const errorMessage =
                        response?.response?.data?.detail || response?.detail;
                    messages('error', errorMessage);

                    set({ error: response?.response });
                } else {
                    const successMessage = response?.detail;
                    messages('success', successMessage);

                    set({ fiftyFinUser: response?.data });
                    set({ isUserCreated: true });
                }
            }

            set({ isLoading: false });
        }
    },
    fetchUser: async (params) => {
        set({ isLoading: true });

        const { idType, id } = params;

        const response = await UserDataFetcher({ id_type: idType, id });

        if (response) {
            if (
                response?.response?.status > 200 ||
                response?.code > 200 ||
                response?.code === 'ERR_NETWORK'
            ) {
                const errorMessage =
                    response?.response?.data?.detail ||
                    'Error occurred while fetching user';
                messages('error', errorMessage);
                set({ error: response });
            } else {
                const successMessage = response?.detail;
                messages('success', successMessage);

                set({ fiftyFinUser: response?.data });
            }
        }

        set({ isLoading: false });
    },
    updateUser: async (params) => {
        set({ isLoading: true });
        const { userId, fieldType, field } = params;

        const response = await UpdateUserData({
            user_id: userId,
            field_type: fieldType,
            field
        });

        if (response) {
            if (response?.response?.status > 200 || response?.code > 200) {
                const errorMessage =
                    response?.response?.data?.detail || response?.detail;
                messages('error', errorMessage);

                set({ error: response });
            } else {
                const successMessage = response?.detail;
                messages('success', successMessage);

                set({ isUserUpdateSuccess: true });
                set({ fiftyFinUser: response });
            }
        }

        set({ isLoading: false });
    },
    deleteUser: async (params) => {
        set({ isLoading: true });
        const response = await DeleteUserFetcher(params);

        if (response) {
            if (response?.response?.status > 200 || response?.code > 200) {
                const errorMessage =
                    response?.response?.data?.detail || response?.detail;
                messages('error', errorMessage);

                set({ error: response });
            } else {
                const successMessage = response?.detail;
                messages('success', successMessage);

                set({ isDeleteUserSuccess: true });
            }
        }

        set({ isLoading: false });
    },
    reset: () => {
        set(profileInitialState);
    }
}));

export default useProfileStore;
