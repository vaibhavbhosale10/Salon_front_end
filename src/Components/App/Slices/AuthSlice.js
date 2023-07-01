import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    addUser: (state, { payload }) => payload,
    removeUser: () => ({}),
    addAdmin: (state, { payload }) => payload,
    removeAdmin: () => ({}),
  },
});

export const { addUser, removeUser, addAdmin, removeAdmin } = AuthSlice.actions;

export const selectAuth = (state) => state.loggedUser;

export default AuthSlice.reducer;
