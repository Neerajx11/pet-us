import React from "react";
import Footer from "../components/Footer";
import Template from "../components/Template";
import Google from "../assests/images/google.webp";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../features/authSlice";
import { Navigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const clickHandler = () => dispatch(signIn());

  if (user) return <Navigate to="/" replace />;

  return (
    <div>
      <Template head="Login">
        <div className="my-8 pb-28 h-[50vh]">
          <p className="mt-20 mb-24 text-4xl font-semibold text-center text-bgprimary">
            Join the movement
          </p>
          <button
            onClick={clickHandler}
            className="flex items-center px-3 py-5 mx-auto font-semibold tracking-wide bg-white rounded-lg shadow-lg"
          >
            <img
              className="w-5 h-5 mr-2"
              src={Google}
              alt="google login button"
            />
            <span>Login via Google</span>
          </button>
        </div>
      </Template>
      <Footer />
    </div>
  );
};

export default Login;
