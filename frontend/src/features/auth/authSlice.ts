import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { RootState } from '../../store'

import * as api from '../../api/index'

interface User { 
  firstName: string;  
  lastName: string; 
  email: string; 
  password: string; 
  confirmPassword: string;
}

interface UsersState {
  data: User[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null;
}

export interface PostUserResponse {
  user: User;  
}

export const postUser = createAsyncThunk<PostUserResponse, User>(
  "users/postUser", async (user) => {
  const response = await api.signUp(user);

  return { user: response.data } as PostUserResponse
})

export const postSigin = createAsyncThunk<PostUserResponse, User>(
  "users/postSignin", async (user) => {
  const response = await api.signIn(user);

  return { user: response.data } 
})

export const counterSlice = createSlice({
  name: 'user',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  } as UsersState,
  reducers: {},
  extraReducers: (builder) => { 
    builder
    .addCase(postUser.pending, (state) => {
      state.status = 'loading'
    })
    .addCase(postUser.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.data.push(action.payload.user)
    })
    .addCase(postUser.rejected, (state, action) => {
      state.status = 'failed'
      // state.error = action.error.message
    })
    .addCase(postSigin.pending, (state) => {
      state.status = 'loading'
    })
    .addCase(postSigin.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.data.push(action.payload.user)
    })
    .addCase(postSigin.rejected, (state, action) => {
      state.status = 'failed'
      // state.error = action.error.message
    })
  },
})

export default counterSlice.reducer

export const selectUsers = (state: RootState) => state.user.data
