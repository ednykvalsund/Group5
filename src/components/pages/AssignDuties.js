import React from "react";
import Card from "../Card";
import ItemCard from "../ItemCard";
import MultiSelect from "../InputDropMultiRow";
import TextButton from "../TextButton";
import { useState, useEffect } from "react";
import BasicSelect from "../InputDropRow";
import { getDuties, getParticipants } from "../../data";

function AssignDuties(props) {
  const currentExcursionId = localStorage.getItem("currentExcursionId");
  const [DutyList, setDutyList] = useState([]);
  const [ParticipantList, setParticipantList] = useState([]);

  useEffect(() => {
    getDuties(currentExcursionId, setDutyList);
    getParticipants(currentExcursionId, setParticipantList);
  }, [currentExcursionId]);

  const [selectResponsible, setSelectResponsible] = useState("");
  const handleSelectResponsible = (e) => {
    setSelectResponsible(e.target.value);
  };

  const [selectAssign, setSelectAssign] = useState("");
  const handleSelectAssign = (e) => {
    setSelectAssign(e.target.value);
  };

  return (
    <div className="page-container">
      <h1 className="page-title">{props.title}</h1>
      <div className="card-container">
        <Card>
          <div className="card-textfields-container">
            {DutyList.map((duty) => (
              <ItemCard key={duty.id} id={duty.id} item={duty.get("title")}>
                <BasicSelect
                  title="Responsible"
                  options={ParticipantList.map((name) => name.get("name"))}
                  handleChange={handleSelectResponsible}
                />
                <MultiSelect
                  title="Assign"
                  options={ParticipantList.map((name) => name.get("name"))}
                  handleChange={handleSelectAssign}
                />
              </ItemCard>
            ))}
          </div>
        </Card>
        <TextButton
          btnSwitch="Nav"
          label="Next"
          className="green-button-right"
          link="/shopping-list"
        />
      </div>
    </div>
  );
}

export default AssignDuties;
