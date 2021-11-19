import React from "react";
import Card from "../Card";
import SimpleTextField from "../InputTextRow";
import InputDropRow from "../InputDropRow";
import InputDropMultiRow from "../InputDropRow";
import ItemCard from "../ItemCard";
import MultiSelect from "../InputDropMultiRow";
import TextButton from "../TextButton";

function AssignDuties() {

const duties = ["Duty 1", "Duty 2"];
const options = ["test 1", "test 2"];
 

  return (
    <div className="Assign-duties-component">
      <br />
      <br />
      <br />
      <br />
      <div className="assign-duties-card-container">
        <Card headline="Assign Duties">
          <div className="card-textfields-container">
          {duties.map((duty) => (
          <ItemCard item={duty}>
             <MultiSelect title="Responsible" options={options}/>
            <MultiSelect title="Assign" options={options}/>
          </ItemCard>
          ))}
          </div>
        </Card>
        <TextButton label="Next" className="green-button-right"/>
      </div>
    </div>
  );
}

export default AssignDuties;
