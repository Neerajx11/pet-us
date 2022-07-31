import { Loader as Load } from "react-feather";

const Loader = () => {
  return (
    <div className="my-12 h-[50vh] lg:h-[60vh] grid place-items-center">
      <Load className="w-12 h-12 animate-spin text-primary" />
    </div>
  );
};

export default Loader;
