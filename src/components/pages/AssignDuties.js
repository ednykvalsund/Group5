import React from "react";
import Card from "../Card";
import ItemCard from "../ItemCard";
import MultiSelect from "../InputDropMultiRow";
import TextButton from "../TextButton";
import { useState, useContext, useEffect } from "react";
import ExcursionContext from "../../ExcursionContext";
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

  const [select, setSelect] = useState("");
  const handleSelect = (e) => {
    setSelect(e.target.value);
  };

  return (
    <div className="page-container">
      <h1 className="page-title">{props.title}</h1>
      <div className="card-container">
        <Card>
          <div className="card-textfields-container">
            {DutyList.map((duty) => (
              <ItemCard id={duty.get("objectId")} item={duty.get("title")}>
                <BasicSelect
                  title="Responsible"
                  options={ParticipantList.map((name) => name.get("title"))}
                  handleChange={handleSelect}
                  value={select}
                />
                <MultiSelect
                  title="Assign"
                  options={ParticipantList.map((name) => name.get("title"))}
                  handleChange={handleSelect}
                  value={select}
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
