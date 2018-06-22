import React, {Component} from "react";
import axios from "axios";

export default class Form extends Component {
    constructor() {
        super();

        this.state = {
            image: "",
            productName: "",
            price: 0,
            id: null,
            edit: false
        }
    }

    componentDidUpdate(oldInfo) {
        if(oldInfo.productid !== this.props.productid) {
            this.setState({
                image: this.props.image,
                productName: this.props.productname,
                price: this.props.price,
                id: this.props.productid,
                edit: true
            })
        }
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
            id: null
        })
    }

    addProduct() {
        const {image, productName, price} = this.state;
        axios.post("/api/product", {image, productName, price}).then(response => {
            this.props.getRequest();
            this.reset();
        })
    }

    editProduct() {
        const {image, productName, price, id} = this.state;
        axios.put(`/api/product/${id}`, {image, productName, price}).then(response => {
            this.props.getRequest();
        })
    }

    render() {
        return(
            <div className="input">
                <h1>Product Image</h1>
                <input type="text" onChange={(e) => this.updateURL(e)}/>
                <h3>{this.state.image}</h3>
                <h1>Product Name</h1>
                <input type="text" onChange={(e) => this.updateName(e)}/>
                <h3>{this.state.productName}</h3>
                <h1>Product Price</h1>
                <input type="text" onChange={(e) => this.updateImg(e)}/>
                <h3>{this.state.price}</h3>
                <button onClick={() => this.reset()}>Cancel</button>
                { this.state.edit === true ? <button onClick={() => this.editProduct()}>Save Changes</button> : <button onClick={() => this.addProduct()}>Add to Inventory</button> }
            </div>
        )
    }
}