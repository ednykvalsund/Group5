import React from "react";
import Steppers from "../Progress2";
import Card from "../Card";
import SimpleTextField from "../InputTextRow";
import ItemCard from "../ItemCard";
import IconButtons from "../IconButtons";
import TextButton from "../TextButton";
import { useState, useContext, useEffect } from "react";
//import ExcursionContext from "../../ExcursionContext";
import { postDuty, getDuties } from "../../data";

function AddDuties(props) {
  //const [currentExcursionId, setcurrentExcursionId] = useState(localStorage.getItem("currentExcursionId"));

  //https://javascript.plainenglish.io/how-to-make-the-useeffect-hook-not-run-on-initial-render-e42bc3389724#:~:text=We%20can%20make%20the%20useEffect,set%20the%20variable%20to%20false%20.
  //const { excursionContext } = useContext(ExcursionContext);
  //const currentExcursionId = localStorage.getItem("currentExcursionId");
  const currentExcursionId = localStorage.getItem("currentExcursionId");
  const [DutyList, setDutyList] = useState([]);
  const [count, setCount] = useState(0);
  var ExcursionPointer = {
    __type: "Pointer",
    className: "Excursion",
    objectId: currentExcursionId,
  };
  useEffect(() => {
    //setcurrentExcursionId(localStorage.getItem("currentExcursionId"));
    getDuties(currentExcursionId, setDutyList);
    // console.log("An excursion context:", excursionContext);
    //Renders duties connected with current context upon load. Corresponds to the lifecycle-method: componentDidMount(). The second param [] ensures it only runs once upon load, otherwise it keeps running and we will get a parse-error from back4app
  }, [setDutyList]);
  //  }, [currentExcursionId, count]);

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  async function SaveDuty(e) {
    console.log("Goes in");
    postDuty(value, ExcursionPointer, setValue);
    setCount(count + 1);
    //Duties();
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
