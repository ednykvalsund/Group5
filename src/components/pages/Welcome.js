import React from "react";

import TextButton from "../TextButton";

function Welcome() {
  return (
    <>
      <div className="page-container">
        <div className="center-container">
          <h1 className="page-title">Welcome!</h1>
          <h2>Who would you like to enter as?</h2>
          <TextButton
            btnSwitch="Nav"
            className="green-button"
            label="Organisator"
            link="/organisator"
          />
          <TextButton
            btnSwitch="Nav"
            className="green-button"
            label="Participant"
            link="/sign-up"
          />
        </div>
      </div>
    </>
  );
}

export default Welcome;
