import React, { useEffect, useState } from "react";
import { getYourDoggo } from "../helpers/firebaseManger";

const ShowDoggo = () => {
  const [doggo, setDoggo] = useState([]);

  useEffect(() => {
    const data = async () => {
      const doggo = await getYourDoggo("Rqz9NnEjEobrHp8GNg7WUzQiDKL2");
      setDoggo(doggo);
    };
    data();
  }, []);

  const list = doggo.map(({ name, uid }) => {
    return (
      <div key={Math.random()}>
        <span>Name: {name}</span>
      </div>
    );
  });

  return (
    <div>
      <h2>Show Doggo</h2>
      {list}
    </div>
  );
};

export default ShowDoggo;
