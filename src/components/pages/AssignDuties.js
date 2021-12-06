import React from "react";
import Card from "../Card";
import ItemCard from "../ItemCard";
import MultiSelect from "../InputDropMultiRow";
import TextButton from "../TextButton";
import { useState, useContext, useEffect } from "react";
import ExcursionContext from "../../ExcursionContext";
import Parse from "parse";
import BasicSelect from "../InputDropRow";
import { getDuties } from "../../data";

function AssignDuties(props) {
  const options = ["test 1", "test 2"];
  const { excursionContext } = useContext(ExcursionContext);
  const [DutyList, setDutyList] = useState([]);
  const [ParticipantList, setParticipantList] = useState([]);

  useEffect(() => {
    getDuties(excursionContext, setDutyList);
    readParticipants();
    // console.log("An excursion context:", excursionContext);
    //Renders duties connected with current context upon load. Corresponds to the lifecycle-method: componentDidMount(). The second param [] ensures it only runs once upon load, otherwise it keeps running and we will get a parse-error from back4app
  }, []);

  const [names, setNames] = useState([]);

  const readParticipants = async function () {
    // Reading parse objects is done by using Parse.Query
    if (excursionContext) {
      try {
        const parseQuery = new Parse.Query("Duty");
        parseQuery.contains("excursionId", excursionContext);
        // console.log("This", excursionContext);

        let duties = await parseQuery.find();

        // Be aware that empty or invalid queries return as an empty array
        // Set results to state variable
        setParticipantList(duties);
        {
          ParticipantList.map((name) =>
            setNames((prevState) => [...prevState, name.get("title")])
          );
        }
        console.log("2:", names);

        return true;
      } catch (error) {
        // Error can be caused by lack of Internet connection
        alert(error);
        return false;
      }
    } else {
    }
  };

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
                  options={names}
                  handleChange={handleSelect}
                  value={select}
                />
                <MultiSelect
                  title="Assign"
                  options={names}
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
