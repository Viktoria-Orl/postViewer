import { configureStore } from "@reduxjs/toolkit";
import { albumsApi } from "../../../entities/album/api/albumsApi";
import { commentsApi } from "../../../entities/comment/api/commentsApi";
import { postsApi } from "../../../entities/post/api/postsApi";
import postsReducer from "../../../entities/post/model/slice/postsSlice";
import { todosApi } from "../../../entities/todo/api/todosApi";
import { usersApi } from "../../../entities/user/api/usersApi";
import usersReducer from "../../../entities/user/model/slice/usersSlice";
import { photosApi } from "../../../entities/photo/api/photosApi";

export const store = configureStore({
  reducer: {
    [albumsApi.reducerPath]: albumsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    posts: postsReducer,
    [todosApi.reducerPath]: todosApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      albumsApi.middleware,
      commentsApi.middleware,
      photosApi.middleware,
      postsApi.middleware,
      todosApi.middleware,
      usersApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
