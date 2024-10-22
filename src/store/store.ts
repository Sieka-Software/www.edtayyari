import { configureStore } from '@reduxjs/toolkit'
import config from '../config'
import * as Reducer from './slices'

export const store = configureStore({
    reducer: {
        master: Reducer.masterReducer,
        work: Reducer.workReducer,
        order: Reducer.orderReducer,
        post: Reducer.postReducer
    },
    devTools: config.NODE_ENV === 'development'
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;