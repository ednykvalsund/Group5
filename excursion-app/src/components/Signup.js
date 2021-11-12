import React from "react";
import Card from "./Card";

function Signup() {
  return (
    <div className="Signup-page">
      <h1>Signup component</h1>
      <div className="flex-container">
        <Card id="0" headline="Add person">
          <p>Hellotest</p>
        </Card>
        <Card id="0" headline="Add drive">
          <p>Component </p>
          <p>is a just a child</p>
        </Card>
        <Card id="0" headline="Registered"></Card>
      </div>
    </div>
  );
}

export default Signup;
