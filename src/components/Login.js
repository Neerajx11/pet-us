import { useDispatch } from "react-redux";
import { signIn } from "../features/Auth";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Login Page</h2>
      <button type="submit" onClick={() => dispatch(signIn())}>
        Submit
      </button>
    </div>
  );
};

export default Login;
