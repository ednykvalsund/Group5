import React from "react";

import TextButton from "../TextButton";

function Welcome() {
  return (
    <>
      <div className="page-container">
        <div className="center-container">
          <h1 className="page-title">Welcome!</h1>
          <h2>Who would you like to enter as?</h2>
          <TextButton className="green-button" label="Organisator" />
          <TextButton className="green-button" label="Participant" />
        </div>
      </div>
    </>
  );
}

export default Welcome;
