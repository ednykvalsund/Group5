import React from "react";
import TextButton from "../TextButton";

function OrganizePage() {
  return (
    <>
      <div className="page-container">
        <div className="center-container">
          <h1 className="page-title">Lets plan!</h1>
          <h2>Do you want to create or maintain?</h2>
          <TextButton
            btnSwitch="dNav"
            className="green-button"
            label="Create"
            link="/create-excursion"
          />
          <TextButton
            btnSwitch="Nav"
            className="green-button"
            label="Maintain"
            link="/assign-duties"
          />
        </div>
      </div>
    </>
  );
}

export default OrganizePage;
