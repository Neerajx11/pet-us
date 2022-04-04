import { LogIn } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "../features/authSlice";
import s from "./Profile.module.css";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  if (!user) {
    return null;
  }
  return (
    <div className={s.main}>
      <div>
        <Link to="/mydoggo">my doggo</Link>
      </div>
      <div>
        <Link to="/add">add doggo</Link>
      </div>
      <div className={s.sign} onClick={() => dispatch(signOut())}>
        <span>sign out</span>
        <LogIn strokeWidth={2} size={16} color={"white"} />
      </div>
    </div>
  );
};

export default Profile;
