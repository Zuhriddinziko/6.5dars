import React, { useState } from "react";
import "./App.css";
import Navbar from "./componons/navbar/navbar";
import Footer from "./componons/footer/footer";
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
    if (e.target.className === "user") setNewUser(false);
    console.log(e);
  };
  return (
    <>
      <div onClick={close} className="user">
        <Navbar userLength={user.length} />
        <main className="main">
          <div className="mains">{user.length == 0 && <h2>No Users</h2>}</div>
          <UserList user={user} deleteUser={deleteUser} />
          <button onClick={goWent}>neW User</button>
        </main>

        {newUser && <NewUserFrom addUser={addUser} />}
        <Footer />
      </div>
    </>
  );
}

export default App;
