import React from "react";
import TextButton from "../TextButton";


function PlanPage() {
  return (
    <div className="Plan-page-compoent">
      <h1>Let's plan!</h1>
      <h2>Do you wanna create or maintain?</h2>
      <TextButton className="green-button" label="Create"/>
      <TextButton className="green-button" label="Maintain"/>

    </div>
  );
}

export default PlanPage;
