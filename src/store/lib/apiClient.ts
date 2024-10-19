import axios, { AxiosError } from 'axios';
import { getHeaders } from "./helpers";
import config from '../../config';

export const apiClient = axios.create({
    baseURL: config.API_URL,
    headers: getHeaders(),
    timeout: 5000,
});

// Intercept requests
apiClient.interceptors.request.use((request) => {
    return request;
});


apiClient.interceptors.response.use(
    (response: any) => {
        return response;
    },
    (error: AxiosError) => {
        let err = {
            message: error.message,
            status: error.response?.status || 500,
            data: error.response?.data,
        }
        if (error.response) {
            err.message = "Server error: " + error.response,
                err.status = error.response?.status,
                err.data = error.response?.data;
        } else if (error.request) {
            err.message = 'Network error. Please check your internet connection.';
            err.status = 500;
            err.data = null;
        } else {
            err.message = error.message;
        }
        return Promise.reject(err);
    }
);