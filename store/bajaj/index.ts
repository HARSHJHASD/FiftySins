/* eslint-disable no-unused-vars */
import { create } from 'zustand';
import { BajajTokenState, BajajTokenAction } from './types';
import messages from '../../components/messages';
import GetBajajToken from '../../api-client/bajaj-token-service/get-token';
import VerifyBajajToken from '../../api-client/bajaj-token-service/verify-token';

const bajajInitialState: BajajTokenState = {
    token: null,
    error: null,
    isLoading: false,
    isBajajTokenVerified: false
};

const useBajajStore = create<BajajTokenState & BajajTokenAction>(
    (set, get) => ({
        ...bajajInitialState,
        getToken: async (params) => {
            const { appKey, appSecret } = params;
            set({ isLoading: true });
            const response = await GetBajajToken({
                app_key: appKey,
                app_secret: appSecret
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

                    set({ token: response?.data });
                }
            }

            set({ isLoading: false });
        },
        verifyToken: async (params) => {
            const { accessToken } = params;
            set({ isLoading: true });
            const response = await VerifyBajajToken({
                access_token: accessToken
            });

            if (response) {
                if (response?.response?.status > 200 || response?.code > 200) {
                    const errorMessage =
                        response?.response?.data?.detail || response.detail;
                    messages('error', errorMessage);

                    set({ error: response });
                } else {
                    const successMessage = response?.detail;
                    messages('success', successMessage);

                    set({ isBajajTokenVerified: true });
                }
            }

            set({ isLoading: false });
        },
        reset: () => {
            set(bajajInitialState);
        }
    })
);

export default useBajajStore;
