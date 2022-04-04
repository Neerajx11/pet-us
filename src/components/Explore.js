import CardCtr from "./CardCtr";
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
    <div>
      <p className={"head"}>Explore</p>
      <CardCtr str="doggo" />
    </div>
  );
};

export default Explore;
