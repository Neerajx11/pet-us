import { useCallback, useRef, useState } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addDoggoDetail } from "../helpers/firebaseManger";

import AddForm from "./AddForm";
import UploadImage from "./UploadImage";

import Template from "./Template";
import Footer from "./Footer";

const AddDoggo = () => {
  const { user } = useSelector((state) => state.auth);
  const [prog, setProg] = useState(0);

  const navigate = useNavigate();

  let obj = useRef({});

  const upHandler = useCallback((photoURL) => {
    obj.current = { ...obj.current, photoURL };
  }, []);
  const subHandler = async (values) => {
    obj.current = { ...obj.current, ...values };
    if (prog !== 0 && prog < 100) {
      console.log("wait");
    } else {
      let finalObj = {
        ...obj.current,
        owner: {
          id: user.uid,
          name: user.name,
          photoURL: user.photoURL,
        },
      };
      await addDoggoDetail(finalObj);
      navigate("/explore", { replace: true });
    }
  };
  return (
    <div>
      <Template head="Put for" sub="adoption">
        <div className="my-8">
          <div className="flex flex-col items-center justify-center md:flex-row md:items-start">
            <UploadImage
              upHandler={upHandler}
              progress={prog}
              setProgress={setProg}
              className="w-10/12 m-8 md:4/12 lg:w-4/12 md:pl-24"
            />
            <AddForm
              className="w-10/12 pt-2 m-8 md:8/12 lg:w-8/12"
              subHandler={subHandler}
              progress={prog}
            />
          </div>
        </div>
      </Template>
      <Footer />
    </div>
  );
};

export default AddDoggo;
