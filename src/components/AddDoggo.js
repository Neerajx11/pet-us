import { useCallback, useRef, useState } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addDoggoDetail } from "../helpers/firebaseManger";

import AddForm from "./AddForm";
import UploadImage from "./UploadImage";

import s from "./AddDoggo.module.css";

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
    <div className={s.main}>
      <p className="head">Put for adoption</p>
      <div className={s.ctr}>
        <UploadImage
          upHandler={upHandler}
          progress={prog}
          setProgress={setProg}
          className={s.left}
        />
        <AddForm className={s.right} subHandler={subHandler} progress={prog} />
      </div>
    </div>
  );
};

export default AddDoggo;
