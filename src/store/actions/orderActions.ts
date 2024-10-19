import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiClient } from '../lib';

export const reviewOrder = createAsyncThunk<any, string>('getCourse', async (id, { rejectWithValue }) => {
    try {
        const response = await apiClient.get<any>(`/api/orders/reviewOrder`, {
            params: {
                id: id
            }
        });
        return response.data.response;
    } catch (error: any) {
        error.message = error.message || `Error getting while review Order with CourseId ${id}`;
        return rejectWithValue(error);
    }
});

interface CouponArgs {
    courseId: string;
    couponCode: string;
}

export const applyCoupon = createAsyncThunk<any, CouponArgs>('applyCoupon', async ({ courseId, couponCode }, { rejectWithValue }) => {
    try {
        const response = await apiClient.get<any>(`/api/coupons/applyCoupon`, {
            params: {
                courseId: courseId,
                couponCode: couponCode
            }
        });
        return response.data.response;
    } catch (error: any) {
        error.message = error.message || `Error getting while applying coupon ${couponCode}  on CourseId ${courseId}`;
        return rejectWithValue(error);
    }
});

interface OrderArgs {
    courseId: string;
    referralCode: string;
    name: string,
    email: string,
    phone: string,
}

export const placeOrder = createAsyncThunk<any, OrderArgs>('placeOrder', async (data, { getState, rejectWithValue }) => {
    try {
        const state: any = await getState();
        const { couponForm } = state.order;
        let couponCode: string = couponForm.args.couponCode;

        if (couponForm.type !== "success") {
            couponCode = "";
        }

        const response = await apiClient.post<any>(`/api/orders/placeOrder`, {
            courseId: data.courseId,
            couponCode: couponCode,
            referralCode: data.referralCode,
            studentDetail: {
                studentName: data.name,
                studentPhone: data.phone,
                studentEmail: data.email
            }
        });
        return response.data.response;
    } catch (error: any) {
        error.message = error.message || `Error getting while creating Order`;
        return rejectWithValue(error);
    }
});

export const updateOrderStatus = createAsyncThunk<any, any>('updateOrderStatus', async (data, { rejectWithValue }) => {
    try {
        const response = await apiClient.post<any>(`/api/orders/updateOrderStatus`, {
            razorpay_payment_id: data.razorpay_payment_id,
            razorpay_order_id: data.razorpay_order_id,
            razorpay_signature: data.razorpay_signature,
        });
        return response.data.response;
    } catch (error: any) {
        error.message = error.message || `Error getting while updating Order`;
        return rejectWithValue(error);
    }
});