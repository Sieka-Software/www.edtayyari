import { configureStore } from '@reduxjs/toolkit'
import * as Reducer from './slices'

export const store = configureStore({
    reducer: {
        master: Reducer.masterReducer,
        work: Reducer.workReducer,
        order: Reducer.orderReducer,
        post: Reducer.postReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;