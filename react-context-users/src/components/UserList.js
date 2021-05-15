import React, { useEffect, useContext } from "react";
import UserContext from "../context/user/UserContext";

function UserList(props) {
  const { getUsers, users, getProfile } = useContext(UserContext);

  useEffect(() => {
    getUsers();
    //getProfile(1);
  }, [getUsers]);
  return (
    <div>
      <ul className="list-group h-100">
        {users.map((user) => (
          <a href="#1" key={user.id} className="list-group-item list-group-item-action d-flex flex-row justify-content-start" onClick={() => getProfile(user.id)}>
            <img src={user.avatar} className="img-fluid ms-4 rounded-circle" alt="" width="70"/>
            <p>{`${user.first_name} ${user.last_name}`}</p>
        </a>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
