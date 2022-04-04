import React, { useEffect, useState } from "react";
import { Facebook, Instagram, Mail, Phone } from "react-feather";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteDoggo, getSingleDocument } from "../helpers/firebaseManger";

import s from "./DoggoDetail.module.css";

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

  return (
    <div>
      <p className="head">Doggie Detail</p>
      {data && (
        <div className={s.main}>
          <div className={s.left}>
            <img src={data.photoURL} alt={data.name} />
            <div className={s.postTit}>Posted by :</div>
            <div className={s.owner}>
              <img src={data.owner.photoURL} alt="" />
              <span>{data.owner.name}</span>
            </div>
          </div>
          <div className={s.right}>
            <div className={s.field}>
              <span className={s.fTit}>Name :</span>
              <span className={s.fSec}>{data.name}</span>
            </div>
            <div className={s.field}>
              <span className={s.fTit}>Breed :</span>
              <span className={s.fSec}>{data.breed}</span>
            </div>
            <div className={s.field}>
              <span className={s.fTit}>Location :</span>
              <span className={s.fSec}>{data.city}</span>
            </div>
            <div className={s.field}>
              <span className={s.fTit}>Vaccinated :</span>
              <span className={s.fSec}>{data.isVaccinated ? "Yes" : "No"}</span>
            </div>
            <div className={s.contactDet}>
              <p>Contact Details :</p>
              <div className={s.conIcon}>
                {data.contactDetail?.phone && (
                  <a
                    href={`tel:+91${data.contactDetail.phone}`}
                    rel="noreferrer"
                  >
                    <Phone />
                  </a>
                )}
                {data.contactDetail?.instagram && (
                  <a
                    href={`https://www.instagram.com/${data.contactDetail.instagram}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Instagram />
                  </a>
                )}
                {data.contactDetail?.facebook && (
                  <a
                    href={`${data.contactDetail.facebook}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Facebook />
                  </a>
                )}
                {data.contactDetail?.email && (
                  <a
                    href={`mailto:${data.contactDetail.email}`}
                    rel="noreferrer"
                  >
                    <Mail />
                  </a>
                )}
              </div>
            </div>
            {data.owner.id === user?.uid && (
              <div
                className={`btn btn-solid ${s.delBtn}`}
                onClick={clickHandler}
              >
                Delete
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DoggoDetail;
