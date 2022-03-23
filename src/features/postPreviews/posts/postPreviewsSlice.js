import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { selectSearchTerm } from "../../header/searchBar/searchBarSlice";

export const loadPostPreviews = createAsyncThunk(
  'postPreviews/loadPostPreviews',
  async (page = "") => {
    const data = await fetch(`https://www.reddit.com/${page}/.json`);
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
      console.log(state.posts);
    },
    [loadPostPreviews.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    }
  }
})

export const selectAllPreviews = (state) => state.postPreviews.posts;

export const selectFilteredAllPreviews = (state) => {
  const allPreviews = selectAllPreviews(state);
  const searchTerm = selectSearchTerm(state);

  return allPreviews.filter((post) => {
    return post.data.title.toLowerCase().includes(searchTerm.toLowerCase())
  })

}

export const isLoading = (state) => state.postPreviews.isLoading;

export default postPreviewsSlice.reducer;