import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiClient } from '../lib';

export const getAllCourses = createAsyncThunk<any>('getAllCourses', async (_, { rejectWithValue }) => {
    try {
        const response = await apiClient.get<any>(`/api/courses/getAllCourses`);
        return response.data.response;
    } catch (error: any) {
        error.message = error.message || "Error getting while fetching courses";
        return rejectWithValue(error);
    }
});

export const getCourse = createAsyncThunk<any, string>('getCourse', async (id, { rejectWithValue }) => {
    try {
        const response = await apiClient.get<any>(`/api/courses/getCourse`, {
            params: {
                id: id
            }
        });
        return response.data.response;
    } catch (error: any) {
        error.message = error.message || `Error getting while fetching Course with id ${id}`;
        return rejectWithValue(error);
    }
});

export const getAllInstructors = createAsyncThunk<any>('getAllInstructors', async (_, { rejectWithValue }) => {
    try {
        const response = await apiClient.get<any>(`/api/instructors/getAllInstructors`);
        return response.data.response;
    } catch (error: any) {
        error.message = error.message || "Error getting while fetching instructors";
        return rejectWithValue(error);
    }
});
