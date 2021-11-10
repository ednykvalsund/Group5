import React from "react";

function Card({id, label}){
    return (
        <div id="card-container">
            <div id={id}> {label} </div>
        </div>

    )
}

export default Card