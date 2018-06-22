import React from "react";
import {Link} from "react-router-dom";

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
            <Link to={`/edit/${props.inventory.productid}`}>Edit</Link>
        </div>
    )
}
//