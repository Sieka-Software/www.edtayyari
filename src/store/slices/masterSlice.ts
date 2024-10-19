import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getConfig, getHealth } from '../actions';
import { utils } from '../../utils'

type MasterStateUpdate = {
  key: keyof MasterState
  value: any
}

type MasterStateChildUpdate = {
  parent: keyof MasterState
  key: string
  value: any
}


type MasterState = {
  loading: boolean,
  health: boolean,
  isError: boolean,
  isBackToTopVisible: boolean,
  status: {
    type: string | undefined
    code: number | undefined
    message: string | undefined
    data: any | undefined
  }
  config?: Record<string, any>
}

const initialState: MasterState = {
  loading: true,
  health: false,
  isError: false,
  isBackToTopVisible: false,
  config: {},
  status: {
    type: undefined,
    code: undefined,
    message: undefined,
    data: undefined,
  }
}

export const masterSlice = createSlice({
  name: 'master',
  initialState: initialState,
  reducers: {
    setMasterState: (state, action: PayloadAction<MasterStateUpdate>) => {
      let { key, value } = action.payload
      state[key] = value
    },
    setMasterChildState: (state, action: PayloadAction<MasterStateChildUpdate>) => {
      const { parent, key, value } = action.payload

      if (state[parent] && typeof state[parent] === 'object') {
        ; (state[parent] as Record<string, any>)[key] = value
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getHealth.fulfilled, (state) => {
      state.health = true
    })
    builder.addCase(getHealth.rejected, (state, action: PayloadAction<any>) => {
      let error = action.payload;
      state.loading = false;
      state.health = false;
      state.status = { type: 'error', code: 500, message: error.message, data: error.data }
    })
    builder.addCase(getConfig.fulfilled, (state, action: PayloadAction<any>) => {
      let response = action.payload;
      state.loading = false;
      state.status = { ...state.status, type: utils.getCodeType(response.status), code: response.status, message: response.message }
      if (response.status === 200) {
        state.config = response.data
      } else {
        state.status.data = response.data;
      }
    })
    builder.addCase(getConfig.rejected, (state, action: PayloadAction<any>) => {
      let error = action.payload;
      state.loading = false;
      state.status = { type: 'error', code: 500, message: error.message, data: error.data }
    })
  }
})

export const { setMasterState, setMasterChildState } = masterSlice.actions

export const masterReducer = masterSlice.reducer
