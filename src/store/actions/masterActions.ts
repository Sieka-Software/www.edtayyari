import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiClient } from '../lib';
import config from '../../config';

export const getHealth = createAsyncThunk<any>('getHealth', async (_, { rejectWithValue, dispatch }) => {
    try {
        const response = await apiClient.get<any>(`/health`);
        if (response.data.response.status === 200) {
            dispatch(getConfig());
        }
    } catch (error: any) {
        error.message = error.message || "Error getting while fetching health";
        return rejectWithValue(error);
    }
});

export const getConfig = createAsyncThunk<any>('getConfig', async (_, { rejectWithValue }) => {
    try {
        const response = await apiClient.get<any>(`${config.API_URL}/api/config/getConfig`);
        return response.data.response;
    } catch (error: any) {
        error.message = error.message || "Error getting while fetching Configuration";
        return rejectWithValue(error);
    }
});

export const addNewContact = createAsyncThunk<any, any>('addNewContact', async (data, { rejectWithValue }) => {
    try {
        const response = await apiClient.post<any>(`/api/contacts/addNewContact`, {
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message
        });
        return response.data.response;
    } catch (error: any) {
        error.message = error.message || `Error Adding New Contact`;
        return rejectWithValue(error);
    }
});