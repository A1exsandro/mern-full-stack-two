import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import postsSlice from './features/postsSlice';

export type RootState = ReturnType<typeof store.getState>

const store = configureStore({
  reducer: {
    user: authSlice,
    post: postsSlice,
  },
});

export default store
