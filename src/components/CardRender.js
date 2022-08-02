import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import { getData } from "../helpers/firebaseManger";
import Card from "./Card";
import Loader from "./Loader";

const CardRender = ({
  str = "doggo",
  uid = "null",
  length = 0,
  msg = false,
}) => {
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
        <>
          {msg ? (
            <div className="h-[60vh] grid place-items-center">
              <h3 className="mx-6 text-4xl font-bold text-center text-bgprimary">
                You have not added any dog yet :|
              </h3>
            </div>
          ) : (
            <Loader />
          )}
        </>
      )}
    </>
  );
};

export default CardRender;
