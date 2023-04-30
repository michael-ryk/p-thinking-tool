import { configureStore } from '@reduxjs/toolkit';
import knowledgeItemReducer from './knowledgeItemSlice';
import modalReducer from './modalSlice';

export const store = configureStore({
  reducer: {
    knowledgeItem: knowledgeItemReducer,
    modal: modalReducer,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch