import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { signIn } from "../features/authSlice";

import googleIcon from "../assests/icons/google.png";
import s from "./SignIn.module.css";

const SignIn = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const clickHandler = () => dispatch(signIn());

  if (user) return <Navigate to="/" replace />;

  return (
    <div className={s.main}>
      <span className={s.head}>Signin Page</span>
      <button onClick={clickHandler} className={s.gBtn}>
        <img src={googleIcon} alt="google signin button" />
        <span>Signin via Google</span>
      </button>
    </div>
  );
};

export default SignIn;
