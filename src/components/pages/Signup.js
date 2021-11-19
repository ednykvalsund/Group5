import React from "react";
import BasicSelect from "../InputDropRow";
import SimpleTextField from "../InputTextRow";
import Card from "../Card";
import RadioButtons from "../RadioButtons";
import UserCard from "../UserCard";
import IconButton from "../IconButtons";
import TextButton from "../TextButton";

function Signup(props) {
  return (
    <div className="page-container">
      <h1 className="page-title">{props.title}</h1>
      <div className="card-container">
        <div className="flex-container">
          <Card id="0" headline="Add person">
            <RadioButtons label1="Member" label2="Extra" />
            <div className="card-textfields-container">
              <SimpleTextField title="Name" />
              <SimpleTextField title="Email" />
              <SimpleTextField title="Phone" />
              <SimpleTextField title="Work phone" />
              <SimpleTextField title="Address" />
              <BasicSelect
                title="Age group"
                options={["Adult", "Teenager", "Child"]}
              />
            </div>
            <TextButton label="Save" className="green-button" />
          </Card>
          <Card id="0" headline="Add drive">
            <RadioButtons label1="Register car" label2="Reserve seat" />
            <SimpleTextField title="Registration number"/>
            <div className="inline-forms">
            <BasicSelect title="Color" options={["White", "Black", "Grey", "Red", "Yellow", "Orange", "Blue", "Green", "Purple"]}/>
            <SimpleTextField title="Free seats"/>
            </div>
            <SimpleTextField title="Leaves from"/>
            <TextButton label="Add" className="green-button"/>
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
    </div>
  );
}

export default Signup;
