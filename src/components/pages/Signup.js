import React, { useState, setState} from "react";
import BasicSelect from "../InputDropRow";
import SimpleTextField from "../InputTextRow";
import Card from "../Card";
import RadioButtons from "../RadioButtons";
import UserCard from "../UserCard";
import TextButton from "../TextButton";

function Signup(props) {
  const [participant, setParticipant] = useState("Member");
  const [drive, setDrive] = useState("Register car");
  function memberOrExtra() {
    if (participant === "Member") {
      return (
        <>
          <SimpleTextField title="Email" />
          <SimpleTextField title="Phone" />
          <SimpleTextField title="Work phone" />
          <SimpleTextField title="Address" />
        </>
      );
    } else {
      return <></>;
    }
  }

  function carOrSeat() {
    if (drive === "Register car") {
      return (
        <>
          <SimpleTextField title="Registration number" />
          <div className="inline-forms">
            <BasicSelect
              title="Color"
              options={[
                "White",
                "Black",
                "Grey",
                "Red",
                "Yellow",
                "Orange",
                "Blue",
                "Green",
                "Purple",
              ]}
            />
            <SimpleTextField title="Free seats" />
          </div>
          <SimpleTextField title="Leaves from" />
        </>
      );
    } else {
      return(
      <BasicSelect
        title="Leaves from"
        options={["Address 1", "Address 2", "Address 3"]}
      />);
    }
  }

  console.log(participant);
  return (
    <div className="page-container">
      <h1 className="page-title">{props.title}</h1>
      <div className="card-container">
        <div className="flex-container">
          <Card id="0" headline="Add person">
            <RadioButtons
              value={participant}
              onChange={(e) => setParticipant(e.target.value)}
              label1="Member"
              label2="Extra"
            />
            <div className="card-textfields-container">
              <SimpleTextField title="Name" />
              {memberOrExtra()}
              <BasicSelect
                title="Age group"
                options={["Adult", "Teenager", "Child"]}
              />
            </div>
            <TextButton label="Save" className="green-button" />
          </Card>
          <Card id="0" headline="Add drive">
            <RadioButtons
              value={drive}
              onChange={(e) => setDrive(e.target.value)}
              label1="Register car"
              label2="Reserve seat"
            />
            <div className="card-textfields-container">
            {carOrSeat()}
            </div>
            <TextButton label="Add" className="green-button" />
          </Card>
          <Card id="0" headline="Registered">
            <div className="card-textfields-container">
              <div className="flex-container">
                <UserCard name="John" />
                <UserCard name="John" />
                <UserCard name="John" />
              </div>
            </div>
          </Card>
        </div>
      </div>
      <TextButton label="Sign up" className="green-button-right" link="/done" />
    </div>
  );
}

export default Signup;
