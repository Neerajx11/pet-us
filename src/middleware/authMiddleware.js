import { saveUserToDB } from "../helpers/firebaseManger";

import {
  clearLocalStorage,
  saveToLocalStorage,
} from "../helpers/manageLocalStorage";

export const authMiddleware = (store) => (next) => (action) => {
  if (action.type === "auth/signIn/fulfilled") {
    //store in localStorage
    saveToLocalStorage("user", action.payload);
    saveUserToDB(action.payload);
  }
  if (action.type === "auth/signOut/fulfilled") {
    //clear localStorage
    clearLocalStorage("user");
  }
  return next(action);
};
