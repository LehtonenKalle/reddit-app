import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postPreviewsReducer from '../features/postPreviews/posts/postPreviewsSlice';

export const store = configureStore({
  reducer: {
    postPreviews: postPreviewsReducer
  }
});
