/* eslint-disable no-unused-vars */
import { create } from 'zustand';

import NavIndexDataFetcher from '../../api-client/nav-index/index';
import FiftyFinMFDataFetcher from '../../api-client/portfolio-service/get-mutual-fund-data';

const navIndexInitialState = {
    navIndex: null,
    isLoading: false
};

const useNavIndexStore = create((set, get) => ({
    ...navIndexInitialState,
    getNavIndex: async () => {
        const response = await NavIndexDataFetcher();
        console.log(response);
    },
    getFiftyFinMF: async () => {
        const response = await FiftyFinMFDataFetcher();
        console.log(response);
    }
}));

export default useNavIndexStore;
