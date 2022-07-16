import CardRender from "./CardRender";
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
    <div className="mt-4 rounded-md shadow-md">
      <div className="px-2 pt-4 border-b-4 border-solid border-primary">
        <p className="px-4 mb-2 text-2xl font-bold tracking-wide text-bgprimary">
          Available <span className="ml-1 text-primary">Doggo</span>{" "}
        </p>
      </div>
      <div className="flex flex-wrap justify-around my-8">
        <CardRender str="doggo" />
      </div>
    </div>
  );
};

export default Explore;
