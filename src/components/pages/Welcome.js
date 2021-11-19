import React from "react";
import RadioButtons from "../RadioButtons";
import TextButton from "../TextButton";
import InputDropRow from "../InputDropRow";
import UserCard from "../UserCard";
import Card from "../Card";
import Logo from "../Logo";

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
