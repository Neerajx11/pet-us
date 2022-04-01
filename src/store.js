import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import { getFromLocalStorage } from "./helpers/manageLocalStorage";
import { authMiddleware } from "./middleware/authMiddleware";

const authLocalState = getFromLocalStorage("user") || null;

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authMiddleware),
  preloadedState: {
    auth: { user: authLocalState },
  },
});

export default store;
