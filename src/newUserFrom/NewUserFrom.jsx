import "./NewUserFrom.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function NewUserFrom({ addUser }) {
  const [users, setUsers] = useState({
    id: uuidv4(),
    image: "",
    firstname: "",
    lastname: "",
    from: "",
    age: null,
    job: "",
    gender: "",
  });
  const hendleSubmit = (e) => {
    e.preventDefault();
    addUser(users);
  };
  return (
    <div className="newForm">
      <div className="newFormCard">
        <h2 className="newuser">Create New User </h2>
        <form onSubmit={hendleSubmit}>
          <label>
            <span>Image Url:</span>
            <input
              onChange={(e) => {
                setUsers((prev) => {
                  return { ...prev, image: e.target.value };
                });
              }}
              className="texte"
              type="url"
              required
            />
          </label>
          <label>
            <span>First Name</span>
            <input
              onChange={(e) => {
                setUsers((prev) => {
                  return { ...prev, firstname: e.target.value };
                });
              }}
              className="texte"
              type="text"
            />
          </label>
          <label>
            <span>Last Name</span>
            <input
              onChange={(e) => {
                setUsers((prev) => {
                  return { ...prev, lastname: e.target.value };
                });
              }}
              className="texte"
              type="text"
            />
          </label>
          <label>
            <span>From</span>
            <input
              onChange={(e) => {
                setUsers((prev) => {
                  return { ...prev, from: e.target.value };
                });
              }}
              className="texte"
              type="text"
            />
          </label>
          <label>
            <span>Age</span>
            <input
              onChange={(e) => {
                setUsers((prev) => {
                  return { ...prev, age: e.target.value };
                });
              }}
              className="texte"
              type="number"
            />
          </label>
          <label>
            <span>Job</span>
            <input
              onChange={(e) => {
                setUsers((prev) => {
                  return { ...prev, job: e.target.value };
                });
              }}
              className="texte"
              type="text"
            />
          </label>
          <div className="gender">
            <span>Gender: </span>
            <label className="male">
              <small>Male</small>
              <input
                onChange={(e) => {
                  setUsers((prev) => {
                    return { ...prev, gender: e.target.value };
                  });
                }}
                type="radio"
                name="gender"
                value="male"
              />
            </label>
            <label className="male">
              <small>Fomale</small>
              <input
                onChange={(e) => {
                  setUsers((prev) => {
                    return { ...prev, gender: e.target.value };
                  });
                }}
                type="radio"
                name="gender"
                value="fomale"
              />
            </label>
          </div>
          <button className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default NewUserFrom;
