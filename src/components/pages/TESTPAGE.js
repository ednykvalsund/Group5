import React from "react";
import Card from "../Card";
import ProgressBar from "../ProgressBar";
import CustomizedSteppers from "../ProgressBar";

function TestPage() {
  return (
    <div className="TestPage-component">
      <h1>Test Page</h1>
      <div className="flex-container">
        
        </div>

      <CustomizedSteppers step={3}/>
    </div>
  );
}

export default TestPage;