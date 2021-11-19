import React from "react";
import UserCard from "./UserCard";

function Card(props) {
  if (props.headline) {
    //If the component has a headline prop defined
    return (
      <div className="card">
        <h2 className="card-headline">{props.headline}</h2>
        {props.children}
      </div>
    );
  } else {
    //If the component does not have a headline prop defined
    return <div className="card">{props.children}</div>;
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
