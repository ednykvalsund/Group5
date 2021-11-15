import React from "react"

function ItemCard(props){
    return(
        <div className="item-card-container">
            <div className="item-card-text">
                <span className="item-card-text"> {props.item}  </span>
                <span className="item-card-text"> {props.amount}  </span>
                <span className="item-card-text"> {props.unit} </span>
            </div>
        </div>
    )
}

export default ItemCard