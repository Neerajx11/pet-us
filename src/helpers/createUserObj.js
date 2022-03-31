const createUserObj = ({
  uid,
  name,
  email,
  photoURL,
  accessToken,
  refreshToken,
  stsTokenManager,
}) => {
  return {
    id: uid,
    name: name,
    email: email,
    photoURL: photoURL,
    token: {
      accessToken: accessToken,
      refreshToken: refreshToken,
      expirationTime: stsTokenManager.expirationTime,
    },
  };
};

export default createUserObj;
