import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'

export type RootState = ReturnType<typeof store.getState>

const store = configureStore({
  reducer: {
    user: authSlice,
  },
});

export default store
