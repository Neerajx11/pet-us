import React, { useEffect, useState } from "react";
import {
  Activity,
  Clock,
  Facebook,
  Gitlab,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "react-feather";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteDoggo, getSingleDocument } from "../helpers/firebaseManger";
import Button from "./Button";

import Loader from "./Loader";
import Template from "./Template";

const DoggoDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchData = async () => {
      const docSnap = await getSingleDocument("doggo", id);
      setData(docSnap);
    };
    fetchData();
  }, [id]);

  const navigate = useNavigate();
  const clickHandler = async () => {
    await deleteDoggo(id);
    navigate("/explore", { replace: true });
  };

  if (!data) {
    return <Loader />;
  }

  return (
    <Template head="Doggo" sub="Detail">
      <div className="pt-[50px] pb-[80px]  my-6 lg:my-8">
        {/* upper */}
        <div className="flex flex-col items-center lg:flex-row">
          {/* left */}
          <div className="w-full md:w-4/12 flex flex-col justify-center lg:block ml-0 lg:ml-[60px] xl:ml-[120px]">
            <img
              className="w-[250px] h-[250px] mx-auto lg:mx-0 object-cover rounded-lg overflow-hidden"
              src={data.photoURL}
              alt={data.name}
            />
            <div className="mx-auto lg:mx-0 w-max">
              <div className="mt-8 font-bold text-md text-primary">
                Posted by:
              </div>
              <div className="flex items-center mt-5 font-semibold tracking-wide">
                <img
                  src={data.owner.photoURL}
                  className="w-[50px] h-auto rounded-full"
                  alt="dog owner"
                />
                <span className="ml-6">{data.owner.name}</span>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-full px-8 mt-10 lg:px-0 lg:ml-0 md:w-8/12 lg:mr-12 lg:mt-0">
            <p className="text-primary text-[40px] font-semibold border-b-4 border-solid border-bgprimary w-full">
              {data.name}
            </p>
            {/* icons */}
            <div className="mt-8 space-y-6 text-lg font-semibold text-bgprimary">
              <div className="flex items-center cursor-pointer" title="Breed">
                <Gitlab className="w-5 h-5 mr-8" />
                <span>{data.breed}</span>
              </div>
              <div
                className="flex items-center cursor-pointer"
                title="Location"
              >
                <MapPin className="w-5 h-5 mr-8" />
                <span>{data.city}</span>
              </div>
              <div className="flex items-center cursor-pointer" title="Age">
                <Clock className="w-5 h-5 mr-8" />
                <span>
                  {data.age.year} year {data.age.month} months
                </span>
              </div>
              <div
                className="flex items-center cursor-pointer"
                title="Is dog vaccinated"
              >
                <Activity className="w-5 h-5 mr-8" />
                <span>{data.isVaccinated ? "Yes" : "No"}</span>
              </div>
            </div>
            <p className="mt-10 mb-4 font-bold text-md text-primary">
              Contact Details
            </p>
            <div className="flex space-x-12 text-bgprimary">
              {data.contactDetail?.phone && (
                <a href={`tel:+91${data.contactDetail.phone}`} rel="noreferrer">
                  <Phone className="w-5 h-5 cursor-pointer" />
                </a>
              )}
              {data.contactDetail?.instagram && (
                <a
                  href={`https://www.instagram.com/${data.contactDetail.instagram}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram className="w-5 h-5 cursor-pointer" />
                </a>
              )}
              {data.contactDetail?.facebook && (
                <a
                  href={`${data.contactDetail.facebook}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Facebook className="w-5 h-5 cursor-pointer" />
                </a>
              )}
              {data.contactDetail?.email && (
                <a href={`mailto:${data.contactDetail.email}`} rel="noreferrer">
                  <Mail className="w-5 h-5 cursor-pointer" />
                </a>
              )}
            </div>
          </div>
        </div>
        {/* delete */}
        {data.owner.id === user?.uid && (
          <div onClick={clickHandler} className="flex justify-center mt-24">
            <Button
              text="Delete"
              onClick={clickHandler}
              className="px-12 w-max"
            />
          </div>
        )}
      </div>
    </Template>
  );
};

export default DoggoDetail;
