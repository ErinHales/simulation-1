import React from "react";
import {Link} from "react-router-dom";

export default function (props) {
    return (
        <div className="header">
            <h1>Shelfie</h1>
            <Link className="headLink1" to="/">Dashboard</Link>
            <Link className="headLink2" to="/add"> Add Inventory</Link>
        </div>
    )
}