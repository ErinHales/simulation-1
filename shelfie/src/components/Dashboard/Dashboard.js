import React, {Component} from "react";
import Product from "../Product/Product.js";
import axios from "axios";

export default class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
        }
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct(id) {
        axios.delete(`/api/product/${id}`).then(response => {
            this.props.getRequest();
        })
    }

    render() {
        var {inventory} = this.props;
        var products = [];
        var deleteProduct = this.deleteProduct;
        var select = this.props.select;
        function displayProducts() {
            inventory.forEach(item => {
                products.push(<Product inventory={item} delete={deleteProduct} select={select} />)
            })
        }
        displayProducts();
        return(
            <div>
                Dashboard
                {products}
            </div>
        )
    }
}