import React, {Component} from "react";
import Product from "../Product/Product.js";
import axios from "axios";

export default class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            inventory: []
        }
        this.deleteProduct = this.deleteProduct.bind(this);
        this.getAllProducts = this.getAllProducts.bind(this);
    }

    componentDidMount() {
        axios.get("/api/inventory").then(res => {
          this.setState({
            inventory: res.data
          })
        })
    }

    getAllProducts() {
        axios.get(`/api/inventory`).then(res => {
          this.setState({
            inventory: res.data
          })
        })
    }

    deleteProduct(id) {
        axios.delete(`/api/product/${id}`).then(response => {
            this.getAllProducts();
        })
    }

    render() {
        var {inventory} = this.state;
        var products = [];
        var deleteProduct = this.deleteProduct;
        function displayProducts() {
            inventory.forEach(item => {
                products.push(<Product inventory={item} delete={deleteProduct} />)
            })
        }
        displayProducts();
        return(
            <div className="productsContainer">
                {products}
            </div>
        )
    }
}