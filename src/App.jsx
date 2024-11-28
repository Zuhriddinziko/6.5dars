import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./componons/navbar/Navbar";
import Footer from "./componons/footer/Footer";
import UserList from "./componons/userList/UserList";
import NewUserFrom from "./newUserFrom/NewUserFrom";

function App() {
  const [user, setUser] = useState([]);
  const [newUser, setNewUser] = useState(false);

  const addUser = (us) => {
    setUser((prev) => {
      return [...prev, us];
    });
    setNewUser(false);
  };
  // deleteUser
  const deleteUser = (id) => {
    setUser((prev) => {
      return prev.filter((us) => {
        return us.id !== id;
      });
    });
  };
  const goWent = () => {
    return setNewUser(true);
  };
  const close = (e) => {
    if (e.target.className === "newForm") {
      setNewUser(false);
    }
  };
  const closes = () => {
    return setNewUser(false);
  };
  return (
    <>
      <div className="user">
        <Navbar close={closes} userLength={user.length} />

        <main className="main">
          <UserList user={user} deleteUser={deleteUser} />
          {newUser && <NewUserFrom close={closes} addUser={addUser} />}
          <div onClick={closes} className="no_user">
            {user.length === 0 && (
              <h2 onClick={closes} className="big">
                No Users
              </h2>
            )}
          </div>
        </main>
        <button onClick={goWent} className="btn">
          neW User
        </button>
        <Footer />
      </div>
    </>
  );
}

export default App;
