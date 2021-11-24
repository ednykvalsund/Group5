import React from "react";

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

export default Card;
