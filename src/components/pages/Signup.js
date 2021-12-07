import React, { useState, useContext } from "react";
import BasicSelect from "../InputDropRow";
import SimpleTextField from "../InputTextRow";
import Card from "../Card";
import RadioButtons from "../RadioButtons";
import UserCard from "../UserCard";
import TextButton from "../TextButton";
import Parse from "parse";
import { postParticipant, fetchMemberId, postExtra } from "../../data";

function Signup(props) {
  const [color, setColor] = useState("");
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
  const handleChangeWorkP = (e) => {
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

  const [memberId, setMemberId] = useState("");
  async function savePerson() {
    postParticipant(
      firstName,
      email,
      phoneNumber,
      workPhoneNumber,
      address,
      ageGroup,
      excursionPointer
    );

    setMemberId(await fetchMemberId(firstName));
    setFirstName("");
    setEmail("");
    setPhoneNumber("");
    setWorkPhoneNumber("");
    setAddress("");
    setAgeGroup("");
  }

  function saveExtra() {
    console.log(memberId);
    if (memberId !== "") {
      postExtra(firstName, ageGroup, participantPointer);
      console.log("Goes in");
    } else {
      alert("Please add a member before adding an extra participant");
    }
    setFirstName("");
    setAgeGroup("");
  }
  
  var participantPointer = {
    __type: "Pointer",
    className: "Participant",
    objectId: memberId,
  };

  var currentExcursionId = localStorage.getItem("currentExcursionId");
  var excursionPointer = {
    __type: "Pointer",
    className: "Excursion",
    objectId: currentExcursionId,
  };

  const [participant, setParticipant] = useState("Member");
  const [drive, setDrive] = useState("Register car");

  function memberOrExtra() {
    if (participant === "Member") {
      return (
        <>
          <SimpleTextField
            title="Name"
            onChange={handleChangeName}
            value={firstName}
          />
          <SimpleTextField
            title="Email"
            onChange={handleChangeEmail}
            value={email}
          />
          <SimpleTextField
            title="Phone"
            onChange={handleChangePhoneNumber}
            value={phoneNumber}
          />
          <SimpleTextField
            title="Work phone"
            onChange={handleChangeWorkP}
            value={workPhoneNumber}
          />
          <SimpleTextField
            title="Address"
            onChange={handleChangeAddress}
            value={address}
          />
          <BasicSelect
            title="Age group"
            options={ageGroupOptions}
            value={ageGroup}
            handleChange={handleChangeAgeGroup}
          />
          <TextButton
            label="Save"
            className="green-button"
            btnSwitch="Handle"
            handleClick={() => savePerson()}
          />
        </>
      );
    } else {
      return (
        <>
          <SimpleTextField title="Name" onChange={handleChangeName} />
          <BasicSelect
            title="Age group"
            options={ageGroupOptions}
            value={ageGroup}
            handleChange={handleChangeAgeGroup}
          />
          <TextButton
            label="Save"
            className="green-button"
            btnSwitch="Handle"
            handleClick={() => saveExtra()}
          />
        </>
      );
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
              value={color}
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
              handleChange={setColor}
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
            <div className="card-textfields-container">{memberOrExtra()}</div>
          </Card>
          <Card id="0" headline="Add drive">
            <RadioButtons
              value={drive}
              onChange={(e) => setDrive(e.target.value)}
              label1="Register car"
              label2="Reserve seat"
            />
            <div className="card-textfields-container">{carOrSeat()}</div>
            <TextButton
              btnSwitch="Handle"
              label="Add"
              className="green-button"
            />
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
      <TextButton
        btnSwitch="Nav"
        label="Sign up"
        className="green-button-right"
        link="/done"
      />
    </div>
  );
}

export default Signup;
