import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import { getData } from "../helpers/firebaseManger";
import Card from "./Card";
import Loader from "./Loader";

const CardRender = ({ str = "doggo", uid = "null", length = 0 }) => {
  const [doggo, setDoggo] = useState([]);

  useEffect(() => {
    const fetchDoggo = async () => {
      const data = await getData(str, uid);
      if (length) data.length = length;
      setDoggo(data);
    };
    fetchDoggo();
  }, [str, uid, length]);

  const list = doggo.map((data) => <Card data={data} key={data.uid} />);

  const dummy = ["", "", "", "", ""].map(() => (
    <div key={v4()} className="min-w-[320px] mx-16"></div>
  ));

  return (
    <>
      {doggo.length ? (
        <>
          {list}
          {dummy}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default CardRender;
