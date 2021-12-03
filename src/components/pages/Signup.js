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
  // const [firstNameExtra, setFirstNameExtra] = useState("");
  // const handleChangeExtraName = (e) => {
  //   setFirstNameExtra(e.target.value);
  // };

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
      setTimeout(1000);
      fetchMemberId();
    } catch (error) {
      console.log("Error caught: ", error);
    }
    //console.log("Get past event");
  }

  async function saveExtra() {
    try {
      console.log(memberId);
      const Participant = Parse.Object.extend("Participant");
      const thisParticipant = new Participant();
      thisParticipant.set("firstName", firstName);
      thisParticipant.set("ageGroup", ageGroup);
      thisParticipant.set("memberId", participantPointer);
      await thisParticipant.save();
    } catch (error) {
      console.log("Error caught: ", error);
    }
  }

  const [memberId, setMemberId] = useState("");
  async function fetchMemberId() {
    try {
      console.log("Goes in");
      const query = new Parse.Query("Participant");
      query.contains("firstName", firstName);
      const queryResult = await query.find();
      const currentPerson = queryResult[0];
      const memId = currentPerson.id;
      setMemberId(memId);
      //setMemberId(queryResult.get("objectId"));
    } catch (error) {
      printError(error);
    }
  }

  var participantPointer = {
    __type: "Pointer",
    className: "Participant",
    objectId: memberId,
  };

  // export async function getDuties(c){
  // // Reading parse objects is done by using Parse.Query
  // const parseQuery = new Parse.Query("Duty");
  // parseQuery.contains("excursionID", c);
  // try {
  //   let duties = await parseQuery.find();
  //   // Be aware that empty or invalid queries return as an empty array
  //   // Set results to state variable

  //   return duties;
  // } catch (error) {
  //   // Error can be caused by lack of Internet connection
  //   alert(error);
  //   return false;
  // }
  // }

  function printError(err) {
    console.log("Error caught: ", err);
  }

  const [participant, setParticipant] = useState("Member");
  const [drive, setDrive] = useState("Register car");

  function memberOrExtra() {
    if (participant === "Member") {
      return (
        <>
          <SimpleTextField title="Name" onChange={handleChangeName} />
          <SimpleTextField title="Email" onChange={handleChangeEmail} />
          <SimpleTextField title="Phone" onChange={handleChangePhoneNumber} />
          <SimpleTextField title="Work phone" onChange={handleChangeWorkP} />
          <SimpleTextField title="Address" onChange={handleChangeAddress} />
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
