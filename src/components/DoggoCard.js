import React from "react";
import { useNavigate } from "react-router-dom";

import s from "./DoggoCard.module.css";

// const data = {
//   city: "delhi",
//   description: "It is a good doggo. Loves to play.",
//   isVaccinated: "1",
//   photoUrl:
//     "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg",
//   owner: {
//     name: "Jason Smith",
//     photoUrl:
//       "https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg",
//   },
//   contactDetail: {
//     phone: "7893425234",
//     instagram: "test23",
//     email: "testemail@gmail.com",
//     facebook: "testfacebook",
//   },
//   name: "Don Bosco",
//   breed: "German Shepard",
//   uid: "6bGS2DN0ZGk4XamMf0xo",
// };

const sampleImageUrl =
  "https://thumbs.dreamstime.com/z/dog-logo-design-vector-template-icon-153847249.jpg";

const DoggoCard = ({ data }) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/doggo/${data.uid}`);
  };
  return (
    <div className={s.main} onClick={clickHandler}>
      <div className={s.imgCtr}>
        <img
          src={data?.photoURL ? data?.photoURL : sampleImageUrl}
          alt={data.name}
        />
        <span className={s.breed}>{data.breed}</span>
      </div>
      <div className={s.detCtr}>
        <span>{data.name}</span>
        <span>{data.city}</span>
      </div>
    </div>
  );
};

export default DoggoCard;
