const createUserObj = ({ uid, displayName, email, photoURL }, accessToken) => {
  return {
    uid,
    name: displayName,
    email,
    photoURL,
    accessToken,
  };
};

export default createUserObj;
