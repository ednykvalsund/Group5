import React from "react";
import Card from "./Card";
import BasicSelect from "./InputDropRow";
import SimpleTextField from "./InputTextRow";
import TextButton from "./TextButton";

function CreateExcursion() {
  return (
    <div className="Create-excursion-component">
      <h1>Create excursion component</h1>
      <Card>
        <SimpleTextField title="Destination"/>
        <BasicSelect title="Year" options={["2021", "2022", "2023", "2024"]}/>
        <TextButton id="green-button" label="Next"/>
      </Card>
    </div>
  );
}

export default CreateExcursion;
