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
    }

    componentDidMount() {
        axios.get("/api/inventory").then(res => {
          this.setState({
            inventory: res.data
          })
          console.log(res);
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
        console.log(this.state.inventory);
        var {inventory} = this.state;
        var products = [];
        console.log(products);
        var deleteProduct = this.deleteProduct;
        function displayProducts() {
            inventory.forEach(item => {
                products.push(<Product inventory={item} delete={deleteProduct} />)
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