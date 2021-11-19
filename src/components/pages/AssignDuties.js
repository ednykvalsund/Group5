import React from "react";
import Card from "../Card";
import SimpleTextField from "../InputTextRow";
import InputDropRow from "../InputDropRow";
import InputDropMultiRow from "../InputDropRow";

function AssignDuties(props) {
  return (
    <div className="page-container">
      <h1 className="page-title">{props.title}</h1>
      <div className="card-container">
        <Card>
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
