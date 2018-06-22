import React, { Component } from 'react';
import Dashboard from "./components/Dashboard/Dashboard.js";
import Form from "./components/Form/Form.js";
import Header from "./components/Header/Header.js";
import {HashRouter, Route, Switch} from 'react-router-dom';
import './reset.css';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
    }
  }

  render() {
    console.log(this.state.inventory);
    return (
      <HashRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/add" component={Form} />
            <Route path="/edit/:id" component={Form} />
          </Switch>
        </div>
        {/* <Dashboard inventory={this.state.inventory} getRequest={this.getAllProducts} select={this.selectProduct} />
        <Form getRequest={this.getAllProducts} product={this.state.selectedProduct} /> */}
      </HashRouter>
    );
  }
}

export default App;
