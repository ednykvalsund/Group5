import React from "react";
import IconButtons from "./IconButtons";

function ItemCard(props) {
  if (props.amount) {
    return (
      <div className="item-card-container">
        <div className="item-card-text">
          <span className="item-card-text"> {props.item} </span>
          <span className="item-card-text"> {props.amount} </span>
          <span className="item-card-text"> {props.unit} </span>
          {props.children}
          <span className="item-card-text">
            {" "}
            <IconButtons trash />
            <IconButtons edit />
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="item-card-container">
        <div className="item-card-text">
          <span className="item-card-text-duty"> {props.item} </span>
          {props.children}
          <span className="item-card-buttons">
            {" "}
            <IconButtons />
          </span>
        </div>
      </div>
    );
  }
}

export default ItemCard;
