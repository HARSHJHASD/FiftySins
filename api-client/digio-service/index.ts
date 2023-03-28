import axios from 'axios';
import { BASE_URLS } from '../constants';

const digioAxiosClient = axios.create({
    baseURL: BASE_URLS.digioBaseUrl,
    headers: {
        'Content-Type': 'application/json',
        mode: 'cors',
        'Allow-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400'
    }
});

digioAxiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers.Authorization = token;
    }
    return config;
});

export default digioAxiosClient;
