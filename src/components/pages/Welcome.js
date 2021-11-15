import React from "react";
import RadioButtons from "../RadioButtons";
import TextButton from "../TextButton";
import InputDropRow from "../InputDropRow";
import UserCard from "../UserCard";
import Card from "../Card";

function Welcome() {
  return (
    <>
      <div className="Welcome-component">
        <h1>Welcome component</h1>
        <TextButton className="green-button" label="Organisator"/>
        <TextButton className="green-button" label="Participant"/>

   
   
      </div>
    </>
  );
}

export default Welcome;
