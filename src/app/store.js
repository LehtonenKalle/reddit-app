import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postPreviewsReducer from '../features/postPreviews/posts/postPreviewsSlice';
import subredditsReducer from '../features/subreddits/subredditsSlice';
import searchBarReducer from '../features/header/searchBar/searchBarSlice';

export const store = configureStore({
  reducer: {
    postPreviews: postPreviewsReducer,
    subreddits: subredditsReducer,
    searchBar: searchBarReducer
  }
});
