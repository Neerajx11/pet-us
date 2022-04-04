import s from "./Hero.module.css";

import dog1 from "../assests/dogs/1.jpg";
import dog2 from "../assests/dogs/2.jpg";
import dog3 from "../assests/dogs/3.jpg";
import dog4 from "../assests/dogs/4.jpg";
import dog5 from "../assests/dogs/5.jpg";
import dog6 from "../assests/dogs/6.jpg";
import dog7 from "../assests/dogs/7.jpg";

import { Link } from "react-router-dom";
import { ArrowRight } from "react-feather";

const Hero = () => {
  return (
    <div className={s.main}>
      <div className={s.first}>
        <img className={s.circleS} src={dog1} alt="" />
        <img className={s.circleM} src={dog2} alt="" />
      </div>
      <div className={s.second}>
        <img className={`${s.circleL} ${s.disp}`} src={dog3} alt="" />
        <img className={`${s.circleS} ${s.disp}`} src={dog4} alt="" />
      </div>
      <div className={s.third}>
        <img className={s.circleM} src={dog5} alt="" />
        <img className={s.circleL} src={dog6} alt="" />
        <img className={s.circleM} src={dog7} alt="" />
      </div>
      <div className={s.center}>
        <p>
          Get your friend <span>Today</span>
        </p>
        <div className={s.centDown}>
          <Link to="/add" className={"btn btn-solid tsvg"}>
            <span>Put for adoption</span>
            <ArrowRight strokeWidth={2} size={19} />
          </Link>
          <Link to="/explore" className={"btn btn-trans tsvg"}>
            <span>Adopt a doggo</span>
            <ArrowRight strokeWidth={2} size={19} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
