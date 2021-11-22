import React, { useState } from "react";
import Steppers from "../Progress2";
import Card from "../Card";
import RadioButtons from "../RadioButtons";
import IconButtons from "../IconButtons";
import ItemCard from "../ItemCard";
import SimpleTextField from "../InputTextRow";
import TextButton from "../TextButton";

function Shoppinglist(props) {

  const [measure, setMeasure] = useState('Per Person')

  const items = ["Item 1", "Item 2"];
  console.log(measure);
  return (
    <div className="page-container">
      <h1 className="page-title">{props.title}</h1>
      <div className="card-container">
        <Card>
          <div className="card-textfields-container">
            <div className="shopping-list-amount-info">
              <div className="left-wrapper">
                <RadioButtons value={measure} onChange={(e) => setMeasure(e.target.value)}label1="Per Person" label2="Total amount" />{" "}
              </div>
              <p>
                {" "}
                Adult: {} Teenagers: {} Children: {}{" "}
              </p>
            </div>

            <div className="inline-forms">
              <div className="shopping-amount-and-unit">
                {" "}
                <SimpleTextField title="Amount" />{" "}
              </div>
              <div className="shopping-amount-and-unit">
                {" "}
                <SimpleTextField title="Unit" />{" "}
              </div>
              <div className="shopping-add-item">
                <SimpleTextField title="Item">
                  <IconButtons add />
                </SimpleTextField>
              </div>
            </div>
            {items.map((duty) => (
              <ItemCard item={duty}></ItemCard>
            ))}
          </div>
        </Card>
      </div>
    
    <div className="steppers-container">
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
      <TextButton
        label="Next"
        className="green-button-right"
      />
    
    </div>
  );
}

export default Shoppinglist;
