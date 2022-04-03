import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import { getData } from "../helpers/firebaseManger";
import s from "./CardCtr.module.css";
import DoggoCard from "./DoggoCard";
import Loader from "./Loader";

const CardCtr = ({ str = "doggo", uid = "null" }) => {
  const [doggo, setDoggo] = useState([]);

  useEffect(() => {
    const fetchDoggo = async () => {
      const data = await getData(str, uid);
      setDoggo(data);
    };
    fetchDoggo();
  }, [str, uid]);

  const list = doggo.map((data) => <DoggoCard data={data} key={data.uid} />);

  const dummy = ["", "", "", "", ""].map((el) => (
    <div className={s.dummy} key={v4()}></div>
  ));

  return (
    <div>
      {doggo.length ? (
        <div className={s.ctr}>
          {list}
          {dummy}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CardCtr;
