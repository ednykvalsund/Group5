import React from "react";
import Card from "../Card";
import BasicSelect from "../InputDropRow";
import SimpleTextField from "../InputTextRow";
import TextButton from "../TextButton";
import Steppers from "../Progress2";

function CreateExcursion(props) {
  return (
    <div className="page-container">
      <h1 className="page-title">{props.title}</h1>
      <div className="card-container">
        <Card>
          <SimpleTextField title="Destination" />
          <BasicSelect
            title="Year"
            options={["2021", "2022", "2023", "2024"]}
          />
          <TextButton className="green-button" label="Next" link="/add-duties"/>
        </Card>
        <Steppers
          steps={[
            "Create Excursion",
            "Create duties",
            "Create shopping list",
            "Done",
          ]}
          doneSteps={0}
        />
      </div>
    </div>
  );
}

export default CreateExcursion;
