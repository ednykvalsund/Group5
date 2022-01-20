import React from "react";
import Steppers from "../Progress2";
import Card from "../Card";
import SimpleTextField from "../InputTextRow";
import ItemCard from "../ItemCard";
import IconButtons from "../IconButtons";
import TextButton from "../TextButton";
import { useState, useEffect } from "react";
import { postDuty, getDuties } from "../../data";

//1. The add duties component
function AddDuties(props) {
  //2. We are fetching the...
  const currentExcursionId = localStorage.getItem("currentExcursionId");

  const [DutyList, setDutyList] = useState([]);
  const [count, setCount] = useState(0);

  //4. The way we are saving duties is first we need to grap the duty-title from the user input from the DOM...
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  //3. We do that because each duty has a pointer to an excursion as defined in our datamodel... when  we save a duty
  var ExcursionPointer = {
    __type: "Pointer",
    className: "Excursion",
    objectId: currentExcursionId,
  };

  //6. And the each time the count is updated
  useEffect(() => {
    getDuties(currentExcursionId, setDutyList);
  }, [currentExcursionId, count]);

  //5. Then we save the duty using...
  async function SaveDuty(e) {
    postDuty(value, ExcursionPointer, setValue);
    setCount(count + 1);
    //getDuties(currentExcursionId, setDutyList); //It sets the DutyList in the getDuties
  }

  return (
    <>
      <div className="page-container">
        <h1 className="page-title">{props.title}</h1>
        <div className="card-container-add-duties">
          <Card>
            <div className="card-textfields-container">
              <SimpleTextField
                title="Duty"
                value={value}
                onChange={handleChange}
              >
                <IconButtons add onClick={SaveDuty} />
              </SimpleTextField>

              {DutyList.map((duty) => (
                <ItemCard id={duty.get("objectId")} item={duty.get("title")} />
              ))}
            </div>
          </Card>
        </div>
        <br />
      </div>
      <div className="steppers-container">
        <Steppers
          steps={[
            "Create Excursion",
            "Create duties",
            "Create shopping list",
            "Done",
          ]}
          doneSteps={1}
        />
      </div>

      <TextButton
        btnSwitch="Nav"
        label="Next"
        className="green-button-right"
        link="/shopping-list"
      />
    </>
  );
}

export default AddDuties;
