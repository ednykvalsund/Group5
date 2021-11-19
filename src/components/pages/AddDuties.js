import React from "react";
import Steppers from "../Progress2";
import Card from  "../Card";
import SimpleTextField from "../InputTextRow";
import ItemCard from "../ItemCard";
import IconButtons from "../IconButtons";
import TextButton from "../TextButton";

function AddDuties() {
  const duties = ["Duty 1", "Duty 2"];
  return (
    <div className="Add-duties-component">
      <br />
      <br />
      <br />
      <br />
      <h1>Add duties</h1>
      <div className="add-duties-card-container">
        <Card>
          <div className="card-textfields-container">
            <SimpleTextField title="Test" >
              <IconButtons add/>
            </SimpleTextField>
          </div>
          {duties.map((duty) => (
              <ItemCard item={duty}>
              </ItemCard>
            ))}
        </Card> 

      </div>
      <TextButton label="Next" className="green-button-right"/>
      <br />

      <Steppers steps={["Create Excursion", "Create duties", "Create shopping list", "Done"]} doneSteps={1}/>
   
 

    </div>
  );
}

export default AddDuties;
