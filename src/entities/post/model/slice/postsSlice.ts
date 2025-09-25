import {
  createEntityAdapter,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { Post } from "../../../../shared/model/types";
import { postsApi } from "../../api/postsApi";

const postsAdapter = createEntityAdapter<Post>();

const postsSlice = createSlice({
  name: "posts",
  initialState: postsAdapter.getInitialState(),
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      postsAdapter.setAll(state, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      postsApi.endpoints.getPosts.matchFulfilled,
      (state, action) => {
        postsAdapter.setAll(state, action.payload);
      },
    );

    builder.addMatcher(
      postsApi.endpoints.getPostById.matchFulfilled,
      (state, action) => {
        postsAdapter.upsertOne(state, action.payload);
      },
    );
  },
});

export const { setPosts } = postsSlice.actions;
export default postsSlice.reducer;
