import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { utils } from '../../utils';
import * as Actions from '../actions';

type PostStateUpdate = {
  key: keyof PostState
  value: any
}

type PostStateChildUpdate = {
  parent: keyof PostState
  key: string
  value: any
}

type PostState = {
  queryForm: {
    loading: boolean,
    args: any,
    status: string,
    message: string,
    data: any,
  },
  subscribeForm: {
    loading: boolean,
    args: any,
    status: string,
    message: string,
    data: any,
  },
}

const initialState: PostState = {
  queryForm: {
    loading: false,
    args: {},
    status: "",
    message: "",
    data: {},
  },
  subscribeForm: {
    loading: false,
    args: {},
    status: "",
    message: "",
    data: {},
  },
}

export const postSlice = createSlice({
  name: 'post',
  initialState: initialState,
  reducers: {
    setPostState: (state, action: PayloadAction<PostStateUpdate>) => {
      let { key, value } = action.payload
      state[key] = value
    },
    setPostChildState: (state, action: PayloadAction<PostStateChildUpdate>) => {
      const { parent, key, value } = action.payload

      if (state[parent] && typeof state[parent] === 'object') {
        ; (state[parent] as Record<string, any>)[key] = value
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(Actions.subscribeNewsletter.pending, (state) => {
      state.subscribeForm.loading = true
      state.subscribeForm.status = "";
    })
    builder.addCase(Actions.subscribeNewsletter.fulfilled, (state, action: any) => {
      let response = action.payload;
      state.subscribeForm = {
        loading: false,
        args: action.meta.arg,
        message: response.message,
        status: utils.getCodeType(response.status),
        data: response.data,
      }
    })
    builder.addCase(Actions.subscribeNewsletter.rejected, (state, action: any) => {
      let error = action.payload;

      state.subscribeForm = {
        loading: false,
        args: { email: action.meta.arg },
        message: error.message,
        status: "error",
        data: error.data,
      }
    })
    builder.addCase(Actions.submitQuery.pending, (state) => {
      state.queryForm.loading = true
      state.queryForm.status = "";
    })
    builder.addCase(Actions.submitQuery.fulfilled, (state, action: any) => {
      let response = action.payload;
      state.queryForm.args = action.meta.arg;
      state.queryForm.message = response.message;
      state.queryForm.status = utils.getCodeType(response.status);
      state.queryForm.data = response.data;
      state.queryForm.loading = false;
    })
    builder.addCase(Actions.submitQuery.rejected, (state, action: any) => {
      let error = action.payload;
      state.queryForm.args = action.meta.arg;
      state.queryForm.status = "error";
      state.queryForm.status = utils.getCodeType(error.status);
      state.queryForm.message = error.message;
      state.queryForm.data = error.data;
      state.queryForm.loading = false;
    })
  },
})

export const { setPostState, setPostChildState } = postSlice.actions

export const postReducer = postSlice.reducer
