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
        <div className="flex-container">
          <Card id="0" headline="Assign duties"></Card>
          <Card id="0" headline="Assign duties"></Card>
          <Card id="0" headline="Assign duties"></Card>
        </div>
      </div>
    </>
  );
}

export default Welcome;
