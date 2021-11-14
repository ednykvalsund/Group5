import React from "react";
import Steppers from "../Progress2";
function Shoppinglist() {
  return (
    <div className="Shopping-list-component">
      <h1>Shopping list component</h1>
      <Steppers steps={["Create Excursion", "Create duties", "Create shopping list", "Done"]} doneSteps={2}/>

    </div>
  );
}

export default Shoppinglist;
