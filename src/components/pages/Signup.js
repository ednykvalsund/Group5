import React from "react";
import BasicSelect from "../InputDropRow";
import SimpleTextField from "../InputTextRow";
import Card from "../Card";
import RadioButtons from "../RadioButtons";
import UserCard from "../UserCard";
import IconButton from "../IconButtons";
import TextButton from "../TextButton";

function Signup() {
  return (
    <div className="Signup-page">
      <h1>Signup component</h1>
      <div className="flex-container">
        <Card id="0" headline="Add person">
          <RadioButtons label1="Member" label2="Extra" />
          <SimpleTextField title="Name" />
          <SimpleTextField title="Email" />
          <SimpleTextField title="Phone" />
          <SimpleTextField title="Work phone" />
          <SimpleTextField title="Address" />
          <BasicSelect
            title="Age group"
            options={["Adult", "Teenager", "Child"]}
          />
          <TextButton label="Save" className="green-button"/>
        </Card>
        <Card id="0" headline="Add drive">
          <RadioButtons label1="Register car" label2="Reserve seat" />
        </Card>
        <Card id="0" headline="Registered">
          <div className="flex-container">
            <UserCard name="John" />
            <UserCard name="John" />
            <UserCard name="John" />
   

          </div>
        </Card>
      </div>
    </div>
  );
}

export default Signup;
