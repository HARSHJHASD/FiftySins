import axios from 'axios';
import { BASE_URLS } from '../constants';

const loanAxiosClient = axios.create({
    baseURL: BASE_URLS.loansBaseUrl,
    headers: {
        'Content-Type': 'application/json',
        mode: 'cors',
        'Allow-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400'
    }
});
loanAxiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers.Authorization = token;
    }
    return config;
});
export default loanAxiosClient;
