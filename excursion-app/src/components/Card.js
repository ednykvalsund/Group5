import React from "react";
import UserCard from "./UserCard";

function Card(props) {
  if (props.headline) {
    //If the component has a headline prop defined
    return (
      <div id="card-container">
        <h2>{props.headline}</h2>
      </div>
    );
  } else {
    //If the component does not have a headline prop defined
    return (
      <div id="card-container">
        <p>This is a component without a headline</p>
      </div>
    );
  }
}

// function Card({ id, label }) {
//   return (
//     <div id="card-container" label="label">
//       <div id={id}>{label}</div>
//     </div>
//   );
// }

export default Card;
