/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { create } from 'zustand';
import { signOut } from 'firebase/auth';
import { GlobalState, GlobalAction, FireBaseUser } from './types';

import SignInUser from '../../api-client/auth-service/signInUser';

import { authentication } from '../../utils/firebase';

import useBajajStore from '../bajaj';
import useBankStore from '../bank';
import useDigioStore from '../digio';
import useLoanStore from '../loans';
import usePortfolioStore from '../portfolio';
import useProfileStore from '../profile';
import axios from 'axios';
import authAxiosClient from '../../api-client/auth-service';
import digioAxiosClient from '../../api-client/digio-service';
import loanAxiosClient from '../../api-client/loan-service';

const globalInitialState: GlobalState = {
    fiftyFinUser: null,
    fireBaseUser: null,
    error: null,
    signUpParams: null,
    totalLoanAmount: 0,
    isLoading: false,
    isUserCreated: false,
    isUserSignedIn: false,
    pledgeFolioTotal: 0
};

const useGlobalStore = create<GlobalState & GlobalAction>((set, get) => ({
    ...globalInitialState,
    setFirebaseUser: (user?: FireBaseUser) => set({ fireBaseUser: user }),
    setFiftyFinUser: (fiftyFinUser: any) => set({ fiftyFinUser }),
    setPledgeFolioTotal: (total) => set({ pledgeFolioTotal: total }),
    setIsLoading: (value) => set({ isLoading: value }),
    setTotalLoanAmount: (amount: any) => {
        set({ totalLoanAmount: amount });
    },
    userSignIn: async (params) => {
        set({ isLoading: true });
        const { email, password } = params;

        const response = await SignInUser({
            email,
            password
        });

        if (response) {
            if (response?.code > 200) {
                set({ error: response });
            } else {
                set({ fireBaseUser: response?.user });
                set({ isUserSignedIn: true });
                localStorage.setItem(
                    'accessToken',
                    get().fireBaseUser?.stsTokenManager?.accessToken
                );
                authAxiosClient.defaults.headers.common['Authorization'] = `${
                    get().fireBaseUser?.stsTokenManager?.accessToken
                }`;
                digioAxiosClient.defaults.headers.common['Authorization'] = `${
                    get().fireBaseUser?.stsTokenManager?.accessToken
                }`;
                loanAxiosClient.defaults.headers.common['Authorization'] = `${
                    get().fireBaseUser?.stsTokenManager?.accessToken
                }`;
            }
        }

        set({ isLoading: false });
    },
    setSignUpParams: (params) => {
        set({ signUpParams: { ...get().signUpParams, ...params } });
    },
    reset: () => {
        set(globalInitialState);
    },
    logOut: async () => {
        get().setFirebaseUser(null);
        get().reset();
        useBajajStore.getState().reset();
        useBankStore.getState().reset();
        useDigioStore.getState().reset();
        useLoanStore.getState().reset();
        usePortfolioStore.getState().reset();
        useProfileStore.getState().reset();
        await signOut(authentication);
    },
    submitOtp: (otp: string) => {
        console.log(otp);
    }
}));

export default useGlobalStore;
