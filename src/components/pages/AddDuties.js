import React from "react";
import Steppers from "../Progress2";
import Card from "../Card";
import SimpleTextField from "../InputTextRow";
import ItemCard from "../ItemCard";
import IconButtons from "../IconButtons";
import TextButton from "../TextButton";
import Parse from "parse";
import { useState } from "react";

function AddDuties(props) {
  const duties = ["Duty 1", "Duty 2", "Duty 3"];

  const id = window.sessionStorage.getItem("id");
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  var ExcursionPointer = {
    __type: "Pointer",
    className: "Excursion",
    objectId: id,
  };

  const Duty = Parse.Object.extend("Duty");
  const thisDuty = new Duty();

  async function SaveDuty(e) {
    thisDuty.set("title", value);
    thisDuty.set("excursionID", ExcursionPointer);

    e.preventDefault();
    console.log("prevented default");
    try {
      const savedObject = await thisDuty.save();
      alert("succes");
      //window.location.href = '/shopping-list';
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <div className="page-container">
        <h1 className="page-title">{props.title}</h1>
        <div className="card-container-add-duties">
          <Card>
            <div className="card-textfields-container">
              <SimpleTextField
                title="Test"
                value={value}
                onChange={handleChange}
              >
                <IconButtons add />
              </SimpleTextField>

              {duties.map((duty) => (
                <ItemCard item={duty}></ItemCard>
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
        label="Next"
        className="green-button-right"
        handleClick={SaveDuty}
        link="/shopping-list"
      />
    </>
  );
}

export default AddDuties;
