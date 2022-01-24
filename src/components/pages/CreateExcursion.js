import React from "react";
import Card from "../Card";
import BasicSelect from "../InputDropRow";
import SimpleTextField from "../InputTextRow";
import TextButton from "../TextButton";
import Steppers from "../Progress2";
import { useState } from "react";
import { postExcursion } from "../../data";

function CreateExcursion(props) {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const currentYear = new Date().getFullYear();
  const years = [];
  for (var i = currentYear; i <= currentYear + 4; i++) {
    years.push(i);
  }

  const [year, setYear] = useState(0);
  const handleYear = (e) => {
    setYear(e.target.value);
  };

  async function SaveExcursion(e) {
    if (value !== "" && year !== 0) {
      return postExcursion(e, value, year);
    } else {
      alert("Please fill out both destination and year");
    }
  }

  return (
    <div className="page-container">
      <h1 className="page-title">{props.title}</h1>
      <div className="card-container">
        <Card>
          <SimpleTextField
            title="Destination"
            value={value}
            onChange={handleChange}
          />

          <BasicSelect
            title="Year"
            options={years}
            value={year}
            handleChange={handleYear}
          />
          <TextButton
            className="green-button"
            label="Next"
            handleClick={SaveExcursion}
            link="/add-duties"
            btnSwitch="HandleAndNav"
          ></TextButton>
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
