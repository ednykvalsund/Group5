import React from "react";
import Steppers from "../Progress2";
import Card from "../Card";
import SimpleTextField from "../InputTextRow";
import ItemCard from "../ItemCard";
import IconButtons from "../IconButtons";
import TextButton from "../TextButton";

function AddDuties(props) {
  const duties = ["Duty 1", "Duty 2"];
  return (
    <>
      <div className="page-container">
        <h1 className="page-title">{props.title}</h1>
        <div className="card-container-add-duties">
          <Card>
            <div className="card-textfields-container">
              <SimpleTextField title="Test">
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
      <TextButton label="Next" className="green-button-right" link="/shopping-list" />
    </>
  );
}

export default AddDuties;
