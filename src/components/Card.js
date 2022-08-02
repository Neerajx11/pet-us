import React from "react";
import { useNavigate } from "react-router-dom";

import { Book, MapPin } from "react-feather";

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

// const sampleImageUrl =
//   "https://thumbs.dreamstime.com/z/dog-logo-design-vector-template-icon-153847249.jpg";

const Card = ({ data }) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/doggo/${data.uid}`);
  };
  return (
    <div
      onClick={clickHandler}
      className="max-w-[320px] hover:scale-105 transition-transform duration-200 ease-linear my-8 mx-16 min-w-[320px] shadow-lg rounded-md relative overflow-hidden h-[410px] p-4 cursor-pointer"
    >
      <img
        src={data.photoURL}
        className="object-cover rounded-md h-64 shadow-sm w-[288px]"
        alt={`${data.name} profile`}
      />
      <p className="mt-6 mb-4 text-xl font-bold tracking-wider capitalize text-primary">
        {data.name}
      </p>
      <div className="flex justify-between space-x-4 text-bgprimary">
        <div className="flex items-center space-x-1">
          <Book className="w-[18px] h-[18px]" />
          <span className="font-bold tracking-wide capitalize">
            {data.breed}
          </span>
        </div>
        <div className="flex items-center space-x-1">
          <MapPin className="w-[18px] h-[18px]" />
          <span className="font-bold tracking-wide capitalize text-bgprimary">
            {data.city}
          </span>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-4 bg bg-primary"></div>
    </div>
  );
};

export default Card;
