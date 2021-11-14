import React from "react";
import Steppers from "../Progress2";

function AddDuties() {
  return (
    <div className="Add-duties-component">
      <h1>AddDuties component</h1>
      <Steppers steps={["Create Excursion", "Create duties", "Create shopping list", "Done"]} doneSteps={1}/>

    </div>
  );
}

export default AddDuties;
