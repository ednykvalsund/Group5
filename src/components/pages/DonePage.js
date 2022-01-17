import React from "react";
import TextButton from "../TextButton";

function DonePage() {
  return (
    <div className="page-container">
      <h1 className="page-title">You're done!</h1>
      <TextButton
        label="Return to main page"
        className="green-button"
        link="/welcome"
      />
    </div>
  );
}

export default DonePage;
