import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadHotPostPreviews = createAsyncThunk(
  'hotPostPreviews/loadHotPostPreviews',
  async () => {
    const data = await fetch("https://www.reddit.com/hot/.json");
    const json = await data.json();
    return json;
  }
)

export const hotPostPreviewsSlice = createSlice({
  name: 'hotPostPreviews',
  initialState: {
    posts: [],
    isLoading: false,
    hasError: false
  },
  extraReducers: {
    [loadHotPostPreviews.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadHotPostPreviews.fulfilled]: (state, action) => {
      const { data } = action.payload;
      state.isLoading = false;
      state.hasError = false;
      state.posts = data.children;
    },
    [loadHotPostPreviews.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    }
  }
})

export const selectAllPreviews = (state) => state.hotPostPreviews.posts;
export const isLoading = (state) => state.hotPostPreviews.isLoading;

export default hotPostPreviewsSlice.reducer;