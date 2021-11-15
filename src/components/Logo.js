import React from "react";
import logo from "../imagefiles/logo.png";

function Logo() {
  return (
    <div className="logo-container">
      <img src={logo} alt="Planpal logo" id="planpal-logo"></img>
    </div>
  );
}

export default Logo;
