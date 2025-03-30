import { configureStore } from '@reduxjs/toolkit';
import medalReducer from './features/medalSlice';

export const store = configureStore({
    reducer: {
        medal: medalReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;