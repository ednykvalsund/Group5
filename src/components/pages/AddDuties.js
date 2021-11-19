import React from "react";
import Steppers from "../Progress2";
import Card from  "../Card";
import SimpleTextField from "../InputTextRow";
import ItemCard from "../ItemCard";
import IconButtons from "../IconButtons";

function AddDuties() {
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
            <ItemCard item="Take out trash"></ItemCard>
            <ItemCard item="Wipe down counters"></ItemCard>
            <ItemCard item="Clean after dinner"></ItemCard>
        </Card> 
      </div>
      <br />
      <Steppers steps={["Create Excursion", "Create duties", "Create shopping list", "Done"]} doneSteps={1}/>

    </div>
  );
}

export default AddDuties;
