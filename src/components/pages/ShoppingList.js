import React from "react";
import Steppers from "../Progress2";
import Card from "../Card";
import RadioButtons from "../RadioButtons";
import InputTextRow from "../InputTextRow";
import IconButtons from "../IconButtons";
import ItemCard from "../ItemCard";
import SimpleTextField from "../InputTextRow";


function Shoppinglist() {
  return (
    <div className="Shopping-list-component">
      <h1>Shopping list</h1>

      <div className="assign-duties-card-container">
        <Card>
          <RadioButtons label1="Per Person" label2="Total amount" />

          <p>
            {" "}
            Adult: {} Teenagers: {} Children: {}{" "}
          </p>
<div className="inline-forms">
          <SimpleTextField title="Amount" />
          <SimpleTextField title="Unit" />
          <SimpleTextField title="Item" >
            <IconButtons add />
          </SimpleTextField>
 
</div>
          <div className="card-textfields-container"></div>
        </Card>
      </div>

      <Steppers
        steps={[
          "Create Excursion",
          "Create duties",
          "Create shopping list",
          "Done",
        ]}
        doneSteps={2}
      />
    </div>
  );
}

export default Shoppinglist;
