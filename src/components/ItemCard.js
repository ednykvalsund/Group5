import React from "react"

function ItemCard(props){
    return(
        <div className="item-card-container">
            <div >
                <p> {props.item} {props.amount} {props.unit} </p>
            </div>
        </div>
    )
}

export default ItemCard