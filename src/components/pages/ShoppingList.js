import React from "react";
import Steppers from "../Progress2";
import Card from "../Card";
import RadioButtons from "../RadioButtons";
import IconButtons from "../IconButtons";
import ItemCard from "../ItemCard";
import SimpleTextField from "../InputTextRow";

function Shoppinglist() {
  const items = ["Item 1", "Item 2"];
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
            <SimpleTextField title="Item">
              <IconButtons add />
            </SimpleTextField>
          </div>
          {items.map((duty) => (
              <ItemCard className="item-card-text-duty" item={duty}>
              </ItemCard>
            ))}
    
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
