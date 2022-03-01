import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import hotPostPreviewsReducer from '../features/postPreviews/hotPostPreviewsSlice';

export const store = configureStore({
  reducer: {
    hotPostPreviews: hotPostPreviewsReducer
  }
});
