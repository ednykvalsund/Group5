import React from "react";
import RadioButtons from "./RadioButtons";
import TextButton from './TextButton';

function Welcome() {
  return (
    <><div className="Welcome-component">
      <h1>Welcome component</h1>
    </div>
    <TextButton id = "green-button" label = "Standard"></TextButton>
    <TextButton id = "grey-button" label = "Grey"></TextButton>
    <TextButton id = "red-button" label = "Alert"></TextButton>
    <RadioButtons>label1 = "Option 1" label2 = "Option2"</RadioButtons>
    </>
    
  );
}

export default Welcome;
