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
  //console.log(currentExcursionId);
  //const { excursionContext } = useContext(ExcursionContext);
  const [DutyList, setDutyList] = useState([]);
  const [ParticipantList, setParticipantList] = useState([]);

  useEffect(() => {
    getDuties(currentExcursionId, setDutyList);
    getParticipants(currentExcursionId, setParticipantList);
    //Renders duties connected with current context upon load. Corresponds to the lifecycle-method: componentDidMount(). The second param [] ensures it only runs once upon load, otherwise it keeps running and we will get a parse-error from back4app
  }, [currentExcursionId]);

  const [selectResponsible, setSelectResponsible] = useState("");
  const handleSelectResponsible = (e) => {
    setSelectResponsible(e.target.value);
    console.log("Goes in");
    
  };

  const [selectAssign, setSelectAssign] = useState("");
  const handleSelectAssign = (e) => {
    setSelectAssign(e.target.value);
    console.log("Goes in");
  };

  return (
    <div className="page-container">
      <h1 className="page-title">{props.title}</h1>
      <div className="card-container">
        <Card>
          <div className="card-textfields-container">
            {DutyList.map((duty) => (
              <ItemCard id={duty.get("objectId")} item={duty.get("title")}>
                <BasicSelect //We need to fix such that if there is multiple duties, you can select a different 'responsible' participant for each duty
                  title="Responsible"
                  options={ParticipantList.map((name) => name.get("firstName"))}
                  //handleChange={handleSelectResponsible}
                 // value={selectResponsible}
                />
                <MultiSelect
                  title="Assign"
                  options={ParticipantList.map((name) => name.get("firstName"))}
                  //handleChange={handleSelectAssign}
                 // value={selectAssign}
                />
              </ItemCard>
            ))}
          </div>
        </Card>
        <TextButton
          btnSwitch="Nav"
          label="Next"
          className="green-button-right"
          link="/done"
        />
      </div>
    </div>
  );
}

export default AssignDuties;
