import React, { useState, useEffect} from "react";
import BasicSelect from "../InputDropRow";
import SimpleTextField from "../InputTextRow";
import Card from "../Card";
import RadioButtons from "../RadioButtons";
import UserCard from "../UserCard";
import TextButton from "../TextButton";
import {
  postParticipant,
  fetchMemberId,
  postExtra,
  postCar,
  getCars,
  postPassenger,
} from "../../data";

function Signup(props) {
  const [color, setColor] = useState("");
  const handleChangeColor = (e) => {
    setColor(e.target.value);
  };

  const [seatsAvailable, setSeatsAvailable] = useState("");
  const handleChangeSeatsAvailable = (e) => {
    setSeatsAvailable(e.target.value);
  };

  const [leavesFrom, setLeavesFrom] = useState("");
  const handleChangeLeavesFrom = (e) => {
    setLeavesFrom(e.target.value);
  };

  const [registrationNumber, setRegistrationNumber] = useState("");
  const handleChangeRegistrationNumber = (e) => {
    setRegistrationNumber(e.target.value);
  };

  const [name, setName] = useState("");
  const handleChangeName = (e) => {
    setName(e.target.value);
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

  const [carList, setCarList] = useState([]);
  async function loadCars() {
    let options = await getCars(currentExcursionId);
    setCarList(options);
  }

  const [participantList, setParticipantList] = useState([]);
  useEffect(() => {
    setParticipantList(participantList);
    loadCars();
  }, [participantList, setCarList]);

  const [memberId, setMemberId] = useState("");

  async function savePerson() {
    postParticipant(
      name,
      email,
      phoneNumber,
      workPhoneNumber,
      address,
      ageGroup,
      excursionPointer,
      setParticipantList
    );

    setMemberId(await fetchMemberId(name));

    localStorage.setItem(
      "currentParticipantPointer",
      await fetchMemberId(name)
    );
    setName("");
    setEmail("");
    setPhoneNumber("");
    setWorkPhoneNumber("");
    setAddress("");
    setAgeGroup("");
  }

  function saveExtra() {
    if (memberId !== "") {
      postExtra(
        name,
        ageGroup,
        participantPointer,
        excursionPointer,
        setParticipantList
      );
    } else {
      alert("Please add a member before adding an extra participant");
    }
    setName("");
    setAgeGroup("");
  }

  async function saveCar() {
    postCar(
      registrationNumber,
      color,
      seatsAvailable,
      leavesFrom,
      participantPointer,
      excursionPointer
    );

    setRegistrationNumber("");
    setColor("");
    setSeatsAvailable("");
    setLeavesFrom("");
  }

  async function addPassenger() {
    postPassenger(select, participantSelect);
  }

  var currentParticipantPointer = localStorage.getItem(
    "currentParticipantPointer"
  );

  var participantPointer = {
    __type: "Pointer",
    className: "Participant",
    objectId: currentParticipantPointer,
  };

  const currentExcursionId = localStorage.getItem("currentExcursionId");
  var excursionPointer = {
    __type: "Pointer",
    className: "Excursion",
    objectId: currentExcursionId,
  };

  const [participant, setParticipant] = useState("Member");
  const [drive, setDrive] = useState("Register car");
  const [select, setSelect] = useState("");
  const [participantSelect, setParticipantSelect] = useState("");

  const handleSelect = (e) => {
    setSelect(e.target.value);
  };

  const handleParticipantSelect = (e) => {
    setParticipantSelect(e.target.value);
  };

  function memberOrExtra() {
    if (participant === "Member") {
      return (
        <>
          <SimpleTextField
            title="Name"
            onChange={handleChangeName}
            value={name}
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
          <SimpleTextField
            title="Name"
            onChange={handleChangeName}
            value={name}
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
          <SimpleTextField
            title="Registration number"
            onChange={handleChangeRegistrationNumber}
            value={registrationNumber}
          />
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
              handleChange={handleChangeColor}
            />
            <SimpleTextField
              title="Free seats"
              onChange={handleChangeSeatsAvailable}
              value={seatsAvailable}
            />
          </div>
          <SimpleTextField
            title="Leaves from"
            onChange={handleChangeLeavesFrom}
            value={leavesFrom}
          />
          <TextButton
            label="Add"
            className="green-button"
            btnSwitch="Handle"
            handleClick={() => saveCar()}
          />
        </>
      );
    } else {
      return (
        <>
          <BasicSelect
            title="Participant"
            value={participantSelect}
            options={participantList.map((element) => element.name)}
            handleChange={handleParticipantSelect}
          />
          <BasicSelect
            title="Leaves from"
            value={select}
            options={carList.map((element) => element.title)}
            handleChange={handleSelect}
          />
          <TextButton
            label="Add"
            className="green-button"
            btnSwitch="Handle"
            handleClick={() => addPassenger()}
          />
        </>
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
          </Card>
          <Card id="0" headline="Registered">
            <div className="card-textfields-container">
              <div className="flex-container">
                {participantList.map((participant) => (
                  <UserCard
                    name={participant.name}
                    userId={participant.id}
                    list={participantList}
                    setList={setParticipantList}
                  />
                ))}
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
