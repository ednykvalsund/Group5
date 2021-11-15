import React from "react"

function ItemCard(props){
    return(
        <div className="item-card-container">
            {props.textInpunt1}
            {props.textInpunt2}
            {props.textInpunt3}
            {props.editBtn}
            {props.deleteBtn}
            
            This is an item card
        </div>
    )
}

export default ItemCard