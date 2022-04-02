import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { db } from "../firebase";

const sampleData = {
  name: "Don bosco",
  breed: "German",
  isVaccinated: false,
};
const AddDoggo = () => {
  const clickHandler = () => {};

  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, "doggo"));
      querySnapshot.forEach((doc) =>
        console.log(doc.id, " =>", doc.data(), doc.exists())
      );
    };
    getData();
  }, []);

  return (
    <div style={{ margin: "40px 0" }}>
      <h3>Add Doggo</h3>
      <button onClick={clickHandler}>Push Doggo</button>
    </div>
  );
};

export default AddDoggo;
