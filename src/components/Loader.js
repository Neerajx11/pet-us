import { Loader as Load } from "react-feather";

const style = {
  width: "100%",
  margin: "20px auto",
  display: "flex",
  justifyContent: "center",
};
const Loader = () => {
  return (
    <div style={style}>
      <Load />
    </div>
  );
};

export default Loader;
