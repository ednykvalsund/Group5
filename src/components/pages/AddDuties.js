import React from "react";
import Steppers from "../Progress2";
import Card from "../Card";
import SimpleTextField from "../InputTextRow";
import ItemCard from "../ItemCard";
import IconButtons from "../IconButtons";
import TextButton from "../TextButton";
import { useState, useEffect } from "react";
import { postDuty, getDuties } from "../../data";

function AddDuties(props) {
  const currentExcursionId = localStorage.getItem("currentExcursionId");
  const [DutyList, setDutyList] = useState([]);
  const [count, setCount] = useState(0);

  var ExcursionPointer = {
    __type: "Pointer",
    className: "Excursion",
    objectId: currentExcursionId,
  };

  useEffect(() => {
    getDuties(currentExcursionId, setDutyList);
  }, [setDutyList]);

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  async function SaveDuty(e) {
    postDuty(value, ExcursionPointer, setValue);
    setCount(count + 1);
    getDuties(currentExcursionId, setDutyList);
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
