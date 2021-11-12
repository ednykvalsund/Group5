import React from "react";
import Card from "./Card";

function TestPage() {
  return (
    <div className="TestPage-component">
      <h1>Test Page</h1>
      <div className="flex-container">
          <Card id="0" headline="Assign duties">
            <p>Hellotest</p>
          </Card>
          <Card id="0">
            <p>Component with</p>
            <p>no headline. This</p>
            <p>is a just a child</p>
          </Card>
          <Card id="0" headline="Assign duties"></Card>
        </div>

      
    </div>
  );
}

export default TestPage;