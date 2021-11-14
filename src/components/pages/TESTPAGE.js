import React from "react";
import Card from "../Card";
import Steppers from "../Progress2";
function TestPage() {
  return (
    <div className="TestPage-component">
      <h1>Test Page</h1>
      <div className="flex-container">
        
        </div>
<Steppers steps={["Create Excursion", "Create duties", "Create shopping list"]} doneSteps={1}/>

    </div>
  );
}

export default TestPage;