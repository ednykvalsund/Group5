import React from "react";
import Card from "../Card";
import SimpleTextField from "../InputTextRow";
import InputDropRow from "../InputDropRow";
import InputDropMultiRow from "../InputDropRow";

function AssignDuties() {
  return (
    <div className="Assign-duties-component">
      <br />
      <br />
      <br />
      <br />
      <div className="assign-duties-card-container">
        <Card headline="Assign Duties">
          <div className="card-textfields-container">
            <SimpleTextField title="Test" />
            <SimpleTextField title="Test" />
            <SimpleTextField title="Test" />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default AssignDuties;
