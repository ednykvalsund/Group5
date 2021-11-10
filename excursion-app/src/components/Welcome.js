import React from "react";
import RadioButtons from "./RadioButtons";
import TextButton from './TextButton';
import InputDropRow from "./InputDropRow";
import Card from "./Card"

function Welcome() {
  return (
    <><div className="Welcome-component">
      <h1>Welcome component</h1>
      <Card 
        id="card-create-excursion"
        label="Card"
      />
    </div>
    </>
    
  );
}

export default Welcome;
