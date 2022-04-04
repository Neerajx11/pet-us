import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { auth, db, provider } from "../firebase";

import createUserObj from "./createUserObj";

// =============== AUTHENTICATION ================
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

// ================== DB ===================
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

/**
 * @param {string} str : Data to fetch. options[myData, myDoggo, users, doggo]
 * @param {string} uid : req for myData and myDoggo data
 * @link https://firebase.google.com/docs/firestore/manage-data/add-data#update-data
 */
export const getData = async (str, uid = null) => {
  const list = [];
  let querySnapshot;

  //query according to requirement
  switch (str) {
    case "users":
      // return all the users
      querySnapshot = await getDocs(collection(db, "users"));
      break;
    case "doggo":
      // return all the dogs
      querySnapshot = await getDocs(collection(db, "doggo"));
      break;
    case "myDoggo":
      // return your dogs
      querySnapshot = await getDocs(
        query(collection(db, "doggo"), where("owner.id", "==", uid))
      );
      break;
    case "doggoDetail":
      // return detail of a specific dog
      querySnapshot = await getDocs(collection(db, `doggo/${uid}`));
      break;
    default:
      return list;
  }

  querySnapshot.forEach((doc) => list.push({ ...doc.data(), uid: doc.id }));
  return list;
};

export const getSingleDocument = async (str, uid) => {
  const docRef = doc(db, str, uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) return docSnap.data();
  else return [];
};

//============== DOGGO CUD =====================
/**
 * @param {object} data : data to add
 * @param {string} id : generate this from uuid v4()
 * @description upload image first if avilable then add doggo
 */
export const addDoggoDetail = async (data) => {
  try {
    const res = await addDoc(collection(db, "doggo"), {
      ...data,
      timeStamp: serverTimestamp(),
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

/**
 * @param {number} uid : doggo unique id
 * @param {object} data : data to update
 * @link https://firebase.google.com/docs/firestore/manage-data/add-data#update-data
 */
export const updateDoggo = async (uid, data) => {
  try {
    await updateDoc(doc(db, "doggo", uid), data);
    console.log("Doggo updated");
  } catch (err) {
    console.log("Doggo cant be updated err=>", err);
  }
};

/**
 * @param {number} uid : doggo unique id
 */
export const deleteDoggo = async (uid) => {
  try {
    await deleteDoc(doc(db, "doggo", uid));
  } catch (err) {
    console.log(err);
  }
};
