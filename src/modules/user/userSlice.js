import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    loading: false,
    currentUser: {},
  },
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload.user;
      state.isLoggedIn = true;
    },
    signInError: (state, action) => {
      state.loading = false;
      state.isLoggedIn = false;
      state.error = action.payload.error;
    },
  },
});

export const { signInStart, signInSuccess, signInError } = userSlice.actions;

export default userSlice.reducer;
