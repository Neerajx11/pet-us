import CardCtr from "./CardCtr";
import s from "./Explore.module.css";
/*
name string
breed string
description string
isVaccinated [0,1,2]
timestamp
city string
ownerId [photoURL, name]
contactDetail : [face:, isnta, phone, mail]
dog id => detail page
photoUrl : string

*/

const Explore = () => {
  return (
    <div className={s.main}>
      <p className={"head"}>Explore</p>
      <CardCtr str="doggo" />
    </div>
  );
};

export default Explore;
