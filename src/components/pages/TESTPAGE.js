import React from "react";
import Card from "../Card";
import Steppers from "../Progress2";
import BasicSelect from "../InputDropRow";
import SimpleTextField from "../InputTextRow";
import MultiSelect from "../InputDropMultiRow";
function TestPage() {
  return (
    <div className="TestPage-component">
      <h1>Test Page</h1>
      <div className="flex-container"></div>
      <Steppers
        steps={["Create Excursion", "Create duties", "Create shopping list"]}
        doneSteps={1}
      />
      <SimpleTextField title="Destination" />
      <BasicSelect title="Year" options={["2021", "2022", "2023", "2024"]} />
      <MultiSelect title="Year" options={["2021", "2022", "2023", "2024"]} />
    </div>
  );
}

export default TestPage;
