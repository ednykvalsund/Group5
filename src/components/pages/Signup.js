import React, { useState, useContext } from "react";
import BasicSelect from "../InputDropRow";
import SimpleTextField from "../InputTextRow";
import Card from "../Card";
import RadioButtons from "../RadioButtons";
import UserCard from "../UserCard";
import TextButton from "../TextButton";
import Parse from "parse";
import ExcursionContext from "../../ExcursionContext";

function Signup(props) {
  //const { excursionContext } = useContext(ExcursionContext);
  const [firstName, setFirstName] = useState("");
  const handleChangeName = (e) => {
    setFirstName(e.target.value);
  };
  const [email, setEmail] = useState("");
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const [workPhoneNumber, setWorkPhoneNumber] = useState("");
  const handleChangeWorkPhoneNumber = (e) => {
    setWorkPhoneNumber(e.target.value);
  };
  const [address, setAddress] = useState("");
  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };
  const ageGroupOptions = ["Adult", "Teenager", "Child"];
  const [ageGroup, setAgeGroup] = useState("");
  const handleChangeAgeGroup = (e) => {
    setAgeGroup(e.target.value);
  };

  async function savePerson() {
    try {
      const Participant = Parse.Object.extend("Participant");
      const thisParticipant = new Participant();
      thisParticipant.set("firstName", firstName);
      thisParticipant.set("email", email);
      thisParticipant.set("phoneNumber", phoneNumber);
      thisParticipant.set("workPhoneNumber", workPhoneNumber);
      thisParticipant.set("address", address);
      thisParticipant.set("ageGroup", ageGroup);
      //console.log("Get post event");
      await thisParticipant.save();
    } catch (error) {
      console.log("Error caught: ", error);
    }
    //console.log("Get past event");
  }
  /*
          <SimpleTextField title="Email" />
          <SimpleTextField title="Phone" />
          <SimpleTextField title="Work phone" />
          <SimpleTextField title="Address" />*/

  /*

  export async function postExcursion(e, destination, year, context) {
  const Excursion = Parse.Object.extend("Excursion");
  const thisExcursion = new Excursion();
  thisExcursion.set("Destination", destination);
  thisExcursion.set("Year", year);
  e.preventDefault();
  console.log("prevented default");
  try {
    const savedObject = await thisExcursion.save();
    context(savedObject.id); //We successfully sets the context to be the newly created excursion id
  } catch (error) {
    alert(error);
  }
}
  */

  const [participant, setParticipant] = useState("Member");
  const [drive, setDrive] = useState("Register car");
  function memberOrExtra() {
    if (participant === "Member") {
      return (
        <>
          <SimpleTextField title="Email" onChange={handleChangeEmail} />
          <SimpleTextField title="Phone" onChange={handleChangePhoneNumber} />
          <SimpleTextField
            title="Work phone"
            onChange={handleChangeWorkPhoneNumber}
          />
          <SimpleTextField title="Address" onChange={handleChangeAddress} />
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
      return (
        <BasicSelect
          title="Leaves from"
          options={["Address 1", "Address 2", "Address 3"]}
        />
      );
    }
  }

  //console.log(participant);
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
              <SimpleTextField title="Name" onChange={handleChangeName} />
              {memberOrExtra()}
              <BasicSelect
                title="Age group"
                options={ageGroupOptions}
                value={ageGroup}
                handleChange={handleChangeAgeGroup}
              />
            </div>
            <TextButton
              label="Save"
              className="green-button"
              btnSwitch="Handle"
              handleClick={() => savePerson()}
            />
          </Card>
          <Card id="0" headline="Add drive">
            <RadioButtons
              value={drive}
              onChange={(e) => setDrive(e.target.value)}
              label1="Register car"
              label2="Reserve seat"
            />
            <div className="card-textfields-container">{carOrSeat()}</div>
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
      <button onClick={() => savePerson()}>Press me</button>
    </div>
  );
}

export default Signup;
