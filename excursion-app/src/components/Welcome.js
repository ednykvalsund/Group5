import React from "react";
import RadioButtons from "./RadioButtons";
import TextButton from "./TextButton";
import InputDropRow from "./InputDropRow";
import UserCard from "./UserCard";
import Card from "./Card";

function Welcome() {
  return (
    <>
      <div className="Welcome-component">
        <h1>Welcome component</h1>
        <TextButton id="green-button" label="Organisator"/>
        <TextButton id="green-button" label="Participant"/>

        <div className="flex-container">
          <Card id="0" headline="Assign duties">
            <p>Hellotest</p>
          </Card>
          <Card id="0">
            <p>Component with</p>
            <p>no headline. This</p>
            <p>is a just a child</p>
          </Card>
          <Card id="0" headline="Assign duties"></Card>
        </div>
      </div>
    </>
  );
}

export default Welcome;
