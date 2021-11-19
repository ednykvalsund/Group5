import React from "react";

import TextButton from "../TextButton";


function Welcome() {
  return (
    <>
      <div className="Welcome-component">
        <div className="center-container">
        <h1>Welcome!</h1>
        <h2>Who would you like to enter as?</h2>
        
        <TextButton className="green-button" label="Organisator" />
        <TextButton className="green-button" label="Participant" />
      </div>
      </div>
    </>
  );
}

export default Welcome;
