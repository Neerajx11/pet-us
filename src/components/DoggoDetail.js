import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleDocument } from "../helpers/firebaseManger";
import Loader from "./Loader";

const DoggoDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const docSnap = await getSingleDocument("doggo", id);
      setData(docSnap);
    };
    fetchData();
  }, [id]);
  return (
    <div>
      <p className="head">Doggie Detail</p>
      {data ? <p>{data.name}</p> : <Loader />}
    </div>
  );
};

export default DoggoDetail;
