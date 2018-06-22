import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default class Form extends Component {
    constructor() {
        super();

        this.state = {
            image: "",
            productName: "",
            price: 0,
            id: null,
            edit: false,
            product: {}
        }
    }

    componentDidUpdate() {
        //if(user navigates to add view) {
            // this.reset();
        // }
    }

    updateURL(e) {
        this.setState({
            image: e.target.value
        })
    }

    updateName(e) {
        this.setState({
            productName: e.target.value
        })
    }

    updateImg(e) {
        this.setState({
            price: e.target.value
        })
    }

    reset() {
        this.setState({
            image: "",
            productName: "",
            price: 0,
            id: null,
            product: {}
        })
    }

    addProduct() {
        const {image, productName, price} = this.state;
        axios.post("/api/product", {image, productName, price}).then(response => {
            this.reset();
        })
    }

    editProduct() {
        const {image, productName, price, id} = this.state;
        axios.put(`/api/product/${id}`, {image, productName, price}).then(response => {
            this.props.getRequest();
        })
    }

    getProduct() {
        axios.get(`/api/product/${this.state.id}`).then(response => {
            this.setState({
                product: response.data
            })
        })
    }

    render() {
        return(
            <div className="input">
                <div className="container">
                <img src={this.state.image || "http://i63.tinypic.com/2n1b05y.jpg"} alt="Product Image"/>
                <h1>Image URL</h1>
                <input type="text" onChange={(e) => this.updateURL(e)}/>
                <h1>Product Name</h1>
                <input type="text" onChange={(e) => this.updateName(e)}/>
                <h1>Product Price</h1>
                <input type="text" onChange={(e) => this.updateImg(e)}/><br/>
                <button onClick={() => this.reset()}>Cancel</button>
                { this.state.edit === true ? <Link to="/" onClick={() => this.editProduct()}>Save Changes</Link> : <Link to="/" onClick={() => this.addProduct()}>Add to Inventory</Link> }
                </div>
            </div>
        )
    }
}