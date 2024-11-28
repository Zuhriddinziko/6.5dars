import React from "react";
import "./Navbar.css";
function Navbar({ userLength, close }) {
  return (
    <>
      <div onClick={close} className="navbar">
        <div className="navbar__container container">
          <h1 className="navbar_logo">CUser</h1>
          <h3 className="navbar__count">
            {userLength > 0 ? "You have: " + userLength : "No-users:("}
          </h3>
        </div>
      </div>
    </>
  );
}

export default Navbar;
