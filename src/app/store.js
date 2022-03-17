import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postPreviewsReducer from '../features/postPreviews/posts/postPreviewsSlice';
import subredditsReducer from '../features/subreddits/subredditsSlice';

export const store = configureStore({
  reducer: {
    postPreviews: postPreviewsReducer,
    subreddits: subredditsReducer
  }
});
