import React from "react";

export default function (props) {
    console.log(props.inventory);
    return (
        <div className="products">
            <h2>{props.inventory.productname}</h2>
            <h2>{props.inventory.price}</h2>
            <div className="imgContainer">
                <img className="productImg" src={props.inventory.image} alt={props.inventory.productName}/>
            </div>
            <button onClick={() => props.delete(props.inventory.productid)}>Delete</button>
            <button onClick={() => props.select(props.inventory)}>Edit</button>
        </div>
    )
}
//