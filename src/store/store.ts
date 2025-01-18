import { configureStore } from '@reduxjs/toolkit';
import aiReducer from './aiSlice';

export const store = configureStore({
  reducer: {
    ai: aiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;