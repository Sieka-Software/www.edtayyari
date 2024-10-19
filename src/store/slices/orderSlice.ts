import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { utils } from '../../utils';
import * as Actions from "../actions";

type OrderStateUpdate = {
  key: keyof OrderState
  value: any
}

type OrderStateChildUpdate = {
  parent: keyof OrderState
  key: string
  value: any
}

type OrderState = {
  loading: boolean,
  courseData: {
    loading: boolean,
    args: any | undefined
    status: string | undefined
    message: string | undefined
    data: any | undefined
  },
  couponForm: {
    loading: boolean,
    args: any | undefined
    status: string | undefined
    message: string | undefined
    data: any | undefined
  },
  orderForm: {
    loading: boolean,
    args: any | undefined
    status: string | undefined
    message: string | undefined
    data: any | undefined
  },
  orderStatus: {
    loading: boolean,
    args: any | undefined
    status: string | undefined
    message: string | undefined
    data: any | undefined
  },
  course: any | undefined,
  price: any | undefined,
  razorpayorder: any | undefined
}

const initialState: OrderState = {
  loading: true,
  courseData: {
    loading: true,
    args: {},
    status: '',
    message: '',
    data: {}
  },
  couponForm: {
    loading: false,
    args: {},
    status: '',
    message: '',
    data: {}
  },
  orderForm: {
    loading: false,
    args: {},
    status: '',
    message: '',
    data: {}
  },
  orderStatus: {
    loading: false,
    args: {},
    status: '',
    message: '',
    data: {}
  },
  course: undefined,
  price: undefined,
  razorpayorder: undefined
}

export const orderSlice = createSlice({
  name: 'order',
  initialState: initialState,
  reducers: {
    setOrderState: (state, action: PayloadAction<OrderStateUpdate>) => {
      let { key, value } = action.payload
      state[key] = value
    },
    setOrderChildState: (state, action: PayloadAction<OrderStateChildUpdate>) => {
      const { parent, key, value } = action.payload

      if (state[parent] && typeof state[parent] === 'object') {
        ; (state[parent] as Record<string, any>)[key] = value
      }
    },
  },
  extraReducers: (builder) => {
    // Review Order
    builder.addCase(Actions.reviewOrder.pending, (state) => {
      state.courseData.loading = true
      state.courseData.status = "";
    })
    builder.addCase(Actions.reviewOrder.fulfilled, (state, action: any) => {
      let response = action.payload;
      state.courseData = {
        loading: false,
        args: { courseId: action.meta.arg },
        status: utils.getCodeType(response.status),
        message: response.message,
        data: response.data
      }
      if (response.status === 200) {
        state.course = response.data.course
        state.price = response.data.pricing
      }
    })
    builder.addCase(Actions.reviewOrder.rejected, (state, action: any) => {
      let error = action.payload;
      state.courseData = {
        loading: false,
        args: { courseId: action.meta.arg },
        status: "error",
        message: error.message,
        data: error.data
      }
    })
    // Apply Coupon
    builder.addCase(Actions.applyCoupon.pending, (state) => {
      state.couponForm.loading = true
      state.couponForm.status = "";
    })
    builder.addCase(Actions.applyCoupon.fulfilled, (state, action: any) => {
      let response = action.payload;
      state.couponForm = {
        loading: false,
        args: action.meta.arg,
        status: utils.getCodeType(response.status),
        message: response.message,
        data: response.data
      }

      if (response.status === 200) {
        state.course = response.data.course
        state.price = response.data.pricing
      } else {
        state.price.couponCode = "";
        state.price.courseCouponDiscount = 0;
      }
    })
    builder.addCase(Actions.applyCoupon.rejected, (state, action: any) => {
      let error = action.payload;
      state.couponForm = {
        loading: false,
        args: action.meta.arg,
        status: 'error',
        message: error.message,
        data: error.data
      }
    })
    // Place order
    builder.addCase(Actions.placeOrder.pending, (state) => {
      state.orderForm.loading = true
      state.orderForm.status = "";
    })
    builder.addCase(Actions.placeOrder.fulfilled, (state, action: any) => {
      let response = action.payload;
      state.orderForm = {
        loading: false,
        args: action.meta.arg,
        message: response.message,
        status: utils.getCodeType(response.status),
        data: response.data,
      }

      if (response.status === 200) {
        state.razorpayorder = response.data;
      }
    })
    builder.addCase(Actions.placeOrder.rejected, (state, action: any) => {
      let error = action.payload;
      state.orderForm = {
        loading: false,
        args: action.meta.arg,
        message: error.message,
        status: "error",
        data: error.data,
      }
    })
    // Update Order Status
    builder.addCase(Actions.updateOrderStatus.pending, (state) => {
      state.orderStatus.loading = true
      state.orderStatus.status = "";
    })
    builder.addCase(Actions.updateOrderStatus.fulfilled, (state, action: any) => {
      let response = action.payload;
      state.orderStatus = {
        loading: false,
        args: action.meta.arg,
        status: utils.getCodeType(response.status),
        message: response.message,
        data: response.data,
      }
    })
    builder.addCase(Actions.updateOrderStatus.rejected, (state, action: any) => {
      let error = action.payload;
      state.orderStatus = {
        loading: false,
        args: action.meta.arg,
        status: "error",
        message: error.message,
        data: error.data,
      }
    })
  },
})

export const { setOrderState, setOrderChildState } = orderSlice.actions

export const orderReducer = orderSlice.reducer
