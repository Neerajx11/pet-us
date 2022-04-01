const createUserObj = ({
  uid,
  displayName,
  email,
  photoURL,
  accessToken,
  refreshToken,
  stsTokenManager,
}) => {
  return {
    id: uid,
    name: displayName,
    email,
    photoURL,
    token: {
      accessToken: accessToken,
      refreshToken: refreshToken,
      expirationTime: stsTokenManager.expirationTime,
    },
  };
};

export default createUserObj;
