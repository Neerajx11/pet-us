import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import createUserObj from "../helpers/createUserObj";

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (state, { rejectWithValue }) => {
    try {
      const res = await signInWithPopup(auth, provider);
      const user = res.user;
      return createUserObj(user);
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);

const initialState = {
  user: {},
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
  },
});

export default authSlice.reducer;
