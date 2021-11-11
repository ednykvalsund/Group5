import React from "react";
import UserCard from "./UserCard";

function Card(props) {
  return (
    <div id="card-container">
      <div id={props.id} label={props.label}></div>
    </div>
  );
}

export default Card;
