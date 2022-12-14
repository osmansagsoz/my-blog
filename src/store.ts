import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./features/postsSlice";

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
