import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { userSignIn, userSignOut } from "../helpers/firebaseManger";

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (state, { rejectWithValue }) => {
    let res = await userSignIn();
    return res.err ? rejectWithValue(res.data) : res.data;
  }
);

export const signOut = createAsyncThunk("auth/signOut", async () => {
  await userSignOut();
});

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [signIn.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    [signIn.pending]: (state) => {
      state.loading = true;
    },
    [signIn.rejected]: (state, action) => {
      state.loading = false;
      state.user = null;
      state.error = action.payload;
    },
    [signOut.fulfilled]: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export default authSlice.reducer;
