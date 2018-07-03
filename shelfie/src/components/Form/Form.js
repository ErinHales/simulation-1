import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default class Form extends Component {
    constructor() {
        super();

        this.state = {
            image: "",
            productName: "",
            price: null
        }
    }

    componentDidMount() {
        axios.get(`/api/inventory/${this.props.match.params.id}`).then(response => {
            var product = response.data[0];
            this.setState({
                image: product.image,
                productName: product.productname,
                price: product.price
            })
        });
    }

    componentDidUpdate() {
        if(this.props.location.pathname === "/") {
            this.reset();
        }
    }

    updateState(property, e) {
        this.setState({
            [property]: e.target.value
        })
    }

    reset() {
        this.setState({
            image: "",
            productName: "",
            price: 0
        })
    }

    addProduct() {
        const {image, productName, price} = this.state;
        axios.post("/api/product", {image, productName, price}).then(response => {
            this.reset();
        })
    }

    editProduct() {
        const {image, productName, price} = this.state;
        axios.put(`/api/product/${this.props.match.params.id}`, {image, productName, price}).then(response => {

        })
    }

    render() {
        return (
            <div className="form">
            <div className="formContainer">
                <div className="formImageContainer">
                    <img className="formImage" src={this.state.image || "http://i63.tinypic.com/2n1b05y.jpg"} alt="Product"/>
                </div>
                <div className="formInput">
                    <h1>Image URL</h1>
                    <input type="text" value={this.state.image} onChange={(e) => this.updateState("image", e)}/>
                    <h1>Product Name</h1>
                    <input type="text" value={this.state.productName} onChange={(e) => this.updateState("productName", e)}/>
                    <h1>Product Price</h1>
                    <input type="text" value={this.state.price} onChange={(e) => this.updateState("price", e)}/><br/>
                    <div className="formButtons">
                    <Link to="/" className="red" onClick={() => this.reset()}>Cancel</Link>
                    { this.props.location.pathname === "/add" ?  <Link to="/" className="green" onClick={() => this.addProduct()}>Add to Inventory</Link> : <Link to="/" className="green" onClick={() => this.editProduct()}>Save  Changes</Link> }
                    </div>
                </div>
            </div>
            </div>
        )
    }
}