import React from "react";
import "./UserList.css";

function UserList({ user, deleteUser }) {
  return (
    <div className="userList">
      <div className="userList_cotainer container">
        {user.map((us) => {
          return (
            <div className="card" key={us.id}>
              <img src={us.image} alt={us.name} height={150} width={150} />
              <h3>
                {us.firstname} {us.lastname}
              </h3>
              <p>Age: {us.age}.</p>
              <p>
                From:
                {us.from}
              </p>
              <p>Job:{us.job}</p>
              <p>Gender:{us.gender}</p>
              <button onClick={() => deleteUser(us.id)}>delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserList;
