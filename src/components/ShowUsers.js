import React, { useEffect, useState } from "react";
import { getAllUser } from "../helpers/firebaseManger";

const ShowUsers = () => {
  const [user, setUser] = useState([]);

  //get users
  useEffect(() => {
    const func = async () => {
      let res = await getAllUser();
      setUser(res);
    };
    func();
  }, []);

  const userList = user.map(({ name, uid }) => {
    return (
      <div id={uid}>
        <span>Name: {name}</span>
      </div>
    );
  });

  return (
    <div>
      <h2>Show Users</h2>
      {userList}
    </div>
  );
};
export default ShowUsers;
