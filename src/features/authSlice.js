import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//firebase
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

//custom helper
import createUserObj from "../helpers/createUserObj";

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (state, { rejectWithValue }) => {
    try {
      const res = await signInWithPopup(auth, provider);
      const user = res.user;
      console.log(user);
      return createUserObj(user);
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);

export const signOut = createAsyncThunk("auth/signOut", async () => {
  try {
    await auth.signOut();
  } catch (err) {
    console.log(err);
  }
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
