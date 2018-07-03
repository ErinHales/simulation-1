import React, { Component } from 'react';
import Dashboard from "./components/Dashboard/Dashboard.js";
import Form from "./components/Form/Form.js";
import Header from "./components/Header/Header.js";
import {HashRouter, Route, Switch} from 'react-router-dom';
import './reset.css';
import './App.css';

class App extends Component {

  render() {
    return (
      <HashRouter>
        <div>
          <Header />
          <Switch className="mainContainer">
            <Route exact path="/" component={Dashboard}/>
            <Route path="/add" component={Form}/>
            <Route path="/edit/:id" component={Form} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
