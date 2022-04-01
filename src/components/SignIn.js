import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { signIn } from "../features/authSlice";

const SignIn = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const clickHandler = () => dispatch(signIn());

  if (user) return <Navigate to="/" replace />;

  return (
    <div>
      <h1>Signin Page</h1>
      <button onClick={clickHandler}>Sign in</button>
    </div>
  );
};

export default SignIn;
