import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { RootState } from '../store'

import * as api from '../api/index'

export interface PostMessage {
  _id: string;
  title: string;
  name: string;
  creator: string;
  message: string;
  tags: string[];
  selectedFile: string;
  createdAt: Date;
}

interface PostsState {
  data: PostMessage[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null;
}

export interface PostResponse {
  post: PostMessage;
}

export const getPosts = createAsyncThunk<PostResponse, PostMessage>(
  "post/getPosts", async () => {
    const response = await api.fetchPosts()
    // console.log(response)
    return {post: response.data[0]} as PostResponse
  }
)

export const postsSlice = createSlice({
  name: 'post',
  initialState: {
    data: [],
    status: 'idle',
    error: null
  } as PostsState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(getPosts.pending, (state) => {
      state.status = 'loading'
    })
    .addCase(getPosts.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.data.push(action.payload.post) 
    })
    .addCase(getPosts.rejected, (state) => {
      state.status = 'failed'
    })
  },
})

export default postsSlice.reducer

export const selectPosts = (state: RootState) => state.post.data
