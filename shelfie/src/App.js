import React, { Component } from 'react';
import Dashboard from "./components/Dashboard/Dashboard.js";
import Form from "./components/Form/Form.js";
import Header from "./components/Header/Header.js";
import axios from "axios";
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import './reset.css';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: [],
      selectedProduct: null
    }

    this.getAllProducts = this.getAllProducts.bind(this);
    this.selectProduct = this.selectProduct.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/inventory`).then(res => {
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

  selectProduct(product) {
    this.setState({
      selectedProduct: product
    })
  }

  render() {
    console.log(this.state.inventory);
    return (
      <div>
       {/* <HashRouter> */}
        <Header />
        {/* <div className="links">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/add" component={Form} />
          <Route path="/edit/:id" component={Form} />
        </Switch>
        </div> */}
        <Dashboard inventory={this.state.inventory} getRequest={this.getAllProducts} select={this.selectProduct} />
        <Form getRequest={this.getAllProducts} product={this.state.selectedProduct} />
      {/* </HashRouter> */}
      </div>
    );
  }
}

export default App;
