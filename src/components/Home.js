import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <div>
      <h1>Home</h1>
      {user && (
        <div style={{ display: "flex", margin: "30px 0" }}>
          <img src={user.photoURL} alt="profile" />
          <div style={{ padding: "20px" }}>
            <p>Hello : {user.name}</p>
            <p>Email : {user.email}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
