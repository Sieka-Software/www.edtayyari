import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiClient } from '../lib';

interface submitQueryArgs {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export const submitQuery = createAsyncThunk<any, submitQueryArgs>('submitQuery', async (data, { rejectWithValue }) => {
    try {
        const response = await apiClient.post<any>(`/api/contacts/submitQuery`, data);
        return response.data.response;
    } catch (error: any) {
        error.message = error.message || `Error Submitting Query: ${error.message}`;
        return rejectWithValue(error);
    }
});

interface subscribeNewsletterArgs {
    email: string;
}

export const subscribeNewsletter = createAsyncThunk<any, subscribeNewsletterArgs>('subscribeNewsletter', async (data, { rejectWithValue }) => {
    try {
        const response = await apiClient.post<any>(`/api/newsletters/subscribeNewsletter`, data);
        return response.data.response;
    } catch (error: any) {
        error.message = error.message || `Error getting while Subscription: ${error.message}`;
        return rejectWithValue(error);
    }
});