import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadPostPreviews = createAsyncThunk(
  'postPreviews/loadPostPreviews',
  async () => {
    const data = await fetch("https://www.reddit.com/.json");
    const json = await data.json();
    return json;
  }
)

export const postPreviewsSlice = createSlice({
  name: 'postPreviews',
  initialState: {
    posts: [],
    isLoading: false,
    hasError: false
  },
  extraReducers: {
    [loadPostPreviews.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadPostPreviews.fulfilled]: (state, action) => {
      const { data } = action.payload;
      state.isLoading = false;
      state.hasError = false;
      state.posts = data.children;
    },
    [loadPostPreviews.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    }
  }
})

export const selectAllPreviews = (state) => state.postPreviews.posts;
export const isLoading = (state) => state.postPreviews.isLoading;

export default postPreviewsSlice.reducer;