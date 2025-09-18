import {
  createEntityAdapter,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { usersApi } from "../../api/usersApi";
import type { User } from "../types";

const usersAdapter = createEntityAdapter<User>();

const usersSlice = createSlice({
  name: "users",
  initialState: usersAdapter.getInitialState(),
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      usersAdapter.setAll(state, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      usersApi.endpoints.getUsers.matchFulfilled,
      (state, action) => {
        usersAdapter.setAll(state, action.payload);
      },
    );

    builder.addMatcher(
      usersApi.endpoints.getUserById.matchFulfilled,
      (state, action) => {
        usersAdapter.upsertOne(state, action.payload);
      },
    );
  },
});

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;
