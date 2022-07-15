import { Loader as Load } from "react-feather";

const Loader = () => {
  return (
    <div className="my-12 flex justify-center">
      <Load className="w-12 h-12 animate-spin text-primary" />
    </div>
  );
};

export default Loader;
