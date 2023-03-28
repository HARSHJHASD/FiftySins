/* eslint-disable camelcase */
import axios from 'axios';

export default async (): Promise<any> => {
    try {
        const options = {
            method: 'GET',
            url: 'https://latest-mutual-fund-nav.p.rapidapi.com/fetchLatestNAV',
            headers: {
                'X-RapidAPI-Key':
                    '4d2b57632bmshfa0677391c9f48ep181763jsn2c318a888835',
                'X-RapidAPI-Host': 'latest-mutual-fund-nav.p.rapidapi.com'
            }
        };

        const navIndex = axios
            .request(options)
            .then((response) => response)
            .catch((error) => error);
        return navIndex;
    } catch (error) {
        return error;
    }
};
