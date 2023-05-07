import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// infer the RootState and 'AppDispatch' types from the store itsef
export type RootState = ReturnType<typeof store.getState>;
// Inferred type :{posts: PostsState,comments:CommentState,users:UserState}
export type AppDispatch = typeof store.dispatch;
