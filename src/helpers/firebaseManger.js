import { async } from "@firebase/util";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import { auth, db, provider } from "../firebase";

import createUserObj from "./createUserObj";

export const userSignIn = async () => {
  try {
    const res = await signInWithPopup(auth, provider);
    const user = res.user;
    const { accessToken } = GoogleAuthProvider.credentialFromResult(res);

    return { err: false, data: createUserObj(user, accessToken) };
  } catch (err) {
    console.log(err);

    return { err: true, data: err.message };
  }
};

export const userSignOut = async () => {
  try {
    await auth.signOut();
    console.log("Signout successfully");
  } catch (err) {
    console.log(err);
  }
};

export const saveUserToDB = async ({ uid, name, email, photoURL }) => {
  try {
    await setDoc(doc(db, "users", uid), {
      uid,
      name,
      email,
      photoURL,
    });
    console.log("User stored");
  } catch (err) {
    console.log("User cant be stored err=>", err);
  }
};

export const addDoggoDetail = async () => {
  try {
    const res = await addDoc(collection(db), {
      //data
      timeStamp: serverTimestamp(),
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAllUser = async () => {
  const list = [];
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => list.push({ ...doc.data(), uid: doc.id }));
  return list;
};

export const getYourDoggo = async (uid = null) => {
  const list = [];

  const querySnapshot = await getDocs(
    query(collection(db, "doggo"), where("owner", "==", uid))
  );
  querySnapshot.forEach((doc) => list.push({ ...doc.data(), uid: doc.id }));

  return list;
};
