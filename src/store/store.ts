import { configureStore } from '@reduxjs/toolkit';
import swipeReducer from './swipeSlice';
import themeReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    swipe: swipeReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
