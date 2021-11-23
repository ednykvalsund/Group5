import React from "react";
import Card from "../Card";
import BasicSelect from "../InputDropRow";
import SimpleTextField from "../InputTextRow";
import TextButton from "../TextButton";
import Steppers from "../Progress2";
import { useState} from 'react'; 
import Parse from "parse";

function CreateExcursion(props) {
  
  const [value, setValue] = useState("");
  const handleChange = e => {
    setValue(e.target.value);
  }

  const Excursion = Parse.Object.extend("Excursion");
  const thisExcursion = new Excursion();

  async function SaveExcursion(e){
    thisExcursion.set("Destination", value);
    thisExcursion.set("Year", Number(document.getElementById("Year").textContent));
    e.preventDefault();
    console.log("prevented default");
    try {
      const savedObject = await thisExcursion.save();
      alert("succes");
    } catch (error) {
      alert(error);
    }
  };

  


  function logInfo(){
    console.log(value);
    console.log(document.getElementById("Year").textContent)
  };


  return (
    <div className="page-container">
      <h1 className="page-title">{props.title}</h1>
      <div className="card-container">
        <Card>
          <SimpleTextField id = "Destination" title="Destination" 
          value = {value}
          onChange = {handleChange}
           />

          <BasicSelect
            title="Year"
            options={["2021", "2022", "2023", "2024"]}
          />
          <TextButton className="green-button" handleClick={SaveExcursion} label="Next" link="/add-duties"/>
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
